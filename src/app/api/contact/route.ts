import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newContact = await Contact.create({
            name,
            email,
            subject,
            message,
        });

        return NextResponse.json(
            { message: "Message sent successfully", id: newContact._id },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
