const applications = [
  {
    title: "Cam Balkon",
    desc: "Cam balkon sistemlerinde en yaygın tercih plise perdedir. Farklı panel genişlikleri için ayrı ölçüde üretilir. Rüzgar bariyeri görevi görerek konfor artar.",
    color: "#e8f4e8",
    borderColor: "#83bd81",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#404e5e" strokeWidth="2" fill="rgba(131,189,129,0.1)" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="#404e5e" strokeWidth="2" />
        {[10, 15, 20, 25, 30].map(y => <line key={y} x1="4" y1={y} x2="36" y2={y} stroke="#83bd81" strokeWidth="1" />)}
        <rect x="8" y="2" width="24" height="6" rx="2" fill="#404e5e" />
      </svg>
    ),
  },
  {
    title: "Yatak Odası",
    desc: "Blackout ve tam karartma modeller uyku kalitesini doğrudan etkiler. Sabah ışığını tamamen keser, mahremiyeti korur.",
    color: "#f0ede6",
    borderColor: "#404e5e",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="32" height="22" rx="3" stroke="#404e5e" strokeWidth="2" fill="rgba(64,78,94,0.08)" />
        {[15, 20, 25].map(y => <rect key={y} x="5" y={y} width="30" height="4" rx="1" fill="rgba(64,78,94,0.25)" />)}
        <rect x="10" y="6" width="20" height="5" rx="2" fill="#404e5e" />
      </svg>
    ),
  },
  {
    title: "Ofis ve Çalışma Alanı",
    desc: "Parlama önleyici yarı karartma kumaşlar bilgisayar ekranında yansımayı engeller. Konsantrasyon artar, klima tasarrufu sağlanır.",
    color: "#eef5ee",
    borderColor: "#83bd81",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="32" height="26" rx="3" stroke="#83bd81" strokeWidth="2" fill="rgba(131,189,129,0.1)" />
        {[10, 16, 22].map(y => <line key={y} x1="6" y1={y} x2="34" y2={y} stroke="#83bd81" strokeWidth="1.5" />)}
        <rect x="14" y="30" width="12" height="6" rx="1" fill="#404e5e" />
        <line x1="14" y1="36" x2="26" y2="36" stroke="#404e5e" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Mutfak",
    desc: "Tül ve keten modeller mutfağa ferah ve aydınlık bir his katar. Islanmaya ve yağ buharına dayanıklı özel kumaşlar mevcuttur.",
    color: "#f8f6f1",
    borderColor: "#c4dfc3",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="26" rx="3" stroke="#83bd81" strokeWidth="2" fill="rgba(131,189,129,0.08)" />
        {[9, 14, 19, 24].map((y, i) => <line key={y} x1="8" y1={y} x2="32" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 1.5 : 0.8} strokeDasharray={i % 2 !== 0 ? "4 3" : ""} />)}
        <rect x="6" y="30" width="28" height="6" rx="2" fill="#404e5e" />
      </svg>
    ),
  },
  {
    title: "Bebek ve Çocuk Odası",
    desc: "Hipoalerjenik keten kumaşlar çocuk odaları için en güvenli seçenektir. Tam karartma gündüz uyku saatlerini destekler.",
    color: "#eef5ee",
    borderColor: "#83bd81",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="12" stroke="#83bd81" strokeWidth="2" fill="rgba(131,189,129,0.1)" />
        <circle cx="20" cy="20" r="6" fill="rgba(131,189,129,0.25)" />
        <path d="M20 8 L20 4 M20 36 L20 32 M8 20 L4 20 M36 20 L32 20" stroke="#83bd81" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Ticari Mekânlar",
    desc: "Mağaza, restoran ve otel projelerinde geniş yüzey kapasitesi ve kurumsal renk seçenekleriyle özel koleksiyonlar sunulur.",
    color: "#e8f0f8",
    borderColor: "#5a6b7d",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="12" width="32" height="24" rx="2" stroke="#5a6b7d" strokeWidth="2" fill="rgba(90,107,125,0.1)" />
        <path d="M4 12 L8 4 L32 4 L36 12" stroke="#5a6b7d" strokeWidth="2" fill="none" />
        <rect x="14" y="24" width="12" height="12" rx="1" fill="rgba(131,189,129,0.3)" />
        <line x1="20" y1="24" x2="20" y2="36" stroke="#83bd81" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Applications() {
  return (
    <section
      id="uygulama-alanlari"
      className="py-20 lg:py-28"
      style={{ background: "#f4f7f4" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Uygulama Alanları</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            Her Mekâna Uygun{" "}
            <a href="/" title="Plise Perde" style={{ color: "#83bd81", textDecoration: "none" }}>
              <em>Plise Perde</em>
            </a>{" "}
            Çözümü
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
            Konut projelerinden ticari yapılara, cam balkondan çatı penceresine kadar{" "}
            <strong>her yüzey için özel ölçü üretim</strong> yapılır.
            Model seçimini yalnızca estetik değil, işlevsellik de belirler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-7 border-l-4 hover:shadow-lg transition-all duration-300 group cursor-default"
              style={{
                borderLeftColor: a.borderColor,
                borderTop: "1px solid #eae8e2",
                borderRight: "1px solid #eae8e2",
                borderBottom: "1px solid #eae8e2",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: a.color }}
              >
                {a.icon}
              </div>
              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
              >
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7a8d9e" }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { title: "Çatı Pencereleri", desc: "Velux ve eğimli cam sistemlere uyumlu üretim mümkündür." },
            { title: "Birden Fazla Kanat", desc: "Tek oda içindeki tüm pencereler toplu sipariş indirimine tabidir." },
            { title: "Rötuş ve Değişim", desc: "Yanlış ölçüm kaynaklı sorunlarda ücretsiz yeniden üretim garantisi sunulur." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-3 p-5 rounded-xl"
              style={{ background: "rgba(131,189,129,0.07)", border: "1px solid rgba(131,189,129,0.2)" }}
            >
              <div className="mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#404e5e" }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#7a8d9e" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
