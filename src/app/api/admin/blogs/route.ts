import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    await dbConnect();
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const data = await req.json();
        const blog = await Blog.create(data);
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { _id, ...data } = await req.json();
        const blog = await Blog.findByIdAndUpdate(_id, data, { new: true });
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { id } = await req.json();
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
    }
}
