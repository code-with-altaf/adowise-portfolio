import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Setting from "@/models/Setting";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    await dbConnect();
    try {
        const settings = await Setting.find({});
        // Return as key-value pairs for easier frontend usage
        const settingsObj = settings.reduce((acc: any, cur: any) => {
            acc[cur.key] = cur.value;
            return acc;
        }, {});
        return NextResponse.json(settingsObj);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { key, value, description } = await req.json();
        const setting = await Setting.findOneAndUpdate(
            { key },
            { value, description },
            { upsert: true, new: true }
        );
        return NextResponse.json(setting);
    } catch (error) {
        return NextResponse.json({ error: "Failed to save setting" }, { status: 500 });
    }
}
