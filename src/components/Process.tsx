const steps = [
  {
    num: "01",
    title: "Ölçü ve Danışmanlık",
    desc: "WhatsApp veya telefon üzerinden pencere ölçülerinizi paylaşın. Uzman ekibimiz doğru model ve kumaş önerisini sunar.",
    icon: "📐",
  },
  {
    num: "02",
    title: "Kumaş ve Model Seçimi",
    desc: "Ücretsiz kumaş numunesi gönderimi yapılır. Fiziksel dokuyu, rengi ve ışık geçirgenliğini elinizde görürsünüz.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Üretim Başlıyor",
    desc: "Siparişiniz Gebze atölyesinde kesim, mekanizma montajı ve son kalite kontrolüyle üretilir. Standart süre 5–7 iş günüdür.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Paketleme ve Kargo",
    desc: "Her ürün darbe emici köpük ve profil korumalı özel kutuda paketlenir. Avrupa kargosuna hazır hale getirilir.",
    icon: "📦",
  },
  {
    num: "05",
    title: "Teslimat",
    desc: "Türkiye'de adrese demonte teslim, montaj ekibi kapınıza gelir. Avrupa'ya izlenebilir kargo ile 4–10 günde ulaşır.",
    icon: "🚚",
  },
  {
    num: "06",
    title: "Montaj ve Destek",
    desc: "Türkiye'de profesyonel montaj dahildir. Avrupa siparişlerine video montaj rehberi ve yazılı kılavuz eklenir.",
    icon: "🔧",
  },
];

export default function Process() {
  return (
    <section
      id="nasil-calisiyoruz"
      className="py-20 lg:py-28"
      style={{ background: "#fafaf8" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Sipariş Süreci</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
            Ölçü almaktan montaja uzanan her aşama şeffaf ve hızlıdır.{" "}
            <strong>Avrupa&apos;daki müşterilerimiz</strong> de aynı kalite standartlarından yararlanır.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative bg-white rounded-2xl p-7 border group hover:shadow-lg hover:border-green-200 transition-all duration-300"
              style={{ borderColor: "#eae8e2" }}
            >
              {/* Number accent */}
              <div
                className="absolute top-5 right-6 text-5xl font-bold leading-none select-none"
                style={{ color: "rgba(131,189,129,0.08)", fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "rgba(131,189,129,0.1)" }}
              >
                {s.icon}
              </div>

              {/* Step number badge */}
              <span
                className="text-xs font-bold px-2 py-0.5 rounded mb-3 inline-block"
                style={{ background: "rgba(64,78,94,0.08)", color: "#404e5e" }}
              >
                Adım {i + 1}
              </span>

              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7a8d9e" }}>
                {s.desc}
              </p>

              {/* Connector line (not on last item per row) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 z-10"
                  style={{ background: "rgba(131,189,129,0.4)" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div
          className="mt-14 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6"
          style={{
            background: "rgba(131,189,129,0.08)",
            border: "1px solid rgba(131,189,129,0.25)",
          }}
        >
          <div className="flex-1">
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
            >
              Hızlı başlamak ister misiniz?
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#5a6b7d" }}>
              Ölçülerinizi WhatsApp&apos;a gönderin.{" "}
              <strong>Birkaç saat içinde</strong> kumaş önerisi ve fiyat teklifi hazırlanır.
              İlk adım size hiçbir taahhüt yüklemez.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20sipari%C5%9F%20vermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp&apos;tan Başla
            </a>
            <a href="tel:+905403363873" className="btn-outline">
              Hemen Ara
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
