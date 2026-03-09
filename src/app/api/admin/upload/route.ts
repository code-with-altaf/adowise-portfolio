import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { getAdminAuth } from "@/lib/auth";

export async function POST(req: Request) {
    const auth = await getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise<NextResponse>((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "adowise-portfolio" },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary upload error:", error);
                        resolve(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
                    } else {
                        resolve(NextResponse.json({ url: result?.secure_url }));
                    }
                }
            ).end(buffer);
        });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
