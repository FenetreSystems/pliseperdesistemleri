const social = [
  { name: "Facebook", href: "https://www.facebook.com/FenetreSystems/", icon: "f" },
  { name: "Instagram", href: "https://www.instagram.com/fenetresystems/", icon: "in" },
  { name: "Twitter / X", href: "https://x.com/FenetreSystems", icon: "x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/fenetresystems/", icon: "li" },
  { name: "Pinterest", href: "https://tr.pinterest.com/fenetresystems/", icon: "p" },
  { name: "YouTube", href: "https://www.youtube.com/@FenetreSystems", icon: "yt" },
];

const internalLinks = [
  { label: "Plise Perde", href: "/", title: "Plise Perde" },
  { label: "Pliseli Perde", href: "/", title: "Pliseli Perde" },
  { label: "Plise Perde Sistemleri", href: "/", title: "Plise Perde Sistemleri" },
  { label: "Gece Gündüz Plise Perde", href: "/", title: "Gece Gündüz Plise Perde" },
  { label: "Blackout Plise Perde", href: "/", title: "Blackout Plise Perde" },
  { label: "Honeycomb Plise Perde", href: "/", title: "Honeycomb Plise Perde" },
  { label: "Plise Sineklik", href: "/", title: "Plise Sineklik" },
  { label: "Zip Perde", href: "/", title: "Zip Perde" },
  { label: "Keten Plise Perde", href: "/", title: "Keten Plise Perde" },
  { label: "Tam Karartma Plise Perde", href: "/", title: "Tam Karartma Plise Perde" },
];

const products = [
  "Plise Perde",
  "Gece Gündüz Plise Perde",
  "Yarı Karartma Plise Perde",
  "Tam Karartma Plise Perde",
  "Blackout Plise Perde",
  "Honeycomb Plise Perde",
  "Plise Sineklik",
  "Sineklik",
  "Jaluzi Perde",
  "Zip Perde",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#2e3a47", color: "rgba(255,255,255,0.75)" }}
      aria-label="Site altbilgisi"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="28" height="28" rx="3" fill="rgba(131,189,129,0.15)" stroke="#83bd81" strokeWidth="1.5" />
                <line x1="4" y1="11" x2="32" y2="11" stroke="#83bd81" strokeWidth="1.2" />
                <line x1="4" y1="17.5" x2="32" y2="17.5" stroke="#83bd81" strokeWidth="1.8" />
                <line x1="4" y1="24" x2="32" y2="24" stroke="#83bd81" strokeWidth="1.2" />
                <rect x="15" y="4" width="6" height="5" rx="1" fill="#83bd81" />
              </svg>
              <div>
                <div className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  FENETRE SYSTEMS
                </div>
                <div className="text-xs" style={{ color: "#83bd81" }}>
                  Plise Perde Sistemleri
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gebze / Kocaeli merkezli üretimimizle{" "}
              <a href="/" title="plise perde" style={{ color: "#83bd81", textDecoration: "underline" }}>
                plise perde
              </a>{" "}
              sistemlerini Türkiye ve Avrupa pazarına sunuyoruz.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 flex-wrap">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{ background: "rgba(131,189,129,0.12)", color: "#83bd81" }}
                  title={s.name}
                >
                  {s.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ürünlerimiz
            </h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="/"
                    title={p}
                    className="text-xs hover:text-green-400 transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal Links Column */}
          <div>
            <h3 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {internalLinks.slice(0, 8).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    title={l.title}
                    className="text-xs hover:text-green-400 transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+905403363873"
                  className="flex items-center gap-2 text-xs hover:text-green-400 transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  <span style={{ color: "#83bd81" }}>📞</span>
                  +90 540 336 38 73
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905403363873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs hover:text-green-400 transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  <span style={{ color: "#83bd81" }}>💬</span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fenetresystems.com"
                  className="flex items-center gap-2 text-xs hover:text-green-400 transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  <span style={{ color: "#83bd81" }}>📧</span>
                  info@fenetresystems.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span style={{ color: "#83bd81" }}>📍</span>
                <span>Cumhuriyet Mah. 2233 Sok.<br />No:4/A Gebze / Kocaeli</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} pliseperdesistemleri.com.tr — Tüm hakları saklıdır.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Üretici:{" "}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow"
              title="Fenetre Systems"
              className="hover:text-green-400 transition-colors"
              style={{ color: "#83bd81", textDecoration: "none", fontWeight: 600 }}
            >
              Fenetre Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
