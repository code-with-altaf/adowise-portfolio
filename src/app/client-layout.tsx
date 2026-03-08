"use client";

import { Inter } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

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
    return (
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
            <Providers>
                <LenisProvider>
                    <div>
                        <Header lang={lang} messages={messages} />
                        {children}
                        <Footer lang={lang} messages={messages} />
                    </div>
                </LenisProvider>
            </Providers>
        </body>
    );
}
