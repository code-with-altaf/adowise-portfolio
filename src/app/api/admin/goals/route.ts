import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Goal from "@/models/Goal";
import { getAdminAuth } from "@/lib/auth";

export async function GET() {
    await dbConnect();
    try {
        const goals = await Goal.find({}).sort({ createdAt: -1 });
        return NextResponse.json(goals);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch goals" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const data = await req.json();
        const goal = await Goal.create(data);
        return NextResponse.json(goal, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create goal" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { _id, ...data } = await req.json();
        const goal = await Goal.findByIdAndUpdate(_id, data, { new: true });
        return NextResponse.json(goal);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update goal" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { id } = await req.json();
        await Goal.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete goal" }, { status: 500 });
    }
}
