const mainProducts = [
  {
    name: "Plise Perde",
    slug: "plise-perde",
    desc: "Katlanabilir polyester kumaş yapısı, her pencere ölçüsüne mükemmel uyum sağlar. Kolayca yukarı-aşağı hareket ettirilir; ışık geçirgenliği isteğe göre ayarlanır.",
    icon: <PliseIcon />,
    badge: "En Çok Tercih",
  },
  {
    name: "Gece Gündüz Plise Perde",
    slug: "gece-gunduz-plise-perde",
    desc: "Tek mekanizmada iki farklı kumaş katmanı bulunur. Gündüz ışığı filtreler; gece tam gizlilik sağlar. Konut ve otel projelerinde öne çıkar.",
    icon: <GnGIcon />,
    badge: "Çift Katman",
  },
  {
    name: "Yarı Karartma Plise Perde",
    slug: "yari-karartma-plise-perde",
    desc: "Işığın yaklaşık yüzde yetmişini keserek göz kamaşmasını önler. Ofisler ve oturma odaları için biçilmiş kaftan.",
    icon: <HalfBlockIcon />,
    badge: "Dimout",
  },
  {
    name: "Tam Karartma Plise Perde",
    slug: "tam-karartma-plise-perde",
    desc: "Sıfır ışık geçişi, tam uyku konforu. Bebek odaları, home cinema alanları ve vardiyalı çalışanların yatak odaları için tasarlandı.",
    icon: <FullBlockIcon />,
    badge: "Blackout",
  },
  {
    name: "Blackout Plise Perde",
    slug: "blackout-plise-perde",
    desc: "Dört katlı özel dokunumlu kumaş, hem ışığı hem sesi sınırlandırır. Avrupa sertifikalı bağlayıcı profillere sahiptir.",
    icon: <BlackoutIcon />,
    badge: "Premium",
  },
  {
    name: "Saten Plise Perde",
    slug: "saten-plise-perde",
    desc: "Parlak yüzey dokusu, ortama ayrıcalıklı bir parlaklık katar. Lüks konut ve butik otellerde sıklıkla kullanılır.",
    icon: <SatenIcon />,
    badge: "Lüks Görünüm",
  },
  {
    name: "Tül Plise Perde",
    slug: "tul-plise-perde",
    desc: "Hafif ve şeffaf kumaş yapısı dışarıdan içeriyi gizlerken doğal ışığın içeri girmesine izin verir. Mutfak ve balkon için idealdir.",
    icon: <TulIcon />,
    badge: "Şeffaf",
  },
  {
    name: "Keten Plise Perde",
    slug: "keten-plise-perde",
    desc: "Doğal lif dokusu, minimal ve organik bir atmosfer yaratır. Hipoalerjenik yapısıyla çocuk ve bebek odaları için sağlıklı bir seçenektir.",
    icon: <KetenIcon />,
    badge: "Doğal Lif",
  },
  {
    name: "Baskılı Plise Perde",
    slug: "baskili-plise-perde",
    desc: "Dijital baskı teknolojisiyle üretilen özgün desen seçenekleri mevcuttur. Firmanıza özel logo veya motif uygulanabilir.",
    icon: <BaskiliIcon />,
    badge: "Özel Tasarım",
  },
  {
    name: "Desenli Plise Perde",
    slug: "desenli-plise-perde",
    desc: "Geometrik, botanik ve soyut desen alternatifleri ışığı filtrelerken mekana karakter katar. Koleksiyon her sezon güncellenir.",
    icon: <DesenliIcon />,
    badge: "Koleksiyon",
  },
];

const otherProducts = [
  { name: "Sineklik", icon: <SineklikIcon /> },
  { name: "Plise Sineklik", icon: <PliseSineklikIcon /> },
  { name: "Jaluzi Perde", icon: <JaluziIcon /> },
  { name: "Düet Perde", icon: <DuetIcon /> },
  { name: "Honeycomb Plise Perde", icon: <HoneycombIcon /> },
  { name: "Zip Perde", icon: <ZipIcon /> },
];

export default function Products() {
  return (
    <section id="urunler" className="py-20 lg:py-28" style={{ background: "#fafaf8" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Ürün Kataloğu</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            <a href="/" title="Plise Perde Sistemleri" style={{ color: "inherit", textDecoration: "none" }}>
              <strong>Plise Perde</strong>
            </a>{" "}
            Koleksiyonu
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
            Her mekânın ölçüsüne ve ışık ihtiyacına göre seçilebilecek{" "}
            <strong>10 farklı ana model</strong> sunuyoruz. Kumaş seçiminden mekanizma tipine kadar{" "}
            <em>tamamı Türkiye&apos;de</em> üretilir ve paketlenir.
          </p>
        </div>

        {/* Main Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {mainProducts.map((p) => (
            <article
              key={p.slug}
              className="product-card card-pleat group bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ borderColor: "#eae8e2" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="product-icon-wrap">{p.icon}</div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(131,189,129,0.12)", color: "#5f9e5d" }}
                >
                  {p.badge}
                </span>
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
              >
                <a
                  href="/"
                  title={p.name}
                  style={{ color: "inherit", textDecoration: "none" }}
                  className="hover:text-green-600 transition-colors"
                >
                  {p.name}
                </a>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7a8d9e" }}>
                {p.desc}
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: "#f0ede6" }}>
                <a
                  href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  style={{ color: "#83bd81" }}
                >
                  Fiyat Sor
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: "#eae8e2" }} />
          <span className="section-label">Diğer Ürünler</span>
          <div className="flex-1 h-px" style={{ background: "#eae8e2" }} />
        </div>

        {/* Other Products Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherProducts.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 bg-white border rounded-xl p-5 text-center transition-all hover:shadow-md hover:border-green-300 cursor-default group"
              style={{ borderColor: "#eae8e2" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-green-50"
                style={{ background: "rgba(131,189,129,0.08)" }}
              >
                {p.icon}
              </div>
              <span
                className="text-xs font-semibold text-center leading-tight"
                style={{ color: "#404e5e" }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-8 lg:p-10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #404e5e 0%, #5a6b7d 100%)" }}>
          <div>
            <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ürünü gördünüz, ölçünüzü biliyorsunuz?
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              WhatsApp&apos;tan ölçü ve model gönderin; 2 saat içinde net fiyat alalım.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20teklif%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Fiyat Teklifi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */
function PliseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      {[6, 10, 14, 18, 22].map((y) => (
        <line key={y} x1="2" y1={y} x2="26" y2={y} stroke="#83bd81" strokeWidth={y === 14 ? 2 : 1} />
      ))}
    </svg>
  );
}
function GnGIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="11" height="24" rx="2" fill="rgba(131,189,129,0.15)" stroke="#83bd81" strokeWidth="1.5" />
      <rect x="15" y="2" width="11" height="24" rx="2" fill="rgba(64,78,94,0.15)" stroke="#404e5e" strokeWidth="1.5" />
      {[6,10,14,18,22].map(y => <line key={y} x1="2" y1={y} x2="13" y2={y} stroke="#83bd81" strokeWidth="1" />)}
      {[6,10,14,18,22].map(y => <line key={y} x1="15" y1={y} x2="26" y2={y} stroke="#404e5e" strokeWidth="1" />)}
    </svg>
  );
}
function HalfBlockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <rect x="2" y="14" width="24" height="12" rx="0" fill="rgba(64,78,94,0.2)" />
      {[6, 10, 14, 18, 22].map(y => <line key={y} x1="2" y1={y} x2="26" y2={y} stroke="#83bd81" strokeWidth="1" />)}
    </svg>
  );
}
function FullBlockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" fill="rgba(64,78,94,0.2)" stroke="#404e5e" strokeWidth="1.5" />
      {[6, 10, 14, 18, 22].map(y => <line key={y} x1="4" y1={y} x2="24" y2={y} stroke="#404e5e" strokeWidth="1.5" />)}
    </svg>
  );
}
function BlackoutIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" fill="rgba(64,78,94,0.3)" stroke="#404e5e" strokeWidth="2" />
      <circle cx="14" cy="14" r="4" fill="none" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="14" y1="5" x2="14" y2="9" stroke="#83bd81" strokeWidth="1.5" />
      <line x1="14" y1="19" x2="14" y2="23" stroke="#83bd81" strokeWidth="1.5" />
    </svg>
  );
}
function SatenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <path d="M4 8 Q14 4 24 8 Q14 12 4 8Z" fill="rgba(131,189,129,0.3)" />
      <path d="M4 14 Q14 10 24 14 Q14 18 4 14Z" fill="rgba(131,189,129,0.2)" />
      <path d="M4 20 Q14 16 24 20 Q14 24 4 20Z" fill="rgba(131,189,129,0.15)" />
    </svg>
  );
}
function TulIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" fill="rgba(131,189,129,0.08)" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="3 2" />
      {[6, 10, 14, 18, 22].map(y => <line key={y} x1="4" y1={y} x2="24" y2={y} stroke="#83bd81" strokeWidth="0.8" strokeDasharray="4 3" />)}
    </svg>
  );
}
function KetenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      {[5, 8, 11, 14, 17, 20, 23].map(y => <line key={y} x1="4" y1={y} x2="24" y2={y} stroke="#83bd81" strokeWidth="0.7" />)}
      {[5, 9, 13, 17, 21].map(x => <line key={x} x1={x} y1="4" x2={x} y2="24" stroke="#83bd81" strokeWidth="0.7" />)}
    </svg>
  );
}
function BaskiliIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="3" fill="rgba(131,189,129,0.3)" />
      <circle cx="19" cy="9" r="3" fill="rgba(64,78,94,0.2)" />
      <circle cx="9" cy="19" r="3" fill="rgba(64,78,94,0.2)" />
      <circle cx="19" cy="19" r="3" fill="rgba(131,189,129,0.3)" />
    </svg>
  );
}
function DesenliIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" rx="3" stroke="#83bd81" strokeWidth="1.5" />
      <path d="M2 14 L8 8 L14 14 L20 8 L26 14" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <path d="M2 20 L8 14 L14 20 L20 14 L26 20" stroke="#83bd81" strokeWidth="1" fill="none" strokeOpacity="0.5" />
    </svg>
  );
}
function SineklikIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#404e5e" strokeWidth="1.5" />
      <path d="M2 2 L22 22M2 22 L22 2" stroke="#83bd81" strokeWidth="0.8" />
      {[6,10,14,18].map(x => <line key={x} x1={x} y1="2" x2={x} y2="22" stroke="#83bd81" strokeWidth="0.5" />)}
      {[6,10,14,18].map(y => <line key={y} x1="2" y1={y} x2="22" y2={y} stroke="#83bd81" strokeWidth="0.5" />)}
    </svg>
  );
}
function PliseSineklikIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#404e5e" strokeWidth="1.5" />
      {[6,10,14,18].map(x => <line key={x} x1={x} y1="2" x2={x} y2="22" stroke="#83bd81" strokeWidth="1.2" />)}
      {[6,10,14,18].map(y => <line key={y} x1="2" y1={y} x2="22" y2={y} stroke="#83bd81" strokeWidth="0.5" strokeDasharray="2 2" />)}
    </svg>
  );
}
function JaluziIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="3" rx="1" fill="#404e5e" />
      {[8,13,18].map(y => <rect key={y} x="3" y={y} width="18" height="2.5" rx="1" fill="#83bd81" fillOpacity="0.6" />)}
    </svg>
  );
}
function DuetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#404e5e" strokeWidth="1.5" />
      {[6,10,14,18].map((y, i) => (
        <rect key={y} x="3" y={y} width="18" height="3" rx="1"
          fill={i % 2 === 0 ? "rgba(131,189,129,0.5)" : "rgba(64,78,94,0.25)"} />
      ))}
    </svg>
  );
}
function HoneycombIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" stroke="#83bd81" strokeWidth="1.5" fill="none" />
      <polygon points="12,6 17,9 17,15 12,18 7,15 7,9" fill="rgba(131,189,129,0.25)" stroke="#83bd81" strokeWidth="1" />
    </svg>
  );
}
function ZipIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="18" height="20" rx="2" stroke="#404e5e" strokeWidth="1.5" />
      <line x1="3" y1="2" x2="3" y2="22" stroke="#83bd81" strokeWidth="2" />
      <line x1="21" y1="2" x2="21" y2="22" stroke="#83bd81" strokeWidth="2" />
      {[7,12,17].map(y => <line key={y} x1="6" y1={y} x2="18" y2={y} stroke="#83bd81" strokeWidth="1" />)}
    </svg>
  );
}
