"use client";

import { useEffect, useState } from "react";
import { X, Bell, Info, CheckCircle2, AlertTriangle, Megaphone } from "lucide-react";

interface NotificationData {
    _id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'promo';
}

export default function NotificationPopup() {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState<string[]>([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await fetch("/api/admin/notifications?public=true");
                if (res.ok) {
                    const data = await res.json();
                    // Filter out already dismissed
                    const dismissedIds = JSON.parse(localStorage.getItem("dismissed_notifs") || "[]");
                    const fresh = data.filter((n: NotificationData) => !dismissedIds.includes(n._id));
                    setDismissed(dismissedIds);
                    setNotifications(fresh);
                    if (fresh.length > 0) {
                        // Show after a small delay for better UX
                        setTimeout(() => setIsVisible(true), 2000);
                    }
                }
            } catch (e) {
                // Silently fail
            }
        };

        fetchNotifications();
    }, []);

    const dismiss = (id: string) => {
        const updated = [...dismissed, id];
        setDismissed(updated);
        localStorage.setItem("dismissed_notifs", JSON.stringify(updated));

        const remaining = notifications.filter(n => n._id !== id);
        setNotifications(remaining);
        if (remaining.length === 0) {
            setIsVisible(false);
        } else if (currentIndex >= remaining.length) {
            setCurrentIndex(0);
        }
    };

    const dismissAll = () => {
        const allIds = [...dismissed, ...notifications.map(n => n._id)];
        localStorage.setItem("dismissed_notifs", JSON.stringify(allIds));
        setNotifications([]);
        setIsVisible(false);
    };

    if (!isVisible || notifications.length === 0) return null;

    const current = notifications[currentIndex];
    if (!current) return null;

    const getTypeStyle = (type: string) => {
        switch (type) {
            case 'info': return { bg: 'bg-blue-500', icon: Info, border: 'border-blue-600' };
            case 'success': return { bg: 'bg-emerald-500', icon: CheckCircle2, border: 'border-emerald-600' };
            case 'warning': return { bg: 'bg-amber-500', icon: AlertTriangle, border: 'border-amber-600' };
            case 'promo': return { bg: 'bg-pink-500', icon: Megaphone, border: 'border-pink-600' };
            default: return { bg: 'bg-blue-500', icon: Bell, border: 'border-blue-600' };
        }
    };

    const style = getTypeStyle(current.type);
    const TypeIcon = style.icon;

    return (
        <div className="fixed bottom-6 right-6 z-[90] max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className={`${style.bg} rounded-2xl shadow-2xl overflow-hidden border-2 ${style.border}`}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-black/10">
                    <div className="flex items-center gap-2">
                        <TypeIcon size={16} className="text-white" />
                        <span className="text-white/90 text-xs font-bold uppercase tracking-wider">
                            {current.type === 'promo' ? 'Announcement' : current.type}
                        </span>
                        {notifications.length > 1 && (
                            <span className="text-white/60 text-[10px] font-bold ml-1">
                                ({currentIndex + 1}/{notifications.length})
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => dismiss(current._id)}
                        className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-4 py-4 bg-white/10 backdrop-blur-sm">
                    <h4 className="text-white font-bold text-base leading-snug mb-1">{current.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{current.message}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-2 bg-black/10">
                    {notifications.length > 1 ? (
                        <button
                            onClick={() => setCurrentIndex((currentIndex + 1) % notifications.length)}
                            className="text-white/70 text-xs font-bold hover:text-white transition-colors"
                        >
                            Next →
                        </button>
                    ) : (
                        <div></div>
                    )}
                    <button
                        onClick={dismissAll}
                        className="text-white/50 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors"
                    >
                        Dismiss All
                    </button>
                </div>
            </div>
        </div>
    );
}
