"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Lock, Loader2, Sparkles, Ghost, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { lang } = useParams();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push("/en/admin/dashboard");
            } else {
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFDE03]/5 p-6 font-primary overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-20 left-20 text-[#5DADE2]/20 rotate-12 scale-150 animate-bounce duration-[3000ms]">
                <Ghost size={120} strokeWidth={2} />
            </div>
            <div className="absolute bottom-20 right-20 text-[#EB984E]/20 -rotate-12 scale-150 animate-pulse">
                <Sparkles size={120} strokeWidth={2} />
            </div>

            <div className="w-full max-w-[450px] bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative z-10 animate-in zoom-in-95 duration-500">
                <div className="p-10 border-b-[6px] border-black bg-[#EB984E] relative">
                    <div className="absolute -top-10 -left-10 bg-[#5DADE2] border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-8deg] animate-in slide-in-from-top-10 duration-700">
                        <Lock className="w-10 h-10 text-white" strokeWidth={3} />
                    </div>
                    <div className="text-center pt-4">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-black leading-none mb-2">
                            Restricted<br />Sector
                        </h2>
                        <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] inline-block">
                            Adowise HQ Entry
                        </span>
                    </div>
                </div>

                <form onSubmit={handleLogin} className="p-10 space-y-8 bg-white">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <Label className="text-black font-black uppercase tracking-widest text-xs ml-1 flex items-center gap-2">
                                Access Cipher <ShieldCheck size={14} className="text-[#EB984E]" />
                            </Label>
                            <Input
                                type="password"
                                placeholder="THE SECRET CODE..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="retro-input h-16 text-xl tracking-widest"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-4 border-[3px] border-black bg-[#F48FB1]/20 text-black font-black uppercase italic text-xs text-center animate-shake">
                                🚨 ERROR: {error}
                            </div>
                        )}
                    </div>

                    <div className="space-y-4 pt-2">
                        <Button
                            type="submit"
                            className="retro-button w-full h-16 text-2xl"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-3 h-8 w-8 animate-spin" strokeWidth={3} />
                                    ENTRY...
                                </>
                            ) : (
                                "Initiate Access"
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            className="w-full text-black/40 font-black uppercase tracking-widest text-[10px] hover:bg-black/5 flex items-center justify-center gap-2"
                            onClick={() => router.push(`/${lang}`)}
                        >
                            Abort Mission & Back to Home
                        </Button>
                    </div>
                </form>
            </div>

            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </div>
    );
}
