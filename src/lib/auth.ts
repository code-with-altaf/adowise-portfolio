import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev-only";

export async function signJWT(payload: any) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

export async function verifyJWT(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

export async function getAdminAuth() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) return null;
    return await verifyJWT(token);
}
