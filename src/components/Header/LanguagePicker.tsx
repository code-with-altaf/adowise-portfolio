"use client";
import { useState, useRef, useEffect } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
];

const LanguagePicker = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Detect current language from pathname
    const currentLangCode = pathname.split("/")[1] || "en";
    const selectedLang = languages.find(l => l.code === currentLangCode) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode: string) => {
        const segments = pathname.split("/");
        segments[1] = langCode;
        const newPathname = segments.join("/");
        router.push(newPathname);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef} id="language-picker">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-dark dark:text-white"
                aria-label="Select Language"
            >
                <Languages size={20} />
                <span className="hidden sm:inline text-sm font-medium">{selectedLang.code.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl z-[10000] overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors ${selectedLang.code === lang.code
                                    ? "bg-primary/10 text-primary font-semibold"
                                    : "text-dark dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </div>
                                {selectedLang.code === lang.code && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguagePicker;
