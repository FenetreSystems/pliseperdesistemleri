const europeCountries = [
  { name: "Almanya", flag: "🇩🇪", days: "5–7", detail: "Berlin, Münih, Hamburg, Frankfurt" },
  { name: "Hollanda", flag: "🇳🇱", days: "5–7", detail: "Amsterdam, Rotterdam, La Haye" },
  { name: "Belçika", flag: "🇧🇪", days: "4–6", detail: "Brüksel, Antwerp, Gent" },
  { name: "Fransa", flag: "🇫🇷", days: "6–8", detail: "Paris, Lyon, Marsilya, Toulouse" },
  { name: "Avusturya", flag: "🇦🇹", days: "5–7", detail: "Viyana, Graz, Linz, Salzburg" },
  { name: "İsviçre", flag: "🇨🇭", days: "6–8", detail: "Zürih, Cenevre, Basel" },
  { name: "İtalya", flag: "🇮🇹", days: "6–8", detail: "Milano, Roma, Napoli, Torino" },
  { name: "İspanya", flag: "🇪🇸", days: "7–9", detail: "Madrid, Barselona, Valensiya" },
  { name: "Polonya", flag: "🇵🇱", days: "5–7", detail: "Varşova, Krakow, Wroclaw" },
  { name: "Danimarka", flag: "🇩🇰", days: "6–8", detail: "Kopenhag, Aarhus, Odense" },
  { name: "İsveç", flag: "🇸🇪", days: "7–9", detail: "Stockholm, Göteborg, Malmö" },
  { name: "Diğer Avrupa", flag: "🌍", days: "7–10", detail: "Tüm AB ve Schengen ülkeleri" },
];

const turkeyRegions = [
  { name: "İstanbul ve Marmara", detail: "Aynı gün ya da ertesi gün montaj imkânı" },
  { name: "Ankara ve İç Anadolu", detail: "1–2 gün içinde teslimat ve montaj" },
  { name: "İzmir ve Ege Bölgesi", detail: "2–3 gün içinde kurulum dahil teslimat" },
  { name: "Antalya ve Akdeniz", detail: "2–3 gün içinde kapıya montajlı teslim" },
  { name: "Bursa / Kocaeli / Gebze", detail: "Atölyemize yakın; çok hızlı teslimat" },
  { name: "Karadeniz, Doğu, Güneydoğu", detail: "3–5 gün içinde Türkiye'nin her noktasına" },
];

export default function ServiceRegions() {
  return (
    <section
      id="hizmet-bolgeleri"
      className="py-20 lg:py-28"
      style={{ background: "#fafaf8" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Hizmet Bölgeleri</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            Türkiye&apos;den{" "}
            <span style={{ color: "#83bd81" }}>Avrupa&apos;ya</span>{" "}
            Adrese Teslim
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
            <strong>Türkiye</strong>&apos;nin her iline montaj dahil kapıda teslimat yapılır.{" "}
            <a href="/" title="Plise Perde Sistemleri" style={{ color: "#5f9e5d", fontWeight: 600, textDecoration: "underline" }}>
              Plise perde sistemleri
            </a>{" "}
            Avrupa genelinde ise{" "}
            <strong>30+ ülkeye</strong> izlenebilir kargo ile 4–10 iş gününde ulaşır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Turkey */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" role="img" aria-label="Türkiye bayrağı">🇹🇷</span>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
              >
                Türkiye Geneli — Montajlı Teslimat
              </h3>
            </div>

            <div className="space-y-3">
              {turkeyRegions.map((r) => (
                <div
                  key={r.name}
                  className="flex items-start gap-3 p-4 rounded-xl border hover:border-green-300 hover:shadow-sm transition-all"
                  style={{ borderColor: "#eae8e2", background: "#fff" }}
                >
                  <div
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(131,189,129,0.15)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#404e5e" }}>{r.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#8a9aab" }}>{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 p-4 rounded-xl text-sm"
              style={{ background: "rgba(131,189,129,0.07)", border: "1px solid rgba(131,189,129,0.2)" }}
            >
              <strong style={{ color: "#404e5e" }}>Montaj dahil mi?</strong>
              <span style={{ color: "#5a6b7d" }}>
                {" "}Evet. Türkiye içi tüm siparişlerde montaj ücrete dahildir. Teknik ekip pencereye gelir, kurar, test eder.
              </span>
            </div>
          </div>

          {/* Europe */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" role="img" aria-label="Avrupa bayrağı">🇪🇺</span>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
              >
                Avrupa — 4–10 Gün Adrese Teslim
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {europeCountries.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-xl border hover:border-green-300 hover:shadow-sm transition-all cursor-default"
                  style={{ borderColor: "#eae8e2", background: "#fff" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg" role="img" aria-label={c.name}>{c.flag}</span>
                    <span className="text-sm font-semibold" style={{ color: "#404e5e" }}>{c.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#8a9aab" }}>{c.detail}</span>
                    <span
                      className="text-xs font-bold ml-1 flex-shrink-0"
                      style={{ color: "#83bd81" }}
                    >
                      {c.days}g
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 p-4 rounded-xl"
              style={{ background: "rgba(64,78,94,0.04)", border: "1px solid #eae8e2" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "#5a6b7d" }}>
                <strong style={{ color: "#404e5e" }}>Gümrük ve vergi:</strong>{" "}
                AB ülkelerine gönderimde tüm gümrük prosedürü tarafımızdan yönetilir.
                Ürünlerimiz <u>CE uyumlu</u> olduğundan ithalat süreci sorunsuz ilerler.
                Fatura ve ihracat belgesi sipariş ile birlikte düzenlenir.
              </p>
            </div>
          </div>
        </div>

        {/* Shipping Table */}
        <div className="mt-14">
          <h3
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            Teslimat Süresi Özet Tablosu
          </h3>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "#eae8e2" }}>
            <table className="plise-table">
              <thead>
                <tr>
                  <th>Bölge</th>
                  <th>Üretim Süresi</th>
                  <th>Kargo Süresi</th>
                  <th>Toplam</th>
                  <th>Notlar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Türkiye (İstanbul / Marmara)", "5–7 iş günü", "1 gün", "6–8 gün", "Montaj dahil"],
                  ["Türkiye (Diğer İller)", "5–7 iş günü", "1–3 gün", "6–10 gün", "Montaj dahil"],
                  ["Almanya / Avusturya", "5–7 iş günü", "3–5 gün", "8–12 gün", "Video montaj kılavuzu"],
                  ["Hollanda / Belçika / Fransa", "5–7 iş günü", "3–5 gün", "8–12 gün", "Çok dilli talimat"],
                  ["İspanya / İtalya / Diğer AB", "5–7 iş günü", "4–6 gün", "9–13 gün", "İzlenebilir kargo"],
                ].map(([bolge, uretim, kargo, toplam, notlar]) => (
                  <tr key={bolge}>
                    <td className="font-medium" style={{ color: "#404e5e" }}>{bolge}</td>
                    <td>{uretim}</td>
                    <td>{kargo}</td>
                    <td className="font-semibold" style={{ color: "#5f9e5d" }}>{toplam}</td>
                    <td style={{ color: "#8a9aab" }}>{notlar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
