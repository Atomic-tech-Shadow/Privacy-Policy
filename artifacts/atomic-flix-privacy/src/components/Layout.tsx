import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Confidentialité" },
    { href: "/terms", label: "Conditions d'utilisation" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "hsla(220,22%,6%,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(220 15% 14%)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-transform duration-200 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, hsl(14 100% 57%), hsl(30 100% 50%))", color: "white", boxShadow: "0 0 20px hsla(14,100%,57%,0.3)" }}
            >
              AF
            </div>
            <div>
              <span className="font-black text-base tracking-widest block" style={{ color: "hsl(0 0% 96%)", letterSpacing: "0.12em" }}>
                ATOMIC FLIX
              </span>
              <span className="text-[10px] uppercase tracking-widest block" style={{ color: "hsl(14 100% 57%)", letterSpacing: "0.2em" }}>
                Legal Center
              </span>
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className="text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 whitespace-nowrap"
                  style={{
                    color: isActive ? "hsl(14 100% 57%)" : "hsl(220 10% 55%)",
                    background: isActive ? "hsla(14,100%,57%,0.10)" : "transparent",
                    border: isActive ? "1px solid hsla(14,100%,57%,0.25)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const navLinks = [
    { href: "/", label: "Confidentialité" },
    { href: "/terms", label: "Conditions d'utilisation" },
  ];

  return (
    <footer
      className="border-t"
      style={{ borderColor: "hsl(220 15% 12%)", background: "hsl(220 22% 4%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(14 100% 57%), hsl(30 100% 50%))", color: "white" }}
            >
              AF
            </div>
            <div>
              <span className="font-black text-sm tracking-widest block" style={{ color: "hsl(0 0% 90%)", letterSpacing: "0.12em" }}>ATOMIC FLIX</span>
              <span className="text-[10px]" style={{ color: "hsl(220 10% 40%)" }}>Application de streaming anime</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-xs cursor-pointer transition-colors duration-200" style={{ color: "hsl(220 10% 45%)" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "hsl(14 100% 57%)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "hsl(220 10% 45%)")}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid hsl(220 15% 10%)" }}
        >
          <p className="text-xs" style={{ color: "hsl(220 10% 35%)" }}>
            © 2026 ATOMIC FLIX. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: "hsl(220 10% 30%)" }}>
            Dernière mise à jour : Avril 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SectionCard({
  number,
  title,
  description,
  children,
  accent = "orange",
}: {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  accent?: "orange" | "blue";
}) {
  const accentColor = accent === "orange" ? "hsl(14 100% 57%)" : "hsl(200 100% 55%)";
  const accentBg = accent === "orange" ? "hsla(14,100%,57%,0.08)" : "hsla(200,100%,55%,0.08)";
  const accentBorder = accent === "orange" ? "hsla(14,100%,57%,0.15)" : "hsla(200,100%,55%,0.15)";

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: "hsl(220 20% 9%)", border: "1px solid hsl(220 15% 14%)" }}
    >
      <div
        className="px-7 py-5 flex items-center gap-4"
        style={{ background: accentBg, borderBottom: `1px solid ${accentBorder}` }}
      >
        <span
          className="text-xs font-black tabular-nums shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}`, fontSize: "11px" }}
        >
          {number}
        </span>
        <h2 className="text-lg font-bold" style={{ color: "hsl(0 0% 95%)" }}>{title}</h2>
      </div>
      <div className="px-7 py-6">
        <p className="text-sm leading-relaxed" style={{ color: "hsl(220 10% 58%)" }}>
          {description}
        </p>
        {children && <div className="mt-5">{children}</div>}
      </div>
    </div>
  );
}

export function Sidebar({
  sections,
  activeSection,
  onScrollTo,
}: {
  sections: { id: string; label: string }[];
  activeSection: string;
  onScrollTo: (id: string) => void;
}) {
  return (
    <aside className="hidden lg:block w-60 shrink-0">
      <div className="sticky top-28">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: "hsl(220 10% 35%)" }}
        >
          Sur cette page
        </p>
        <nav className="flex flex-col gap-0.5">
          {sections.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onScrollTo(s.id)}
                className="text-left text-sm px-4 py-2.5 rounded-lg transition-all duration-200 font-medium"
                style={{
                  color: isActive ? "hsl(14 100% 57%)" : "hsl(220 10% 50%)",
                  background: isActive ? "hsla(14,100%,57%,0.08)" : "transparent",
                  borderLeft: isActive ? "2px solid hsl(14 100% 57%)" : "2px solid transparent",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <div
          className="mt-8 p-4 rounded-xl"
          style={{ background: "hsl(220 20% 9%)", border: "1px solid hsl(220 15% 13%)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(220 10% 35%)" }}>Contact</p>
          <a
            href="mailto:cidakue02@gmail.com"
            className="text-xs block transition-colors duration-200"
            style={{ color: "hsl(220 10% 50%)", textDecoration: "none" }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = "hsl(14 100% 57%)")}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = "hsl(220 10% 50%)")}
          >
            cidakue02@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
}
