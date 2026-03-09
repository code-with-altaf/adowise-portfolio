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
        let hasRequested = false;

        const handleNativeNotifications = async (notifs: NotificationData[]) => {
            if (!("Notification" in window)) return;

            const requestAndShow = async () => {
                if (hasRequested) return;
                hasRequested = true;

                let permission = Notification.permission;
                if (permission !== "granted" && permission !== "denied") {
                    permission = await Notification.requestPermission();
                }

                if (permission === "granted") {
                    notifs.forEach((n, index) => {
                        setTimeout(() => {
                            const notification = new Notification(n.title, {
                                body: n.message,
                                icon: "/adowise-logo.png",
                                tag: n._id
                            });

                            notification.onclick = () => {
                                window.focus();
                                notification.close();
                            };

                            const currentDismissed = JSON.parse(localStorage.getItem("dismissed_notifs") || "[]");
                            if (!currentDismissed.includes(n._id)) {
                                localStorage.setItem("dismissed_notifs", JSON.stringify([...currentDismissed, n._id]));
                            }
                        }, index * 1000);
                    });
                }

                window.removeEventListener("click", requestAndShow);
                window.removeEventListener("touchstart", requestAndShow);
            };

            window.addEventListener("click", requestAndShow);
            window.addEventListener("touchstart", requestAndShow);
        };

        const fetchNotifications = async () => {
            try {
                const res = await fetch("/api/admin/notifications?public=true");
                if (res.ok) {
                    const data = await res.json();
                    const dismissedIds = JSON.parse(localStorage.getItem("dismissed_notifs") || "[]");
                    const fresh = data.filter((n: NotificationData) => !dismissedIds.includes(n._id));

                    if (fresh.length > 0) {
                        handleNativeNotifications(fresh);
                    }
                }
            } catch (e) {
                console.error("Fetch notifs error:", e);
            }
        };

        fetchNotifications();
    }, []);

    return null; // Return nothing to remove UI from the page
}
