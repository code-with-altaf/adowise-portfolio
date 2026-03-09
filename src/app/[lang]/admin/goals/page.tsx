"use client";

import { useState, useEffect } from "react";
import {
    Plus,
    Trash2,
    CheckCircle2,
    Clock,
    AlertCircle,
    Loader2,
    X,
    Check,
    Target,
    Filter
} from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Goal {
    _id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    priority: 'low' | 'medium' | 'high';
    deadline: string;
}

export default function AdminGoalsPage() {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const { lang } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        deadline: ""
    });

    useEffect(() => {
        fetchGoals();
    }, []);

    const fetchGoals = async () => {
        try {
            const res = await fetch("/api/admin/goals");
            const data = await res.json().catch(() => []);
            setGoals(data);
        } catch (err) {
            console.error("Failed to fetch goals", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/admin/goals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchGoals();
                setFormData({
                    title: "",
                    description: "",
                    status: "pending",
                    priority: "medium",
                    deadline: ""
                });
            }
        } catch (err) {
            alert("Failed to create goal");
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id: string, currentStatus: string) => {
        const nextStatus = currentStatus === 'completed' ? 'pending' : 'completed';
        try {
            await fetch("/api/admin/goals", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id, status: nextStatus }),
            });
            fetchGoals();
        } catch (err) {
            console.error("Failed to update status");
        }
    };

    const deleteGoal = async (id: string) => {
        if (!confirm("Abandon this strategy?")) return;

        try {
            await fetch("/api/admin/goals", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            fetchGoals();
        } catch (err) {
            alert("Delete failed");
        }
    };

    const filteredGoals = goals.filter(g =>
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase())
    );

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'bg-[#F48FB1]';
            case 'medium': return 'bg-[#FFDE03]';
            case 'low': return 'bg-[#AEBDFC]';
            default: return 'bg-slate-200';
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title text-[#EB984E]">Mission Control</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Strategize, Execute, and Dominate your project roadmap.</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className="retro-button h-auto py-4 px-8 gap-3 bg-[#EB984E]">
                    <Plus size={24} strokeWidth={3} />
                    <span className="text-lg">New Objective</span>
                </Button>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Strategic Objectives</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Track your progress towards world domination.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/30" strokeWidth={3} />
                        <Input
                            placeholder="Filter objectives..."
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
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Status</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Objective</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Priority</TableHead>
                                <TableHead className="text-white font-black uppercase tracking-widest text-[10px] h-14">Deadline</TableHead>
                                <TableHead className="text-right text-white font-black uppercase tracking-widest text-[10px] h-14">Chaos Control</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center">
                                        <Loader2 className="animate-spin h-10 w-10 mx-auto text-black" strokeWidth={3} />
                                        <p className="mt-4 font-black uppercase text-xs tracking-widest">Calculating Trajectories...</p>
                                    </TableCell>
                                </TableRow>
                            ) : filteredGoals.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-64 text-center text-black/50 font-black uppercase italic">
                                        No active objectives. Time to dream big?
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredGoals.map((goal) => (
                                    <TableRow key={goal._id} className="border-b-[2px] border-black/5 hover:bg-[#EB984E]/5 transition-colors group">
                                        <TableCell>
                                            <button
                                                onClick={() => toggleStatus(goal._id, goal.status)}
                                                className={`h-10 w-10 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all ${goal.status === 'completed' ? 'bg-emerald-400 rotate-0' : 'bg-white rotate-[-3deg] hover:rotate-0'
                                                    }`}
                                            >
                                                {goal.status === 'completed' ? <Check size={20} strokeWidth={4} /> : <Target size={20} strokeWidth={2} className="text-black/20" />}
                                            </button>
                                        </TableCell>
                                        <TableCell className="py-6">
                                            <div className="max-w-md">
                                                <div className={`font-black text-lg leading-tight mb-1 ${goal.status === 'completed' ? 'line-through text-black/40' : 'text-black'}`}>
                                                    {goal.title}
                                                </div>
                                                <div className="text-sm font-bold text-black/50 line-clamp-1 italic">
                                                    {goal.description}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`${getPriorityColor(goal.priority)} text-black font-black uppercase tracking-tighter px-3 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px]`}>
                                                {goal.priority}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2 text-black/60 font-black text-[10px] uppercase">
                                                <Clock size={14} strokeWidth={3} />
                                                {new Date(goal.deadline).toLocaleDateString()}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => deleteGoal(goal._id)}
                                                className="h-10 w-10 border-[3px] border-black bg-[#F48FB1] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                            >
                                                <Trash2 size={20} strokeWidth={3} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Goal Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-xl bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Fixed Header */}
                        <div className="p-8 border-b-[4px] border-black bg-[#EB984E] flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-black">New Strategy</h3>
                                <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Define your next big move.</p>
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
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Objective Title</Label>
                                    <Input
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="e.g. Launch the Secret Weapon"
                                        className="retro-input"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Plan (Description)</Label>
                                    <textarea
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="retro-input w-full min-h-[100px]"
                                        placeholder="Detail your strategy..."
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Priority</Label>
                                        <select
                                            className="retro-input w-full h-11 py-0 px-3 cursor-pointer"
                                            value={formData.priority}
                                            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                        >
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Deadline</Label>
                                        <Input
                                            type="date"
                                            required
                                            value={formData.deadline}
                                            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
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
                                <Button type="submit" disabled={loading} className="retro-button h-14 px-12 text-xl bg-[#EB984E]">
                                    {loading ? <Loader2 className="animate-spin mr-3 h-6 w-6" strokeWidth={3} /> : <CheckCircle2 className="mr-3 h-6 w-6" strokeWidth={3} />}
                                    Onboard Goal
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
