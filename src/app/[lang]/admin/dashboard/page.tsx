"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
    BookOpen,
    Users,
    Settings,
    ChevronRight,
    TrendingUp,
    Mail,
    Plus,
    Loader2,
    Sparkles,
    Star,
    Check,
    Target,
    Clock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
    const [stats, setStats] = useState({ blogs: 0, founders: 0, messages: 0, visitors: 0, testimonials: 0, goals: 0 });
    const [visitorData, setVisitorData] = useState<{ recent: any[], daily: any[] }>({ recent: [], daily: [] });
    const [goals, setGoals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { lang } = useParams();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [statsRes, visitorRes, goalsRes] = await Promise.all([
                    fetch("/api/admin/stats"),
                    fetch("/api/admin/visitors"),
                    fetch("/api/admin/goals")
                ]);

                if (statsRes.ok) {
                    const statsJson = await statsRes.json().catch(() => ({}));
                    setStats(prev => ({ ...prev, ...statsJson }));
                }

                if (visitorRes.ok) {
                    const visitorJson = await visitorRes.json().catch(() => ({ recent: [], daily: [] }));
                    setVisitorData(visitorJson);
                }

                if (goalsRes.ok) {
                    const goalsJson = await goalsRes.json().catch(() => []);
                    setGoals(goalsJson);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    const statCards = [
        {
            title: "Total Blogs",
            value: stats.blogs,
            icon: BookOpen,
            color: "text-blue-600",
            bg: "bg-blue-50",
            desc: "Published articles"
        },
        {
            title: "Founder Profiles",
            value: stats.founders,
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50",
            desc: "Team members listed"
        },
        {
            title: "Inquiries",
            value: stats.messages,
            icon: Mail,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            desc: "Customer messages"
        },
        {
            title: "Visitors",
            value: stats.visitors || 0,
            icon: Users,
            color: "text-orange-600",
            bg: "bg-orange-50",
            desc: "Website traffic"
        },
        {
            title: "Goals",
            value: stats.goals || 0,
            icon: Star,
            color: "text-amber-600",
            bg: "bg-amber-50",
            desc: "Active missions"
        }
    ];

    const quickActions = [
        { name: "Post New Blog", href: "/admin/blogs", icon: Plus, variant: "default" as const },
        { name: "Manage Team", href: "/admin/founders", icon: Users, variant: "outline" as const },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#FFDE03] border-[3px] border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-6deg]">
                            <Sparkles className="text-black" size={24} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest text-black/60 bg-white border-2 border-dashed border-black px-3 py-1">
                            Control Center
                        </span>
                    </div>
                    <h2 className="retro-title">World Domination<br />Dashboard</h2>
                </div>
                <div className="flex gap-6">
                    {quickActions.map((action, idx) => (
                        <Button
                            key={action.name}
                            asChild
                            className={cn(
                                action.variant === "default" ? "retro-button" : "retro-button-secondary",
                                "h-auto py-4 px-8"
                            )}
                        >
                            <Link href={`/${lang}${action.href}`} className="flex items-center gap-3">
                                <action.icon size={24} />
                                <span className="text-lg">{action.name}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {statCards.map((item, idx) => (
                    <div key={idx} className="retro-card p-8 flex flex-col justify-between group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-sm font-black text-black/40 uppercase tracking-[0.2em]">
                                {item.title}
                            </h3>
                            <div className={cn(
                                "border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                                item.bg === "bg-blue-50" && "bg-[#5DADE2]",
                                item.bg === "bg-purple-50" && "bg-[#EB984E]",
                                item.bg === "bg-emerald-50" && "bg-emerald-400",
                                item.bg === "bg-orange-50" && "bg-[#FFDE03]",
                                item.bg === "bg-pink-50" && "bg-[#F48FB1]"
                            )}>
                                <item.icon size={28} className="text-black" />
                            </div>
                        </div>
                        <div>
                            <div className="text-6xl font-black text-black mb-4 tracking-tighter">
                                {loading ? <Loader2 className="animate-spin h-10 w-10 text-black/20" /> : item.value}
                            </div>
                            <div className="flex items-center gap-2 bg-black/5 px-3 py-1 self-start inline-flex">
                                <div className="h-2 w-2 bg-black animate-ping"></div>
                                <p className="text-[10px] text-black font-black uppercase tracking-widest">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Management Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="retro-card bg-[#FFDE03]/10">
                    <div className="p-8 border-b-[4px] border-black bg-white">
                        <h3 className="text-2xl font-black text-black italic uppercase tracking-tighter">Direct Navigation</h3>
                        <p className="text-black/60 font-bold">Quickly jump to specific management modules.</p>
                    </div>
                    <div className="p-8 space-y-6">
                        {[
                            { label: "Content Editor", desc: "Blogs & Articles", href: "/admin/blogs", icon: BookOpen, color: "bg-[#5DADE2]" },
                            { label: "Link Configurator", desc: "Socials & WhatsApp", href: "/admin/settings", icon: Settings, color: "bg-[#FFDE03]" },
                            { label: "Team Directory", desc: "Founder Profiles", href: "/admin/founders", icon: Users, color: "bg-[#EB984E]" },
                            { label: "Inbox Manager", desc: "Customer Inquiries", href: "/admin/messages", icon: Mail, color: "bg-emerald-400" },
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                href={`/${lang}${link.href}`}
                                className="flex items-center justify-between p-6 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={cn("p-4 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black", link.color)}>
                                        <link.icon size={24} />
                                    </div>
                                    <div>
                                        <div className="text-black font-black text-lg leading-none mb-1 uppercase tracking-tight">{link.label}</div>
                                        <div className="text-xs text-black/50 font-bold uppercase tracking-widest">{link.desc}</div>
                                    </div>
                                </div>
                                <ChevronRight size={24} className="text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-10">
                    <div className="retro-card bg-black text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFDE03] border-l-[4px] border-b-[4px] border-black translate-x-10 translate-y-[-10px] rotate-[15deg] group-hover:rotate-[25deg] transition-transform"></div>
                        <div className="p-10 relative z-10">
                            <div className="h-20 w-20 bg-white border-[4px] border-black flex items-center justify-center mb-8 rotate-[-5deg] shadow-[6px_6px_0px_0px_#EB984E]">
                                <Sparkles className="text-black" size={40} />
                            </div>
                            <h3 className="text-5xl font-black leading-[0.9] italic uppercase tracking-tighter mb-4 underline decoration-[#FFDE03] decoration-8 underline-offset-8">Pro Hub</h3>
                            <p className="text-white/60 text-lg font-bold mb-8">Keep your portfolio fresh and funky for better conversions.</p>
                            <Button className="retro-button w-full h-auto py-6 text-xl text-black">
                                Get Updating!
                            </Button>
                        </div>
                    </div>

                    <div className="p-8 bg-[#5DADE2]/20 border-[3px] border-dashed border-black flex items-start gap-6">
                        <div className="h-12 w-12 bg-white border-[3px] border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                            <Settings size={28} />
                        </div>
                        <div>
                            <h4 className="font-black text-black uppercase tracking-tighter text-xl mb-1">Quick Config Tip</h4>
                            <p className="text-black/70 font-bold leading-snug">
                                Don&apos;t forget to update your WhatsApp and Booking links regularly in the Settings section.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Latest Goals Section */}
                <div className="retro-card bg-white">
                    <div className="p-6 border-b-[4px] border-black bg-[#EB984E]/10">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-black uppercase italic tracking-tighter">Mission Tracker</h3>
                                <p className="text-black/40 font-bold uppercase tracking-widest text-[8px]">Your latest active objectives.</p>
                            </div>
                            <Target className="text-black/20" size={28} />
                        </div>
                    </div>
                    <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
                        {goals.length === 0 ? (
                            <p className="text-center py-10 text-black/30 font-bold uppercase italic">No active goals. Time to strategize!</p>
                        ) : (
                            goals.slice(0, 5).map((goal: any, idx: number) => (
                                <div key={idx} className="p-4 border-2 border-black bg-white flex items-center justify-between group hover:bg-[#EB984E]/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-10 w-10 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center ${goal.status === 'completed' ? 'bg-emerald-400' : goal.status === 'in-progress' ? 'bg-[#FFDE03]' : 'bg-white'
                                            }`}>
                                            {goal.status === 'completed' ? <Check size={18} strokeWidth={4} /> : <Target size={18} strokeWidth={2} className="text-black/30" />}
                                        </div>
                                        <div>
                                            <div className={`font-black text-sm leading-tight ${goal.status === 'completed' ? 'line-through text-black/40' : 'text-black'}`}>
                                                {goal.title}
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-[8px] font-black uppercase px-2 py-0.5 border border-black ${goal.priority === 'high' ? 'bg-[#F48FB1]' : goal.priority === 'medium' ? 'bg-[#FFDE03]' : 'bg-[#AEBDFC]'
                                                    }`}>
                                                    {goal.priority}
                                                </span>
                                                {goal.deadline && (
                                                    <span className="text-[8px] font-black text-black/40 uppercase flex items-center gap-1">
                                                        <Clock size={10} /> {new Date(goal.deadline).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 border border-black ${goal.status === 'completed' ? 'bg-emerald-200' : goal.status === 'in-progress' ? 'bg-[#FFDE03]/50' : 'bg-white'
                                        }`}>
                                        {goal.status}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-4 border-t-2 border-dashed border-black">
                        <Link href={`/${lang}/admin/goals`} className="text-[10px] font-black uppercase tracking-widest text-black hover:underline flex items-center gap-2">
                            View all objectives <ChevronRight size={12} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Visitor Tracking Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Retro Graph */}
                <div className="lg:col-span-2 retro-card bg-white p-8">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter">Visitor Activity</h3>
                            <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Website traffic over the last 7 days.</p>
                        </div>
                        <TrendingUp className="text-black/20" size={32} />
                    </div>

                    <div className="flex items-end justify-between h-64 gap-4 px-4 border-b-4 border-black">
                        {Array.from({ length: 7 }).map((_, i) => {
                            const date = new Date();
                            date.setDate(date.getDate() - (6 - i));
                            const dateStr = date.toISOString().split('T')[0];
                            const dayData = visitorData.daily.find(d => d._id === dateStr);
                            const count = dayData ? dayData.count : 0;
                            const maxCount = Math.max(...visitorData.daily.map(d => d.count), 1);
                            const height = `${(count / maxCount) * 100}%`;

                            return (
                                <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                                    <div className="absolute -top-10 bg-black text-white text-[10px] font-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {count} VISITS
                                    </div>
                                    <div
                                        className="w-full bg-[#FFDE03] border-t-4 border-x-4 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#EB984E]"
                                        style={{ height }}
                                    ></div>
                                    <div className="text-[10px] font-black uppercase tracking-tighter mt-4 rotate-[-45deg] origin-top">
                                        {date.toLocaleDateString('en', { weekday: 'short' })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent IPs */}
                <div className="retro-card bg-white">
                    <div className="p-6 border-b-[4px] border-black bg-[#5DADE2]/10">
                        <h3 className="text-xl font-black uppercase italic tracking-tighter">Recent Infiltrations</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[8px]">Live IP & Location tracking.</p>
                    </div>
                    <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
                        {visitorData.recent.length === 0 ? (
                            <p className="text-center py-10 text-black/30 font-bold uppercase italic">No visitors detected yet.</p>
                        ) : (
                            visitorData.recent.map((visit, idx) => (
                                <div key={idx} className="p-3 border-2 border-black bg-white flex items-center justify-between group hover:bg-[#FFDE03]/10 transition-colors">
                                    <div>
                                        <div className="text-[10px] font-black text-black group-hover:underline">{visit.ip}</div>
                                        <div className="text-[8px] font-black text-black/40 uppercase tracking-widest">
                                            {visit.location?.city || 'Unknown'}, {visit.location?.country || 'Unknown'}
                                        </div>
                                    </div>
                                    <div className="text-[8px] font-black text-black/30 uppercase">
                                        {new Date(visit.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="p-4 border-t-2 border-dashed border-black">
                        <Link href={`/${lang}/admin/visitors`} className="text-[10px] font-black uppercase tracking-widest text-black hover:underline flex items-center gap-2">
                            View all logs <ChevronRight size={12} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
