"use client";

import { useState, useEffect } from "react";
import {
    Plus,
    Trash2,
    Loader2,
    X,
    Bell,
    BellRing,
    Eye,
    EyeOff,
    Filter,
    Send,
    Info,
    CheckCircle2,
    AlertTriangle,
    Megaphone
} from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface NotificationType {
    _id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'promo';
    isActive: boolean;
    expiresAt: string;
    createdAt: string;
}

export default function AdminNotificationsPage() {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const { lang } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        message: "",
        type: "info",
        expiresAt: ""
    });

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const res = await fetch("/api/admin/notifications");
            const data = await res.json().catch(() => []);
            setNotifications(data);
        } catch (err) {
            console.error("Failed to fetch notifications", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload: any = { ...formData };
            if (!payload.expiresAt) delete payload.expiresAt;

            const res = await fetch("/api/admin/notifications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchNotifications();
                setFormData({ title: "", message: "", type: "info", expiresAt: "" });
            }
        } catch (err) {
            alert("Failed to create notification");
        } finally {
            setLoading(false);
        }
    };

    const toggleActive = async (id: string, currentState: boolean) => {
        try {
            await fetch("/api/admin/notifications", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id, isActive: !currentState }),
            });
            fetchNotifications();
        } catch (err) {
            console.error("Failed to toggle notification");
        }
    };

    const deleteNotification = async (id: string) => {
        if (!confirm("Delete this notification?")) return;

        try {
            await fetch("/api/admin/notifications", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            fetchNotifications();
        } catch (err) {
            alert("Delete failed");
        }
    };

    const filteredNotifications = notifications.filter(n =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.message.toLowerCase().includes(search.toLowerCase())
    );

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'info': return Info;
            case 'success': return CheckCircle2;
            case 'warning': return AlertTriangle;
            case 'promo': return Megaphone;
            default: return Bell;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'info': return 'bg-[#5DADE2]';
            case 'success': return 'bg-emerald-400';
            case 'warning': return 'bg-[#FFDE03]';
            case 'promo': return 'bg-[#F48FB1]';
            default: return 'bg-slate-200';
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title text-[#F48FB1]">Broadcast Center</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Create and manage push notifications for your visitors.</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className="retro-button h-auto py-4 px-8 gap-3 bg-[#F48FB1]">
                    <Plus size={24} strokeWidth={3} />
                    <span className="text-lg">New Broadcast</span>
                </Button>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">All Broadcasts</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Notifications sent to website visitors.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/30" strokeWidth={3} />
                        <Input
                            placeholder="Filter notifications..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="retro-input pl-12 w-full"
                        />
                    </div>
                </div>

                <div className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b-[3px] border-black hover:bg-transparent bg-black text-white">
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Type</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Notification</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Status</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Expires</TableHead>
                                <TableHead className="text-right text-white font-black uppercase tracking-widest text-[10px] h-14">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center">
                                        <Loader2 className="animate-spin h-10 w-10 mx-auto text-black" strokeWidth={3} />
                                        <p className="mt-4 font-black uppercase text-xs tracking-widest">Loading broadcasts...</p>
                                    </TableCell>
                                </TableRow>
                            ) : filteredNotifications.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center text-black/50 font-black uppercase italic">
                                        No notifications yet. Create your first broadcast!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredNotifications.map((notif) => {
                                    const TypeIcon = getTypeIcon(notif.type);
                                    return (
                                        <TableRow key={notif._id} className="border-b-[2px] border-black/5 hover:bg-[#F48FB1]/5 transition-colors group">
                                            <TableCell>
                                                <div className={`h-10 w-10 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center ${getTypeColor(notif.type)}`}>
                                                    <TypeIcon size={20} strokeWidth={3} />
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-6">
                                                <div className="max-w-md">
                                                    <div className="font-black text-lg leading-tight mb-1 text-black">{notif.title}</div>
                                                    <div className="text-sm font-bold text-black/50 line-clamp-1 italic">{notif.message}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <button
                                                    onClick={() => toggleActive(notif._id, notif.isActive)}
                                                    className={`flex items-center gap-2 px-3 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase tracking-tighter transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] ${notif.isActive ? 'bg-emerald-400' : 'bg-slate-200 text-black/50'
                                                        }`}
                                                >
                                                    {notif.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                                                    {notif.isActive ? 'Active' : 'Inactive'}
                                                </button>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-[10px] font-black text-black/60 uppercase">
                                                    {notif.expiresAt
                                                        ? new Date(notif.expiresAt).toLocaleDateString()
                                                        : "Never"}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => deleteNotification(notif._id)}
                                                    className="h-10 w-10 border-[3px] border-black bg-[#F48FB1] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                                >
                                                    <Trash2 size={20} strokeWidth={3} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Create Notification Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-xl bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Fixed Header */}
                        <div className="p-8 border-b-[4px] border-black bg-[#F48FB1] flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-black">New Broadcast</h3>
                                <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Push a notification to all visitors.</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsModalOpen(false)}
                                className="h-12 w-12 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                            >
                                <X size={24} strokeWidth={3} />
                            </Button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Title</Label>
                                    <Input
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="e.g. New Feature Launch!"
                                        className="retro-input"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Message</Label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="retro-input w-full min-h-[100px]"
                                        placeholder="Write your notification message..."
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Type</Label>
                                        <select
                                            className="retro-input w-full h-11 py-0 px-3 cursor-pointer"
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        >
                                            <option value="info">ℹ️ Info</option>
                                            <option value="success">✅ Success</option>
                                            <option value="warning">⚠️ Warning</option>
                                            <option value="promo">📢 Promo</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Expires (Optional)</Label>
                                        <Input
                                            type="date"
                                            value={formData.expiresAt}
                                            onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
                                            className="retro-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Fixed Footer */}
                            <div className="p-8 border-t-[4px] border-black bg-white flex justify-between gap-4 shrink-0">
                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="font-black uppercase tracking-tighter px-10 h-14 hover:bg-black/5"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={loading} className="retro-button h-14 px-12 text-xl bg-[#F48FB1]">
                                    {loading ? <Loader2 className="animate-spin mr-3 h-6 w-6" strokeWidth={3} /> : <Send className="mr-3 h-6 w-6" strokeWidth={3} />}
                                    Broadcast
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
