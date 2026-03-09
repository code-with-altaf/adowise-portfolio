"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    LogOut,
    ExternalLink,
    MessageSquare,
    MessageSquareQuote
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Blogs", href: "/admin/blogs", icon: BookOpen },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Founders", href: "/admin/founders", icon: Users },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar({ lang }: { lang: string }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/admin/auth", { method: "DELETE" });
        router.push(`/${lang}/admin`);
    };

    return (
        <aside className="w-24 flex flex-col h-screen sticky top-0 border-r-[4px] border-black bg-[#5DADE2] z-40 overflow-y-auto scrollbar-hide py-6 overflow-x-hidden">
            <div className="flex flex-col items-center gap-8 flex-1">
                <div className="flex items-center justify-center">
                    <div className="h-14 w-14 bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black font-black text-2xl rotate-[-3deg]">
                        A
                    </div>
                </div>

                <nav className="flex flex-col gap-4">
                    {navItems.map((item) => {
                        const href = `/${lang}${item.href}`;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={item.name}
                                href={href}
                                title={item.name}
                                className={cn(
                                    "retro-sidebar-item",
                                    isActive && "retro-sidebar-item-active"
                                )}
                            >
                                <item.icon size={26} className="text-black" />
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="flex flex-col items-center pb-6 gap-4">
                <button
                    className="retro-sidebar-item bg-[#FFDE03]"
                    onClick={() => window.open(`/${lang}`, "_blank")}
                    title="View Website"
                >
                    <ExternalLink size={22} className="text-black" />
                </button>
                <button
                    className="retro-sidebar-item bg-[#F48FB1]"
                    onClick={handleLogout}
                    title="Sign Out"
                >
                    <LogOut size={22} className="text-black" />
                </button>
            </div>
        </aside>
    );
}
