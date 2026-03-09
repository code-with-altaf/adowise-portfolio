"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { useTheme } from "next-themes";
import { ShinyButton } from "../ui/shiny-button";

import LanguagePicker from "./LanguagePicker";

const Header = ({ lang, messages }: { lang: string; messages: any }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [logoClass, setLogoClass] = useState("");
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const t = messages?.Menu || {};
  const [settings, setSettings] = useState<any>({});

  useEffect(() => {
    fetch("/api/admin/settings")
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error("Failed to load settings", err));
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  useEffect(() => {
    setLogoClass(resolvedTheme === "dark" ? "logo-white" : "");
  }, [resolvedTheme]);

  return (
    <header
      className={`header top-0 left-0 z-[9999] flex w-full items-center ${sticky
        ? "fixed shadow-sticky bg-white/10 dark:bg-black/10 backdrop-blur-lg transition-all"
        : "absolute"
        }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* LOGO */}
          <div className="w-60 max-w-full px-2">
            <Link
              href={`/${lang}`}
              className={`header-logo flex w-full items-center gap-2 text-3xl font-bold ${sticky ? "py-5 lg:py-2" : "py-8"
                } text-primary dark:text-white`}
            >
              <img
                src="/adowise-logo.png"
                alt="Adowise"
                className={`logo h-9 w-9 object-contain ${logoClass}`}
              />
            </Link>
          </div>

          {/* RIGHT SIDE ICONS ONLY ON MOBILE */}
          <div className="flex items-center gap-3 lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-[9999]">
            <LanguagePicker />
            <ThemeToggler />
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="px-3 py-[6px] rounded-lg"
            >
              <span
                className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${navbarOpen ? "rotate-45 translate-y-1" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black dark:bg-white my-1 transition-all ${navbarOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${navbarOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
              />
            </button>
          </div>

          {/* NAVIGATION + DESKTOP ICONS */}
          <div className="flex w-full items-center justify-between px-6">
            {/* NAV MENU */}
            <nav
              className={`navbar absolute right-4 z-30 w-[250px] rounded border px-6 py-4 duration-300
                ${
                // Always use backdrop blur when menu is open on mobile
                navbarOpen
                  ? "top-full opacity-100 visible bg-white/90 dark:bg-black/90 backdrop-blur-xl border-gray-200 dark:border-white/10"
                  : "top-[120%] opacity-0 invisible"
                }
                lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:visible lg:backdrop-blur-none
                ${
                // Apply backdrop blur for sticky header in desktop
                sticky
                  ? "lg:backdrop-blur-lg"
                  : ""
                }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => {
                  // Localize title if possible
                  const localizedTitle = t[menuItem.title.toLowerCase()] || menuItem.title;
                  const localizedPath = menuItem.path.startsWith("/") ? `/${lang}${menuItem.path === "/" ? "" : menuItem.path}` : menuItem.path;

                  return (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={localizedPath}
                          className={`flex py-2 lg:py-6 text-base ${pathname === localizedPath
                            ? "text-primary dark:text-white"
                            : "text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                            }`}
                        >
                          {localizedTitle}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="cursor-pointer flex items-center justify-between py-2 lg:py-6 text-base text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                          >
                            {localizedTitle}
                            <span className="pl-3">▼</span>
                          </p>
                          <div
                            className={`submenu rounded-sm shadow-lg lg:absolute lg:left-0 lg:top-full lg:w-[250px] p-4 transition-all
                              ${openIndex === index
                                ? "block"
                                : "hidden lg:opacity-0 lg:invisible lg:group-hover:visible lg:group-hover:opacity-100"
                              }
                              ${
                              // Apply backdrop blur to submenu
                              sticky || navbarOpen
                                ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl"
                                : "bg-white dark:bg-dark"
                              }`}
                          >
                            {menuItem.submenu?.map((sub, i) => (
                              <Link
                                key={i}
                                href={`/${lang}${sub.path}`}
                                className="block py-2.5 px-3 text-sm text-dark dark:text-white/70 hover:text-primary"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* DESKTOP RIGHT SIDE ICONS */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href={settings.calendly_url || "https://calendly.com/infomohdaftab/30min"}>
                <ShinyButton>{settings.demo_btn_text || t.demo}</ShinyButton>
              </Link>
              <LanguagePicker />
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;