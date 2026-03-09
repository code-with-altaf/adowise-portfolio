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
    MessageSquareQuote,
    Target,
    Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Blogs", href: "/admin/blogs", icon: BookOpen },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Founders", href: "/admin/founders", icon: Users },
    { name: "Goals", href: "/admin/goals", icon: Target },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
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
        <aside className="w-24 flex flex-col h-screen sticky top-0 border-r-[4px] border-black bg-[#5DADE2] z-40 overflow-hidden">
            {/* Logo - fixed top */}
            <div className="flex items-center justify-center py-5 shrink-0">
                <div className="h-12 w-12 bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black font-black text-xl rotate-[-3deg]">
                    A
                </div>
            </div>

            {/* Nav items - scrollable middle */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col items-center gap-2 py-2 px-2 min-h-0">
                {navItems.map((item) => {
                    const href = `/${lang}${item.href}`;
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={item.name}
                            href={href}
                            title={item.name}
                            className={cn(
                                "retro-sidebar-item shrink-0",
                                isActive && "retro-sidebar-item-active"
                            )}
                        >
                            <item.icon size={24} className="text-black" />
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom actions - fixed bottom */}
            <div className="flex flex-col items-center py-4 gap-3 shrink-0 border-t-2 border-black/20">
                <button
                    className="retro-sidebar-item bg-[#FFDE03]"
                    onClick={() => window.open(`/${lang}`, "_blank")}
                    title="View Website"
                >
                    <ExternalLink size={20} className="text-black" />
                </button>
                <button
                    className="retro-sidebar-item bg-[#F48FB1]"
                    onClick={handleLogout}
                    title="Sign Out"
                >
                    <LogOut size={20} className="text-black" />
                </button>
            </div>
        </aside>
    );
}
