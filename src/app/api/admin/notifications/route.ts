import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Notification from "@/models/Notification";
import { getAdminAuth } from "@/lib/auth";

// GET: Fetch all notifications (admin) or active ones (public)
export async function GET(req: Request) {
    await dbConnect();
    try {
        const { searchParams } = new URL(req.url);
        const isPublic = searchParams.get("public") === "true";

        if (isPublic) {
            // Public: only active and non-expired notifications
            const notifications = await Notification.find({
                isActive: true,
                $or: [
                    { expiresAt: { $exists: false } },
                    { expiresAt: null },
                    { expiresAt: { $gt: new Date() } }
                ]
            }).sort({ createdAt: -1 }).limit(5);
            return NextResponse.json(notifications);
        }

        // Admin: all notifications
        const auth = await getAdminAuth();
        if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const notifications = await Notification.find({}).sort({ createdAt: -1 });
        return NextResponse.json(notifications);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
    }
}

// POST: Create a new notification (admin only)
export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const data = await req.json();
        const notification = await Notification.create(data);
        return NextResponse.json(notification, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create notification" }, { status: 500 });
    }
}

// PUT: Update a notification (admin only)
export async function PUT(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { _id, ...data } = await req.json();
        const notification = await Notification.findOneAndUpdate({ _id }, data, { returnDocument: 'after' });
        return NextResponse.json(notification);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update notification" }, { status: 500 });
    }
}

// DELETE: Remove a notification (admin only)
export async function DELETE(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await dbConnect();
    try {
        const { id } = await req.json();
        await Notification.findOneAndDelete({ _id: id });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete notification" }, { status: 500 });
    }
}
