"use client";

import { useEffect, useState } from "react";
import {
    Search,
    Loader2,
    Globe,
    Clock,
    Monitor,
    MapPin,
    ChevronLeft
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function VisitorsLogPage() {
    const [visitors, setVisitors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const { lang } = useParams();

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const res = await fetch("/api/admin/visitors");
                const data = await res.json().catch(() => ({ recent: [] }));
                if (res.ok) setVisitors(data.recent);
            } catch (error) {
                console.error("Failed to fetch visitors");
            } finally {
                setLoading(false);
            }
        };
        fetchVisitors();
    }, []);

    const filteredVisitors = visitors.filter(v =>
        v.ip.toLowerCase().includes(search.toLowerCase()) ||
        (v.location?.country || "").toLowerCase().includes(search.toLowerCase()) ||
        (v.location?.city || "").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Link href={`/${lang}/admin/dashboard`} className="text-black/50 hover:text-black transition-colors">
                            <ChevronLeft size={20} />
                        </Link>
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/40 bg-black/5 px-2 py-0.5">Surveillance Hub</span>
                    </div>
                    <h2 className="retro-title">Digital Pathfinders</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Every step, every click, every shadow haunting your domain.</p>
                </div>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6 bg-[#5DADE2]/5">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Entry Logs</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Real-time intelligence on world traffic.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/30" />
                        <Input
                            placeholder="Search by IP or Region..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="retro-input pl-12 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                </div>

                <div className="p-0 overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b-[4px] border-black bg-black text-white hover:bg-black">
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Identity (IP)</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Origin (Location)</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Timestamp</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Mission (Path)</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Device (UA)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center">
                                        <Loader2 className="animate-spin h-10 w-10 mx-auto text-black" strokeWidth={3} />
                                        <p className="mt-4 font-black uppercase text-xs tracking-widest">Scanning Network...</p>
                                    </TableCell>
                                </TableRow>
                            ) : filteredVisitors.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center text-black/50 font-black uppercase italic">
                                        The void is silent. No pathfinders found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredVisitors.map((visit) => (
                                    <TableRow key={visit._id} className="border-b-[2px] border-black/10 hover:bg-[#FFDE03]/10 transition-colors group">
                                        <TableCell className="py-6 font-black text-black">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 bg-black border-2 border-black flex items-center justify-center text-[#FFDE03] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                    <Globe size={16} />
                                                </div>
                                                {visit.ip}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} className="text-black/30" />
                                                <span className="font-bold text-black uppercase tracking-tighter">
                                                    {visit.location?.city || "Unknown"}, {visit.location?.country || "Unknown"}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2 text-black/60 font-black text-[10px]">
                                                <Clock size={12} />
                                                {new Date(visit.createdAt).toLocaleString()}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-black/5 border-2 border-black/10 px-2 py-1 font-black text-[10px] uppercase tracking-widest">
                                                {visit.path || "/"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="max-w-[200px]">
                                            <div className="truncate flex items-center gap-2 text-[10px] font-bold text-black/40" title={visit.userAgent}>
                                                <Monitor size={12} />
                                                {visit.userAgent}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
