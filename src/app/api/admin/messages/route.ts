import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    try {
        const isAdmin = await getAdminAuth();
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();
        const messages = await Contact.find({}).sort({ createdAt: -1 });
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const isAdmin = await getAdminAuth();
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 });
        }

        await dbConnect();
        await Contact.findByIdAndDelete(id);

        return NextResponse.json({ message: "Message deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
    }
}
