/* =============================================================
   NAVBAR — "Warm Slate" design system
   Top navigation with animated underline sweep on hover,
   active state highlighting, dark mode toggle, and mobile menu.
   ============================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "About", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Talks", href: "/talks" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = isDark
    ? scrolled
      ? "bg-[oklch(0.13_0.015_240/0.95)] backdrop-blur-md shadow-sm border-b border-[oklch(1_0_0/0.08)]"
      : "bg-[oklch(0.13_0.015_240/0.85)] backdrop-blur-sm"
    : scrolled
      ? "bg-[oklch(0.985_0.008_80/0.95)] backdrop-blur-md shadow-sm border-b border-[oklch(0.9_0.01_240)]"
      : "bg-[oklch(0.985_0.008_80/0.8)] backdrop-blur-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/">
            <span className="font-display font-semibold text-[1.05rem] text-foreground hover:text-primary transition-colors duration-200 tracking-tight">
              Justin Davis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? location === "/"
                  : location.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`
                      relative px-3 py-1.5 text-sm font-medium
                      transition-colors duration-200 rounded-sm group
                      ${isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                    <span
                      className={`
                        absolute bottom-0 left-3 right-3 h-[1.5px] bg-primary
                        transition-all duration-250 ease-out
                        ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
                      `}
                      style={{ transformOrigin: "left center" }}
                    />
                  </span>
                </Link>
              );
            })}

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`
                ml-2 p-2 rounded-md transition-all duration-200
                ${isDark
                  ? "text-[oklch(0.78_0.1_80)] hover:bg-[oklch(0.22_0.05_80)] hover:text-[oklch(0.88_0.1_80)]"
                  : "text-[oklch(0.52_0.02_240)] hover:bg-[oklch(0.94_0.04_264)] hover:text-[oklch(0.45_0.18_264)]"
                }
              `}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark mode toggle (mobile) */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger */}
            <button
              className="flex flex-col gap-1.5 p-2 rounded"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 border-b border-border" : "max-h-0"
        } bg-background`}
      >
        <nav className="container py-3 flex flex-col gap-0.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? location === "/"
                : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={`
                    block px-3 py-2.5 text-sm font-medium rounded
                    transition-colors duration-150
                    ${isActive
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                    }
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
