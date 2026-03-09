"use client";

import { useState, useEffect } from "react";
import {
    Save,
    Globe,
    MessageCircle,
    Calendar,
    Layout,
    Loader2,
    Check,
    AlertCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [savedKey, setSavedKey] = useState("");

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/admin/settings");
            const data = await res.json();
            setSettings(data);
        } catch (err) {
            console.error("Failed to fetch settings", err);
        } finally {
            setLoading(false);
        }
    };

    const saveSetting = async (key: string, value: string) => {
        setSaving(true);
        setSavedKey("");
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key, value }),
            });
            if (res.ok) {
                setSavedKey(key);
                setTimeout(() => setSavedKey(""), 3000);
            }
        } catch (err) {
            alert("Save failed");
        } finally {
            setSaving(false);
        }
    };

    const configGroups = [
        {
            title: "Contact & Support",
            description: "Manage how clients reach out to your team.",
            icon: MessageCircle,
            items: [
                { key: "whatsapp_number", label: "WhatsApp Number", placeholder: "e.g. 9882835865", icon: MessageCircle },
                { key: "whatsapp_message", label: "Default WhatsApp Message", placeholder: "Hi Adowise Team...", icon: MessageCircle },
            ]
        },
        {
            title: "Booking & Demos",
            description: "Configure scheduling and demonstration links.",
            icon: Calendar,
            items: [
                { key: "calendly_url", label: "Calendly Profile URL", placeholder: "https://calendly.com/...", icon: Calendar },
                { key: "demo_btn_text", label: "Demo Button Text", placeholder: "Book a Demo", icon: Layout },
            ]
        },
        {
            title: "Social & External",
            description: "Connect your professional social profiles.",
            icon: Globe,
            items: [
                { key: "linkedin_url", label: "LinkedIn Company URL", placeholder: "https://linkedin.com/company/...", icon: Globe },
                { key: "twitter_url", label: "Twitter / X Profile", placeholder: "https://x.com/...", icon: Globe },
            ]
        }
    ];

    if (loading) return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-slate-400">Loading configurations...</p>
        </div>
    );

    return (
        <div className="space-y-12 max-w-5xl mx-auto py-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="retro-title">Nerve Center</h1>
                <p className="text-black/50 font-black uppercase tracking-widest text-sm mt-2">Manage global contact links and site parameters.</p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {configGroups.map((group, idx) => (
                    <div key={idx} className="retro-card bg-white">
                        <div className="p-8 border-b-[4px] border-black bg-white flex items-center gap-6">
                            <div className="p-4 border-[3px] border-black bg-[#AEBDFC] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg]">
                                <group.icon size={32} strokeWidth={3} className="text-black" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter">{group.title}</h3>
                                <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">{group.description}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
                            {group.items.map((item) => (
                                <div key={item.key} className="space-y-4">
                                    <div className="flex justify-between items-center px-1">
                                        <Label className="text-black font-black uppercase tracking-widest text-[10px]">{item.label}</Label>
                                        {savedKey === item.key && (
                                            <span className="text-[10px] font-black text-emerald-600 flex items-center gap-1 uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                                                <Check size={12} strokeWidth={4} />
                                                Saved!
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-4">
                                        <Input
                                            value={settings[item.key] || ""}
                                            onChange={(e) => setSettings({ ...settings, [item.key]: e.target.value })}
                                            placeholder={item.placeholder}
                                            className="retro-input flex-1 h-14"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => saveSetting(item.key, settings[item.key])}
                                            disabled={saving}
                                            className="retro-button h-14 w-14 p-0 shrink-0"
                                            title="Save Setting"
                                        >
                                            {saving && savedKey === "" ? <Loader2 className="animate-spin" /> : <Save size={24} strokeWidth={3} />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#EB984E]/10 border-[3px] border-black p-10 flex items-start gap-8 shadow-[8px_8px_0px_0px_rgba(235,152,78,0.3)]">
                <div className="p-4 border-[3px] border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[#EB984E]">
                    <AlertCircle size={32} strokeWidth={3} />
                </div>
                <div>
                    <h4 className="font-black text-black mb-2 text-2xl uppercase italic tracking-tighter">Instant Deployment Hub</h4>
                    <p className="text-lg text-black/60 font-bold leading-relaxed">Any changes made here are instantly reflected in the live environment. Please verify destination URLs before saving to ensure seamless user experience.</p>
                </div>
            </div>
        </div>
    );
}
