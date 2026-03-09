"use client";

import { useEffect, useState } from "react";
import {
    Mail,
    Trash2,
    Clock,
    User,
    MessageSquare,
    Loader2,
    Search
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMessages = async () => {
        try {
            const res = await fetch("/api/admin/messages");
            const data = await res.json().catch(() => []);
            if (res.ok) setMessages(data);
        } catch (error) {
            console.error("Failed to fetch messages");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;

        try {
            const res = await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                setMessages(messages.filter(m => m._id !== id));
            }
        } catch (error) {
            console.error("Failed to delete message");
        }
    };

    const filteredMessages = messages.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title">Incoming Transmissions</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Manage inquiries and secret messages from your base.</p>
                </div>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">The Inbox</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Filter and respond to your audience.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" strokeWidth={3} />
                        <Input
                            placeholder="Search transmissions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="retro-input pl-12 w-full"
                        />
                    </div>
                </div>
                <div className="p-0">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <Loader2 className="h-10 w-10 animate-spin text-black" strokeWidth={3} />
                            <p className="text-black font-black uppercase tracking-widest text-xs">Decrypting Signal...</p>
                        </div>
                    ) : filteredMessages.length === 0 ? (
                        <div className="text-center py-20 text-black/50 font-bold uppercase italic translate-y-2">
                            No transmissions detected. Total silence.
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b-[3px] border-black hover:bg-transparent">
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Signal</TableHead>
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Source</TableHead>
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Content</TableHead>
                                    <TableHead className="text-right text-black font-black uppercase tracking-widest text-[10px] h-14">Chaos Control</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredMessages.map((msg) => (
                                    <TableRow key={msg._id} className="border-b-[2px] border-black/5 hover:bg-emerald-400/5 transition-colors group">
                                        <TableCell className="py-6">
                                            <div className="flex items-center gap-3">
                                                <Clock size={16} strokeWidth={3} className="text-black/30" />
                                                <span className="font-bold text-black">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-black text-black uppercase tracking-tight text-lg">{msg.name}</span>
                                                <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">{msg.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="max-w-md">
                                            <div className="truncate text-black font-bold text-sm italic" title={msg.message}>
                                                &ldquo;{msg.message}&rdquo;
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-10 w-10 border-[3px] border-black bg-[#F48FB1] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                                onClick={() => handleDelete(msg._id)}
                                            >
                                                <Trash2 size={20} strokeWidth={3} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
        </div>
    );
}
