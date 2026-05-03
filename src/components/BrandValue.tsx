const stats = [
  { value: "15+", label: "Yıl Üretim Deneyimi", sub: "Gebze atölyelerinde kesintisiz faaliyet" },
  { value: "30+", label: "Ülkeye Teslimat", sub: "Avrupa başta olmak üzere dünya genelinde" },
  { value: "%100", label: "Özel Ölçü Üretim", sub: "Standart dışı her boyuta çözüm üretiyoruz" },
  { value: "2 Yıl", label: "Ürün Garantisi", sub: "Mekanizma ve kumaşta yazılı garanti" },
];

const badges = [
  "Avrupa CE Uyumlu Profil",
  "Alüminyum Taşıyıcı Sistem",
  "UV Dayanımlı Kumaş",
  "Alev Geciktirici Kaplama",
  "Çocuk Güvenliği Kordonu",
  "Ses Yutma Özelliği",
];

export default function BrandValue() {
  return (
    <section
      id="marka-degeri"
      className="py-20 lg:py-28"
      style={{ background: "#f4f7f4" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="fold-accent" />
              <span className="section-label">Neden Fenetre Systems?</span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold mb-5 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
            >
              Türkiye&apos;nin{" "}
              <span style={{ color: "#83bd81" }}>üretim kalitesi</span>{" "}
              <br className="hidden lg:block" />
              Avrupa&apos;nın standartları
            </h2>

            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#5a6b7d" }}>
              <p>
                <strong>Fenetre Systems</strong>, Gebze&apos;deki modern üretim tesisinde{" "}
                <em>plise perde</em> ve sineklik sistemlerini Türkiye için değil,
                dünya standartlarında tasarlayarak üretir. Her profil kalıbı,
                kumaş örneği ve mekanizma parçası Avrupa normlarına göre test edilir.
              </p>

              <p>
                Yalnızca satmıyoruz; <u>proje bazında danışmanlık</u> sunuyoruz.
                Cam balkonunuzun geometrisi standart dışıysa, çatı penceresi eğimliyse,
                ofis bölme sisteminiz farklıysa — bunların tamamı için{" "}
                <strong>özel çözüm üretilir</strong>.
              </p>

              <p>
                Avrupa&apos;ya gönderilen her koli, darbe emici köpük ve özel kilitli profil
                kutusuyla paketlenir. Almanya&apos;ya ortalama{" "}
                <strong>5 iş gününde</strong>,
                Hollanda&apos;ya <strong>6 iş gününde</strong> adrese ulaşır.
                Montaj talimatı üç dilde eklenir; kurmak gerçekten kolaydır.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: "#83bd81",
                    color: "#5f9e5d",
                    background: "rgba(131,189,129,0.07)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/905403363873?text=Fenetre%20Systems%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Üretici Firmaya Doğrudan Ulaş
              </a>
            </div>
          </div>

          {/* RIGHT: Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-6 border group hover:border-green-300 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#eae8e2" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#83bd81" }}
                >
                  {s.label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: "#8a9aab" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="fold-accent" />
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
            >
              Fenetre Systems ile Sıradan Tedarikçinin Farkı
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "#eae8e2" }}>
            <table className="plise-table">
              <thead>
                <tr>
                  <th>Kriter</th>
                  <th style={{ background: "#5f9e5d" }}>Fenetre Systems</th>
                  <th>Standart Tedarikçi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Üretim Yeri", "Gebze / Türkiye (kendi atölyemiz)", "Genellikle taşeron veya ithal"],
                  ["Özel Ölçü", "Her boyut, her geometri mümkün", "Kısıtlı standart ölçüler"],
                  ["Avrupa Teslimat", "4–10 iş günü, izlenebilir kargo", "Belirsiz süre, aracılar"],
                  ["Garanti", "2 yıl yazılı mekanizma garantisi", "Sözlü veya belirsiz"],
                  ["Montaj Desteği", "Türkiye'de montaj dahil, çok dilli kılavuz", "Ek ücret veya yok"],
                  ["Numune", "Ücretsiz kumaş numunesi gönderimi", "Çoğunlukla ücretli"],
                ].map(([kriter, fenetre, standart]) => (
                  <tr key={kriter}>
                    <td className="font-semibold" style={{ color: "#404e5e" }}>{kriter}</td>
                    <td style={{ color: "#5f9e5d" }}>
                      <span className="flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#83bd81" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {fenetre}
                      </span>
                    </td>
                    <td style={{ color: "#8a9aab" }}>{standart}</td>
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
