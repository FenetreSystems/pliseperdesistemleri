"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#urunler", label: "Ürünler" },
    { href: "#nasil-calisiyoruz", label: "Süreç" },
    { href: "#hizmet-bolgeleri", label: "Hizmet" },
    { href: "#malzeme", label: "Kalite" },
    { href: "#sss", label: "S.S.S." },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Plise Perde Sistemleri Ana Sayfa">
            <div className="flex items-center gap-2">
              <PliseSVGLogo />
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-sm tracking-wide"
                  style={{ color: "#404e5e", fontFamily: "'DM Sans', sans-serif" }}
                >
                  FENETRE SYSTEMS
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "#83bd81" }}
                >
                  Plise Perde Sistemleri
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Ana Navigasyon">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-green-500"
                style={{
                  color: scrolled ? "#404e5e" : "#404e5e",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905403363873"
              className="flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#404e5e", fontFamily: "'DM Sans', sans-serif" }}
            >
              <PhoneIcon />
              <span>+90 540 336 38 73</span>
            </a>
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              style={{ padding: "10px 20px" }}
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={open ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "#404e5e" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${open ? "opacity-0" : ""}`}
              style={{ background: "#404e5e" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "#404e5e" }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm font-medium border-b border-gray-50 hover:text-green-500 transition-colors"
                style={{ color: "#404e5e", fontFamily: "'DM Sans', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href="tel:+905403363873"
                className="btn-outline text-sm"
                style={{ padding: "10px 18px" }}
              >
                Ara
              </a>
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                style={{ padding: "10px 18px" }}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function PliseSVGLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="28" height="28" rx="3" fill="#83bd81" fillOpacity="0.12" />
      <rect x="4" y="4" width="28" height="28" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="4" y1="11" x2="32" y2="11" stroke="#83bd81" strokeWidth="1.2" />
      <line x1="4" y1="17.5" x2="32" y2="17.5" stroke="#83bd81" strokeWidth="1.8" />
      <line x1="4" y1="24" x2="32" y2="24" stroke="#83bd81" strokeWidth="1.2" />
      <rect x="15" y="4" width="6" height="5" rx="1" fill="#404e5e" />
      <circle cx="18" cy="6.5" r="1" fill="#fff" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6.29 6.29l1.91-1.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
