"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitorLogger({ lang }: { lang: string }) {
    const pathname = usePathname();

    useEffect(() => {
        const logVisit = async () => {
            try {
                await fetch("/api/visit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        path: pathname,
                        language: lang
                    }),
                });
            } catch (error) {
                // Silently fail as this is not critical
            }
        };

        logVisit();
    }, [pathname, lang]);

    return null;
}
