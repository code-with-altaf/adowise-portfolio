"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitorLogger({ lang }: { lang: string }) {
    const pathname = usePathname();

    useEffect(() => {
        const logVisit = async (coords?: { lat: number; lng: number }) => {
            try {
                await fetch("/api/visit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        path: pathname,
                        language: lang,
                        ...(coords && { coordinates: coords }),
                    }),
                });
            } catch (error) {
                // Silently fail as this is not critical
            }
        };

        // Request location permission
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    logVisit({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => {
                    // User denied or error — log without coordinates
                    logVisit();
                },
                { timeout: 5000 }
            );
        } else {
            logVisit();
        }

        // Request notification permission
        if ("Notification" in window && Notification.permission === "default") {
            // Small delay so it doesn't fire immediately on page load
            const timer = setTimeout(() => {
                Notification.requestPermission();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [pathname, lang]);

    return null;
}
