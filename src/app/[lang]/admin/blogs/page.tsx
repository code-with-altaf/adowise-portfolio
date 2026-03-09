"use client";

import { useState, useEffect } from "react";
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Loader2,
    Calendar,
    X,
    Image as ImageIcon,
    Check,
    MoreHorizontal,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import RichEditor from "@/components/RichEditor";

interface Blog {
    _id: string;
    title: string;
    paragraph: string;
    image: string;
    author: {
        name: string;
        image: string;
        designation: string;
    };
    tags: string[];
    publishDate: string;
}

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        paragraph: "",
        image: "",
        authorName: "Adowise Founder",
        authorImage: "/images/blog/author-01.png",
        authorDesignation: "Founder",
        tags: "",
        publishDate: new Date().getFullYear().toString()
    });

    useEffect(() => {
        fetchBlogs();
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

    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/admin/blogs");
            const data = await res.json().catch(() => []);
            setBlogs(data);
        } catch (err) {
            console.error("Failed to fetch blogs", err);
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
            title: formData.title,
            paragraph: formData.paragraph,
            image: formData.image,
            author: {
                name: formData.authorName,
                image: formData.authorImage,
                designation: formData.authorDesignation,
            },
            tags: formData.tags.split(",").map(t => t.trim()),
            publishDate: formData.publishDate
        };

        try {
            const res = await fetch("/api/admin/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchBlogs();
                setFormData({
                    title: "",
                    paragraph: "",
                    image: "",
                    authorName: "Adowise Founder",
                    authorImage: "/images/blog/author-01.png",
                    authorDesignation: "Founder",
                    tags: "",
                    publishDate: new Date().getFullYear().toString()
                });
            }
        } catch (err) {
            alert("Failed to create blog");
        } finally {
            setLoading(false);
        }
    };

    const deleteBlog = async (id: string) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        try {
            const res = await fetch("/api/admin/blogs", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) fetchBlogs();
        } catch (err) {
            alert("Delete failed");
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    const populateBlogs = async () => {
        if (!confirm("This will auto-generate content for blogs that only have titles. Continue?")) return;
        setLoading(true);
        try {
            const res = await fetch("/api/admin/blogs/populate", { method: "POST" });
            const data = await res.json();
            if (data.success) {
                alert(`✅ ${data.message}`);
                fetchBlogs();
            } else {
                alert("Failed: " + (data.error || "Unknown error"));
            }
        } catch (err) {
            alert("Failed to populate blogs");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="retro-title">Creative Corner</h2>
                    <p className="text-black/50 font-black uppercase tracking-widest text-xs mt-2">Manage your blog posts, trends, and stories.</p>
                </div>
                <div className="flex gap-4">
                    <Button onClick={populateBlogs} className="retro-button-secondary h-auto py-4 px-6 gap-3 bg-[#EB984E] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase tracking-tighter text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <Sparkles size={20} strokeWidth={3} />
                        <span>Auto-Fill Content</span>
                    </Button>
                    <Button onClick={() => setIsModalOpen(true)} className="retro-button h-auto py-4 px-8 gap-3">
                        <Plus size={24} strokeWidth={3} />
                        <span className="text-lg">New Story</span>
                    </Button>
                </div>
            </div>

            <div className="retro-card bg-white">
                <div className="p-8 border-b-[4px] border-black flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Article Library</h3>
                        <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Filter and manage your published content.</p>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black" strokeWidth={3} />
                        <Input
                            placeholder="Find a story..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="retro-input pl-12 w-full"
                        />
                    </div>
                </div>
                <div className="p-0">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <Loader2 className="h-10 w-10 animate-spin text-black" strokeWidth={3} />
                            <p className="text-black font-black uppercase tracking-widest text-xs">Summoning Articles...</p>
                        </div>
                    ) : filteredBlogs.length === 0 ? (
                        <div className="text-center py-24 text-black/50 font-bold uppercase italic translate-y-2">
                            No articles found. Start sharing your stories today!
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b-[3px] border-black hover:bg-transparent">
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Article</TableHead>
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">Posted On</TableHead>
                                    <TableHead className="text-black font-black uppercase tracking-widest text-[10px] h-14">The Brain</TableHead>
                                    <TableHead className="text-right text-black font-black uppercase tracking-widest text-[10px] h-14">Chaos Control</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredBlogs.map((blog) => (
                                    <TableRow key={blog._id} className="border-b-[2px] border-black/5 hover:bg-[#FFDE03]/5 transition-colors group">
                                        <TableCell className="py-6">
                                            <div className="flex items-center gap-6">
                                                <div className="relative h-16 w-16 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden shrink-0 rotate-[-2deg] group-hover:rotate-0 transition-transform">
                                                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                                                </div>
                                                <div className="max-w-xs md:max-w-md">
                                                    <div className="font-black text-black text-xl leading-none mb-1 group-hover:underline underline-offset-4 decoration-[#5DADE2] decoration-4">{blog.title}</div>
                                                    <div className="flex gap-2">
                                                        {blog.tags.map(tag => (
                                                            <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-black font-bold whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} strokeWidth={3} className="text-black/30" />
                                                {blog.publishDate}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="bg-[#EB984E]/20 text-[#EB984E] border-2 border-[#EB984E] px-3 py-1 font-black uppercase tracking-tighter text-xs">
                                                {blog.author.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-4">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-10 w-10 border-[3px] border-black bg-[#F48FB1] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                                    onClick={() => deleteBlog(blog._id)}
                                                >
                                                    <Trash2 size={20} strokeWidth={3} />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-10 w-10 border-[3px] border-black bg-[#5DADE2] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                                                >
                                                    <Edit size={20} strokeWidth={3} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>

            {/* Modal - Redesigned to Playful Retro */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-4xl bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Fixed Header */}
                        <div className="p-8 border-b-[4px] border-black bg-[#FFDE03] flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Draft a Masterpiece</h3>
                                <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Unleash your creativity on the world!</p>
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Headline</Label>
                                            <Input
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                placeholder="Something mind-blowing..."
                                                className="retro-input"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">Labels (Separated by Comma)</Label>
                                            <Input
                                                value={formData.tags}
                                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                                placeholder="Epic, Tech, Future"
                                                className="retro-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Cover Art</Label>
                                        <div className="relative aspect-video bg-slate-50 border-[3px] border-dashed border-black flex items-center justify-center overflow-hidden group hover:bg-[#FFDE03]/5 transition-colors cursor-pointer">
                                            {formData.image ? (
                                                <Image src={formData.image} alt="Preview" fill className="object-cover p-2" />
                                            ) : (
                                                <div className="flex flex-col items-center gap-3 text-black/30">
                                                    <ImageIcon size={48} strokeWidth={1} />
                                                    <span className="text-xs uppercase font-black tracking-[0.2em]">Click to Upload Image</span>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                onChange={handleImageUpload}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                accept="image/*"
                                            />
                                            {isUploading && (
                                                <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
                                                    <Loader2 className="animate-spin text-black h-10 w-10" strokeWidth={3} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-black font-black uppercase tracking-widest text-[10px] ml-1">The Story Itself</Label>
                                    <RichEditor
                                        value={formData.paragraph}
                                        onChange={(val) => setFormData({ ...formData, paragraph: val })}
                                        placeholder="Start typing your epic legend here..."
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
                                    Trash It
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading || !formData.image || isUploading}
                                    className="retro-button h-14 px-12 text-xl"
                                >
                                    {loading ? <Loader2 className="animate-spin mr-3 h-6 w-6" strokeWidth={3} /> : <Check className="mr-3 h-6 w-6" strokeWidth={3} />}
                                    Launch It!
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
