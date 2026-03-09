import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Founder from "@/models/Founder";
import Contact from "@/models/Contact";
import Visitor from "@/models/Visitor";
import Testimonial from "@/models/Testimonial";
import Goal from "@/models/Goal";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    try {
        const isAdmin = await getAdminAuth();
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const [blogCount, founderCount, messageCount, visitorCount, testimonialCount, goalCount] = await Promise.all([
            Blog.countDocuments(),
            Founder.countDocuments(),
            Contact.countDocuments(),
            Visitor.countDocuments(),
            Testimonial.countDocuments(),
            Goal.countDocuments()
        ]);

        return NextResponse.json({
            blogs: blogCount,
            founders: founderCount,
            messages: messageCount,
            visitors: visitorCount,
            testimonials: testimonialCount,
            goals: goalCount
        });
    } catch (error) {
        console.error("Dashboard stats error:", error);
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
