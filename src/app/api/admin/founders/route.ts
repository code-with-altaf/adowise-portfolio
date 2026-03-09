import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Founder from "@/models/Founder";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    await dbConnect();
    try {
        const founders = await Founder.find({}).sort({ order: 1 });
        return NextResponse.json(founders);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch founders" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const data = await req.json();
        const founder = await Founder.create(data);
        return NextResponse.json(founder, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create founder" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { _id, ...data } = await req.json();
        const founder = await Founder.findByIdAndUpdate(_id, data, { new: true });
        return NextResponse.json(founder);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update founder" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { id } = await req.json();
        await Founder.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete founder" }, { status: 500 });
    }
}
