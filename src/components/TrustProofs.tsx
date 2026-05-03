const testimonials = [
  {
    name: "Mehmet Y.",
    city: "Berlin, Almanya",
    text: "Almanya'ya sipariş verdim, 6 günde elime geçti. Paketleme çok özenli, hiçbir hasar yoktu. Montaj kılavuzu da çok açıktı, benim gibi acemi biri bile kurdu.",
    rating: 5,
  },
  {
    name: "Elif K.",
    city: "İstanbul",
    text: "Cam balkonum için tam karartma sipariş ettim. Ölçü gönderdim, 5 günde hazırladılar. Montajcı geldi, bir saat içinde her şey bitti. Artık sabah uyandığımda güneş rahatsız etmiyor.",
    rating: 5,
  },
  {
    name: "Hasan A.",
    city: "Amsterdam, Hollanda",
    text: "Üç ayrı oda için sipariş verdim. Hollanda'ya 7 günde geldi. Kumaş kalitesi çok iyi, fiyata göre gerçekten değer. Bir de ücretsiz numune gönderdiler, tam rengi seçebildim.",
    rating: 5,
  },
  {
    name: "Zeynep M.",
    city: "Ankara",
    text: "Ofisimiz için 12 adet sipariş verdik. Tüm pencerelere aynı günde montaj yapıldı. Ekip çok profesyoneldi. Artık ekranlara güneş yansıması yok.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    city: "Viyana, Avusturya",
    text: "Türk üretimi ama gerçekten kaliteli. Ürünler mükemmel işçilik. Alüminyum profiller sağlam, kumaş temizliği pratik. Tekrar sipariş vereceğim.",
    rating: 5,
  },
  {
    name: "Ayşe T.",
    city: "İzmir",
    text: "Bebek odam için keten model aldım. Işığı çok güzel filtreler, ne çok aydınlık ne çok karanlık. Hipoalerjenik özelliği de önemli benim için. Harika ürün.",
    rating: 5,
  },
];

export default function TrustProofs() {
  return (
    <section
      id="guven-kanitlari"
      className="py-20 lg:py-28"
      style={{ background: "#fafaf8" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Müşteri Görüşleri</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            Türkiye&apos;den Avrupa&apos;ya{" "}
            <em style={{ color: "#83bd81" }}>Memnun Müşteriler</em>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
            Gerçek müşterilerimizin deneyimleri.{" "}
            <strong>Türkiye ve Avrupa&apos;dan</strong> gelen yorumlar; kalite, hız ve güveni özetliyor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border hover:shadow-lg transition-all duration-300"
              style={{ borderColor: "#eae8e2" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#83bd81" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#5a6b7d" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#f0ede6" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "rgba(131,189,129,0.15)", color: "#5f9e5d" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#404e5e" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#8a9aab" }}>{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {[
            {
              icon: "🏭",
              title: "Türkiye Üretimi",
              desc: "Kendi atölyemizde, kendi ustalarımızla. Aracı yok, kalite kontrolü tam.",
            },
            {
              icon: "📜",
              title: "CE Uyumlu Ürünler",
              desc: "Avrupa pazarı için zorunlu standartları karşılayan ürünler üretiyoruz.",
            },
            {
              icon: "🔒",
              title: "2 Yıl Garanti",
              desc: "Mekanizma ve alüminyum profil için yazılı garanti belgesi her sipariş ile gelir.",
            },
            {
              icon: "🤝",
              title: "Bayilik İmkânı",
              desc: "Kendi şehrinizde satış yapın. Bayi olmak için WhatsApp'tan başvurun.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border"
              style={{ borderColor: "#eae8e2", background: "#fff" }}
            >
              <div
                className="text-3xl mb-3 w-14 h-14 flex items-center justify-center rounded-2xl"
                style={{ background: "rgba(131,189,129,0.1)" }}
                role="img"
                aria-label={item.title}
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-bold mb-2" style={{ color: "#404e5e" }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#8a9aab" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bayilik CTA */}
        <div className="mt-8">
          <div
            className="p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(131,189,129,0.1)", border: "1px solid rgba(131,189,129,0.3)" }}
          >
            <div>
              <p className="font-bold" style={{ color: "#404e5e", fontFamily: "'Playfair Display', serif" }}>
                Kendi bölgenizde satış yapmak ister misiniz?
              </p>
              <p className="text-sm mt-0.5" style={{ color: "#5a6b7d" }}>
                Bayilik başvurusu için WhatsApp üzerinden iletişime geçin.
              </p>
            </div>
            <a
              href="https://wa.me/905403363873?text=Bayilik%20ba%C5%9Fvurusu%20yapmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-shrink-0"
            >
              Bayilik Başvurusu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
