import { NextResponse } from "next/server";
import { signJWT } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { password } = await req.json();
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: "Admin password not configured in environment" },
                { status: 500 }
            );
        }

        if (password === ADMIN_PASSWORD) {
            const token = await signJWT({ role: "admin" });
            const cookieStore = await cookies();

            cookieStore.set("admin_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24, // 1 day
                path: "/",
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_token");
    return NextResponse.json({ success: true });
}
