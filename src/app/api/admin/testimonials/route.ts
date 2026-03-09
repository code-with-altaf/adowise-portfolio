import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    await dbConnect();
    try {
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const isAdmin = await getAdminAuth();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    try {
        const data = await req.json();
        const testimonial = await Testimonial.create(data);
        return NextResponse.json(testimonial, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const isAdmin = await getAdminAuth();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    try {
        const { _id, ...data } = await req.json();
        const testimonial = await Testimonial.findByIdAndUpdate(_id, data, { new: true });
        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const isAdmin = await getAdminAuth();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    try {
        const { id } = await req.json();
        await Testimonial.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 });
    }
}
