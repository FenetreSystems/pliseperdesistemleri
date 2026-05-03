export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pleat-lines"
      style={{ background: "linear-gradient(135deg, #fafaf8 0%, #f4f7f4 50%, #eef5ee 100%)" }}
      aria-label="Plise Perde Sistemleri Ana Bölüm"
    >
      {/* Decorative pleat lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent 0px, transparent 68px, rgba(131,189,129,0.07) 68px, rgba(131,189,129,0.07) 69px),
            repeating-linear-gradient(0deg, transparent 0px, transparent 120px, rgba(64,78,94,0.03) 120px, rgba(64,78,94,0.03) 121px)
          `,
        }}
      />

      {/* Top green accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#83bd81" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="fold-accent" />
              <span className="section-label">Fenetre Systems | Türkiye Üretimi</span>
            </div>

            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#404e5e" }}
            >
              <a href="/" title="Plise Perde Sistemleri" style={{ color: "inherit", textDecoration: "none" }}>
                <strong>Plise Perde</strong>
              </a>
              <br />
              <em className="italic" style={{ color: "#83bd81" }}>Sistemleri</em>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#5a6b7d", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Gebze atölyelerimizde özel ölçüde üretilen her{" "}
              <a href="/" title="pliseli perde" style={{ color: "#5f9e5d", textDecoration: "underline", fontWeight: 600 }}>
                pliseli perde
              </a>
              ; Türkiye&apos;nin 81 iline montaj dahil kapıda, Avrupa&apos;nın 30&apos;dan fazla ülkesine ise{" "}
              <strong>4–10 iş günü</strong> içinde adrese teslim ulaşır.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y" style={{ borderColor: "rgba(131,189,129,0.25)" }}>
              {[
                { value: "15+", label: "Yıl Üretim" },
                { value: "30+", label: "Ülkeye Teslimat" },
                { value: "10", label: "Perde Modeli" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs font-medium mt-0.5" style={{ color: "#83bd81" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20fiyat%20teklifi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="WhatsApp ile teklif al"
              >
                <WhatsAppIcon />
                Hemen Teklif Al
              </a>
              <a href="tel:+905403363873" className="btn-outline" aria-label="Fenetre Systems'ı ara">
                <PhoneIcon />
                +90 540 336 38 73
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {["Avrupa Standartları", "Montaj Dahil", "Garantili Üretim", "Özel Ölçü"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "#5a6b7d" }}
                >
                  <CheckIcon />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: SVG Illustration */}
          <div className="flex items-center justify-center lg:justify-end" aria-hidden="true">
            <PliseWindowIllustration />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs font-medium" style={{ color: "#83bd81", letterSpacing: "0.1em" }}>
            KEŞFET
          </span>
          <div
            className="w-px h-8 animate-pulse"
            style={{ background: "linear-gradient(to bottom, #83bd81, transparent)" }}
          />
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, transparent 49%, #fafaf8 50%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function PliseWindowIllustration() {
  return (
    <svg
      width="480"
      height="520"
      viewBox="0 0 480 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm lg:max-w-md xl:max-w-lg"
      role="img"
      aria-label="Plise perde sistemi illüstrasyonu"
    >
      {/* Window frame outer */}
      <rect x="40" y="30" width="400" height="460" rx="8" fill="#f0ede6" stroke="#404e5e" strokeWidth="3" />
      {/* Window sill */}
      <rect x="30" y="480" width="420" height="18" rx="4" fill="#404e5e" />
      {/* Window frame inner shadow */}
      <rect x="44" y="34" width="392" height="452" rx="6" fill="#e8f4e8" fillOpacity="0.4" />

      {/* Center divider (window cross) */}
      <line x1="240" y1="34" x2="240" y2="480" stroke="#404e5e" strokeWidth="3" />
      <line x1="44" y1="257" x2="436" y2="257" stroke="#404e5e" strokeWidth="3" />

      {/* Top-left pane: Plise bands */}
      <clipPath id="pane-tl">
        <rect x="48" y="38" width="186" height="213" />
      </clipPath>
      <g clipPath="url(#pane-tl)">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x="48"
            y={38 + i * 15.5}
            width="186"
            height={i % 3 === 0 ? 10 : 7}
            fill={i % 2 === 0 ? "#83bd81" : "#c4dfc3"}
            fillOpacity={i % 3 === 0 ? 0.65 : 0.3}
          />
        ))}
      </g>

      {/* Top-right pane: Translucent open */}
      <clipPath id="pane-tr">
        <rect x="244" y="38" width="186" height="213" />
      </clipPath>
      <g clipPath="url(#pane-tr)">
        <rect x="244" y="38" width="186" height="213" fill="#e8f4e8" fillOpacity="0.5" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect
            key={i}
            x="244"
            y={38 + i * 15.5}
            width="186"
            height="8"
            fill="#83bd81"
            fillOpacity={0.15}
          />
        ))}
        {/* Light ray effect */}
        <rect x="244" y="38" width="60" height="213" fill="white" fillOpacity="0.18" />
      </g>

      {/* Bottom pane: Full blackout bands */}
      <clipPath id="pane-bot">
        <rect x="48" y="261" width="382" height="213" />
      </clipPath>
      <g clipPath="url(#pane-bot)">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x="48"
            y={261 + i * 15.5}
            width="382"
            height={i % 2 === 0 ? 11 : 5}
            fill={i % 2 === 0 ? "#404e5e" : "#5a6b7d"}
            fillOpacity={i % 2 === 0 ? 0.75 : 0.3}
          />
        ))}
      </g>

      {/* Rail top-left */}
      <rect x="44" y="34" width="190" height="9" rx="2" fill="#404e5e" />
      <rect x="128" y="25" width="22" height="14" rx="3" fill="#5a6b7d" />
      <circle cx="139" cy="32" r="3" fill="#83bd81" />

      {/* Rail top-right */}
      <rect x="240" y="34" width="190" height="9" rx="2" fill="#404e5e" />
      <rect x="324" y="25" width="22" height="14" rx="3" fill="#5a6b7d" />
      <circle cx="335" cy="32" r="3" fill="#83bd81" />

      {/* Pull cord bottom-right */}
      <line x1="360" y1="260" x2="360" y2="380" stroke="#83bd81" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="360" cy="383" r="6" fill="#83bd81" />

      {/* Decorative dots pattern - background */}
      {[60, 80, 100, 120, 140].map((x) =>
        [460, 480, 500].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#83bd81" fillOpacity="0.4" />
        ))
      )}

      {/* Brand tag */}
      <rect x="140" y="474" width="200" height="20" rx="4" fill="#404e5e" />
      <text x="240" y="488" textAnchor="middle" fill="#83bd81" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="1.5">
        FENETRE SYSTEMS
      </text>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6.29 6.29l1.91-1.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
