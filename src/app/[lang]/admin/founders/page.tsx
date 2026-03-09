"use client";

import { useState, useEffect } from "react";
import {
    Plus,
    Trash2,
    Loader2,
    X,
    Image as ImageIcon,
    Check,
    Search
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";

interface Founder {
    _id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    portfolio: string;
    social: {
        linkedin: string;
        twitter: string;
    };
}

export default function AdminFoundersPage() {
    const [founders, setFounders] = useState<Founder[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [search, setSearch] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        image: "",
        bio: "",
        portfolio: "",
        linkedin: "",
        twitter: ""
    });

    useEffect(() => {
        fetchFounders();
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

    const fetchFounders = async () => {
        try {
            const res = await fetch("/api/admin/founders");
            const data = await res.json().catch(() => []);
            setFounders(data);
        } catch (err) {
            console.error("Failed to fetch founders", err);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/admin/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json().catch(() => ({}));
            if (data.url) {
                setFormData(prev => ({ ...prev, image: data.url }));
            }
        } catch (err) {
            alert("Image upload failed");
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const submissionData = {
            name: formData.name,
            role: formData.role,
            image: formData.image,
            bio: formData.bio,
            portfolio: formData.portfolio,
            social: {
                linkedin: formData.linkedin,
                twitter: formData.twitter,
            }
        };

        try {
            const res = await fetch("/api/admin/founders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchFounders();
                setFormData({
                    name: "",
                    role: "",
                    image: "",
                    bio: "",
                    portfolio: "",
                    linkedin: "",
                    twitter: ""
                });
            }
        } catch (err) {
            alert("Failed to create founder profile");
        } finally {
            setLoading(false);
        }
    };

    const deleteFounder = async (id: string) => {
        if (!confirm("Remove this founder profile?")) return;

        try {
            const res = await fetch("/api/admin/founders", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) fetchFounders();
        } catch (err) {
            alert("Delete failed");
        }
    };

    const filteredFounders = founders.filter(f =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title">The Dream Team</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Manage profiles of the visionary leaders behind Adowise.</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className="retro-button h-auto py-4 px-8 gap-3">
                    <Plus size={24} strokeWidth={3} />
                    <span className="text-lg">Add Leader</span>
                </Button>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Visionaries</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">The people making the magic happen.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" strokeWidth={3} />
                        <Input
                            placeholder="Find a leader..."
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
                                <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Face</TableHead>
                                <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Mission</TableHead>
                                <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Legend</TableHead>
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
                            ) : filteredFounders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-32 text-center text-black/50 font-bold uppercase italic">
                                        No founders found. Time to recruit?
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredFounders.map((founder) => (
                                    <TableRow key={founder._id} className="border-b-[2px] border-black/5 hover:bg-[#AEBDFC]/5 transition-colors group">
                                        <TableCell className="py-6">
                                            <div className="flex items-center gap-6">
                                                <div className="relative h-14 w-14 border-[3px] border-black bg-[#5DADE2] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden rotate-[-2deg] group-hover:rotate-0 transition-transform">
                                                    <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-black text-black text-lg leading-none">{founder.name}</div>
                                                    <div className="text-[10px] text-black font-black uppercase tracking-widest bg-black/5 px-2 py-0.5 mt-1">Founding Member</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-[#AEBDFC]/20 text-[#2E4053] font-black uppercase tracking-tighter px-3 py-1 border-[2px] border-black/10">
                                                {founder.role}
                                            </span>
                                        </TableCell>
                                        <TableCell className="max-w-md">
                                            <div className="truncate text-black font-bold text-sm italic" title={founder.bio}>
                                                {founder.bio}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => deleteFounder(founder._id)}
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

            {/* Founder Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-2xl bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Fixed Header */}
                        <div className="p-8 border-b-[4px] border-black bg-[#AEBDFC] flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Recruit Leader</h3>
                                <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Add a new face to your visionary team.</p>
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
                                <div className="flex justify-center">
                                    <div className="relative h-32 w-32 bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden group cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                                        {formData.image ? (
                                            <Image src={formData.image} alt="Preview" fill className="object-cover" />
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-black/40">
                                                <ImageIcon size={32} strokeWidth={3} />
                                                <span className="text-[10px] uppercase font-black tracking-widest">Add Photo</span>
                                            </div>
                                        )}
                                        <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                        {isUploading && <div className="absolute inset-0 bg-[#FFDE03]/80 flex items-center justify-center"><Loader2 className="animate-spin text-black h-8 w-8" strokeWidth={3} /></div>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Full Name</Label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="retro-input"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Role</Label>
                                        <Input
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="CEO & Founder"
                                            className="retro-input"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Legend (Bio)</Label>
                                    <textarea
                                        placeholder="Introduce the founder..."
                                        className="retro-input w-full min-h-[120px]"
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">LinkedIn Profile</Label>
                                        <Input
                                            value={formData.linkedin}
                                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                            placeholder="URL"
                                            className="retro-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Twitter Profile</Label>
                                        <Input
                                            value={formData.twitter}
                                            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                                            placeholder="URL"
                                            className="retro-input"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Portfolio Link</Label>
                                    <Input
                                        value={formData.portfolio}
                                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                        placeholder="URL"
                                        className="retro-input"
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
                                <Button type="submit" disabled={loading || !formData.image || isUploading} className="retro-button h-14 px-12 text-xl">
                                    {loading ? <Loader2 className="animate-spin mr-3 h-6 w-6" strokeWidth={3} /> : <Check className="mr-3 h-6 w-6" strokeWidth={3} />}
                                    Onboard Now!
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
