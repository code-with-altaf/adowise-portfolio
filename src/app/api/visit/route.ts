import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Visitor from "@/models/Visitor";

export async function POST(req: Request) {
    await dbConnect();
    try {
        const { path, language, coordinates } = await req.json();
        const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
        const userAgent = req.headers.get("user-agent") || "unknown";

        // Fetch location data from IP
        let location = { country: "Unknown", city: "Unknown" };
        try {
            if (ip !== "127.0.0.1" && ip !== "::1") {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city`);
                const geoData = await geoRes.json();
                if (geoData.status === "success") {
                    location = {
                        country: geoData.country,
                        city: geoData.city
                    };
                }
            }
        } catch (e) {
            console.error("Geo lookup failed:", e);
        }

        // If we have browser coordinates, try reverse geocoding for better accuracy
        if (coordinates?.lat && coordinates?.lng && (location.country === "Unknown" || location.city === "Unknown")) {
            try {
                const reverseRes = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&format=json`,
                    { headers: { 'User-Agent': 'AdowisePortfolio/1.0' } }
                );
                const reverseData = await reverseRes.json();
                if (reverseData.address) {
                    location = {
                        country: reverseData.address.country || location.country,
                        city: reverseData.address.city || reverseData.address.town || reverseData.address.village || location.city,
                    };
                }
            } catch (e) {
                console.error("Reverse geocoding failed:", e);
            }
        }

        await Visitor.create({
            ip,
            userAgent,
            path,
            language,
            location,
            ...(coordinates && { coordinates }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to log visit:", error);
        return NextResponse.json({ error: "Failed to log visit" }, { status: 500 });
    }
}
