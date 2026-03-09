import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Visitor from "@/models/Visitor";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    try {
        const isAdmin = await getAdminAuth();
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        // Get last 100 visitors
        const visitors = await Visitor.find()
            .sort({ createdAt: -1 })
            .limit(100);

        // Group by day for the last 7 days for the graph
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const stats = await Visitor.aggregate([
            {
                $match: {
                    createdAt: { $gte: sevenDaysAgo }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        return NextResponse.json({
            recent: visitors,
            daily: stats
        });
    } catch (error) {
        console.error("Dashboard visitor error:", error);
        return NextResponse.json({ error: "Failed to fetch visitor stats" }, { status: 500 });
    }
}
