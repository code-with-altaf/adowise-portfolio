"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import VisitorLogger from "@/components/VisitorLogger";
import NotificationPopup from "@/components/NotificationPopup";


const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
    children,
    lang,
    messages
}: {
    children: React.ReactNode;
    lang: string;
    messages: any;
}) {
    const pathname = usePathname();
    const isAdminPath = pathname?.split("/").includes("admin");

    return (
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className} overflow-x-hidden`}>
            <Providers>
                <VisitorLogger lang={lang} />
                    {isAdminPath ? (
                        <div className="min-h-screen bg-[#020617]">
                            {children}
                        </div>
                    ) : (
                        <div>
                            <Header lang={lang} messages={messages} />
                            {children}
                            <Footer lang={lang} messages={messages} />
                            <NotificationPopup />
                        </div>

                    )}
                </Providers>
        </body>
    );
}

