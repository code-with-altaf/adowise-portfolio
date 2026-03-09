"use client";

import { Sidebar } from "@/components/Sidebar";
import "@/styles/admin-retro.css";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function AdminLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = use(params);
    const pathname = usePathname();

    // Check if we are on the login page
    const isLoginPage = pathname?.endsWith(`/${lang}/admin`) || pathname === `/${lang}/admin/`;

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar lang={lang} />
            <main className="flex-1 overflow-y-auto">
                <div className="container py-10 max-w-7xl mx-auto px-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
