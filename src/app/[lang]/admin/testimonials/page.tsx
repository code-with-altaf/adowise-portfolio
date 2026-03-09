"use client";

import { useEffect, useState } from "react";
import { Plus, Search, Trash2, Edit2, Loader2, Star, MessageSquareQuote, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        content: "",
        rating: 5,
        image: ""
    });

    useEffect(() => {
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch("/api/admin/testimonials");
            const data = await res.json().catch(() => []);
            if (res.ok) setTestimonials(data);
        } catch (error) {
            console.error("Failed to fetch testimonials");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (testimonial = null) => {
        if (testimonial) {
            setEditingTestimonial(testimonial);
            setFormData({
                name: testimonial.name,
                role: testimonial.role,
                content: testimonial.content,
                rating: testimonial.rating || 5,
                image: testimonial.image || ""
            });
        } else {
            setEditingTestimonial(null);
            setFormData({
                name: "",
                role: "",
                content: "",
                rating: 5,
                image: ""
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "/api/admin/testimonials";
        const method = editingTestimonial ? "PUT" : "POST";
        const body = editingTestimonial ? { ...formData, _id: editingTestimonial._id } : formData;

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchTestimonials();
            }
        } catch (error) {
            console.error("Failed to save testimonial");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this testimonial?")) return;

        try {
            const res = await fetch("/api/admin/testimonials", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (res.ok) {
                fetchTestimonials();
            }
        } catch (error) {
            console.error("Failed to delete testimonial");
        }
    };

    const filteredTestimonials = testimonials.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.role.toLowerCase().includes(search.toLowerCase()) ||
        t.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title">Kind Words</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Manage client feedback and success stories.</p>
                </div>
                <Button onClick={() => handleOpenModal()} className="retro-button h-auto py-4 px-8 gap-3">
                    <Plus size={24} strokeWidth={3} />
                    <span className="text-lg">Add Review</span>
                </Button>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Wall of Fame</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Manage how your clients see your success.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" strokeWidth={3} />
                        <Input
                            placeholder="Find a review..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="retro-input pl-12 w-full"
                        />
                    </div>
                </div>
                <div className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b-[3px] border-black hover:bg-transparent">
                                <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Client</TableHead>
                                <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Kind Words</TableHead>
                                <TableHead className="text-center text-black font-black uppercase tracking-widest text-[10px] h-14">The Score</TableHead>
                                <TableHead className="text-right text-black font-black uppercase tracking-widest text-[10px] h-14">Chaos Control</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-32 text-center">
                                        <Loader2 className="animate-spin h-10 w-10 mx-auto text-black" strokeWidth={3} />
                                    </TableCell>
                                </TableRow>
                            ) : filteredTestimonials.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-32 text-center text-black/50 font-bold uppercase italic">
                                        No testimonials found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredTestimonials.map((testimonial) => (
                                    <TableRow key={testimonial._id} className="border-b-[2px] border-black/5 hover:bg-[#FFDE03]/5 transition-colors group">
                                        <TableCell className="py-6">
                                            <div className="flex items-center gap-6">
                                                <div className="h-14 w-14 border-[3px] border-black bg-[#5DADE2] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black font-black text-xl rotate-[-3deg] group-hover:rotate-0 transition-transform">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-black text-black text-lg leading-none">{testimonial.name}</div>
                                                    <div className="text-[10px] text-black font-black uppercase tracking-widest bg-black/5 px-2 py-0.5 mt-1">{testimonial.role}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="max-w-md">
                                            <div className="line-clamp-2 text-black font-bold text-sm italic py-2" title={testimonial.content}>
                                                &ldquo;{testimonial.content}&rdquo;
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="inline-flex items-center justify-center gap-2 bg-[#FFDE03] border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                <span className="font-black text-black">{testimonial.rating}</span>
                                                <Star size={16} className="fill-black text-black" />
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-3">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleOpenModal(testimonial)}
                                                    className="h-10 w-10 border-[3px] border-black bg-[#5DADE2] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                                >
                                                    <Edit2 size={20} strokeWidth={3} />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleDelete(testimonial._id)}
                                                    className="h-10 w-10 border-[3px] border-black bg-[#F48FB1] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                                >
                                                    <Trash2 size={20} strokeWidth={3} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-2xl bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Fixed Header */}
                        <div className="p-8 border-b-[4px] border-black bg-[#EB984E] flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                                    {editingTestimonial ? "Edit the Praise" : "Add some Love"}
                                </h3>
                                <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Display the best feedback from your clients.</p>
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
                            <div className="flex-1 overflow-y-auto p-8 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Client Name</Label>
                                        <Input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="retro-input"
                                            placeholder="e.g. John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Role / Company</Label>
                                        <Input
                                            required
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="retro-input"
                                            placeholder="e.g. CEO at TechCorp"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Score (1-5)</Label>
                                    <Input
                                        type="number"
                                        min="1"
                                        max="5"
                                        required
                                        value={formData.rating}
                                        onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                        className="retro-input w-32"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Kind Words</Label>
                                    <textarea
                                        required
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        className="retro-input w-full min-h-[150px]"
                                        placeholder="Write the client's feedback here..."
                                    />
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
                                <Button type="submit" className="retro-button h-14 px-12 text-xl">
                                    {editingTestimonial ? "Save it!" : "Launch it!"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
