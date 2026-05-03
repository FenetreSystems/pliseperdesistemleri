export default function MaterialQuality() {
  return (
    <section
      id="malzeme"
      className="py-20 lg:py-28"
      style={{ background: "#f4f7f4" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="fold-accent" />
              <span className="section-label">Malzeme ve Kalite</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
            >
              Kumaştan Profile,{" "}
              <em style={{ color: "#83bd81" }}>Her Detay Özenle Seçildi</em>
            </h2>

            <div className="space-y-6" style={{ color: "#5a6b7d" }}>
              <div className="green-border-left">
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}>
                  Polyester ve Doğal Elyaf Kumaşlar
                </h3>
                <p className="text-sm leading-relaxed">
                  Kumaşlarımız yüksek yoğunluklu dokuma tekniğiyle işlenir.
                  <strong> UV dayanımı test edilmiş</strong> lifler güneş ışığında beş yıl sonra bile renk atmaz.
                  Doğal keten kumaşlar ise nefes alabilir yapısıyla <em>alerjik reaksiyon riskini minimize eder</em>.
                </p>
              </div>

              <div className="green-border-left">
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}>
                  Alüminyum Profil Sistemi
                </h3>
                <p className="text-sm leading-relaxed">
                  Taşıyıcı profiller <u>T6-temper alüminyum</u> alaşımından üretilir.
                  Korozyona karşı toz boya kaplama yapılır. Beyaz, antrasit ve ahşap desen seçenekleri sunulur.
                  Her profil hassas CNC kesimle milimetrik toleransta üretilir.
                </p>
              </div>

              <div className="green-border-left">
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}>
                  Mekanizma ve Kilitleme Sistemi
                </h3>
                <p className="text-sm leading-relaxed">
                  Üst ve alt kilit mekanizmaları <strong>50.000 açma-kapama testinden</strong> geçirilmiş bileşenlerden yapılır.
                  Çocuk güvenliği kordonu opsiyonu standarttır.
                  Serbestçe konum ayarlı mekanizma,
                  tam dilediğiniz yükseklikte durmayı sağlar.
                </p>
              </div>

              <div className="green-border-left">
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}>
                  Honeycomb Çift Katman Teknolojisi
                </h3>
                <p className="text-sm leading-relaxed">
                  Bal peteği hücreli plise perdeler, <em>iki kumaş katmanı arasındaki hava ceplerini</em> yalıtım tabakası olarak kullanır.
                  İç mekân sıcaklığı yüzde on beşe kadar korunur.
                  Klima ve ısıtma giderlerinde ölçülebilir tasarruf elde edilir.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Material Comparison Table */}
          <div>
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
            >
              Kumaş Tiplerine Göre Özellik Karşılaştırması
            </h3>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "#eae8e2" }}>
              <table className="plise-table">
                <thead>
                  <tr>
                    <th>Kumaş Tipi</th>
                    <th>Işık Kontrolü</th>
                    <th>Isı Yalıtım</th>
                    <th>Kullanım Yeri</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tül / Şeer", "Filtreli", "Düşük", "Oturma, Mutfak"],
                    ["Yarı Saydam", "Orta", "Orta", "Ofis, Yaşam"],
                    ["Keten / Doğal", "Orta-Yüksek", "Orta", "Yatak, Bebek"],
                    ["Saten / Parıltılı", "Orta-Yüksek", "Orta", "Lüks Konut"],
                    ["Dimout (Yarı Karartma)", "Yüksek", "İyi", "Yatak Odası"],
                    ["Blackout (Tam Karartma)", "Tam Engel", "Çok İyi", "Bebek, Sinema"],
                    ["Honeycomb", "Seçilebilir", "Mükemmel", "Tüm Alanlar"],
                  ].map(([kumaş, ışık, ısı, kullanım]) => (
                    <tr key={kumaş}>
                      <td className="font-semibold" style={{ color: "#404e5e" }}>{kumaş}</td>
                      <td>{ışık}</td>
                      <td>{ısı}</td>
                      <td style={{ color: "#8a9aab" }}>{kullanım}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quality highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "UV Dayanımı", value: "Sınıf 7-8", icon: "☀️" },
                { label: "Yangın Sınıfı", value: "B1 / Zor Tutuşur", icon: "🔥" },
                { label: "Temizlik", value: "Islak Bez ile", icon: "💧" },
                { label: "Garanti", value: "2 Yıl Yazılı", icon: "✅" },
              ].map((q) => (
                <div
                  key={q.label}
                  className="p-4 rounded-xl text-center border"
                  style={{ borderColor: "#eae8e2", background: "#fff" }}
                >
                  <div className="text-2xl mb-1" role="img" aria-label={q.label}>{q.icon}</div>
                  <div className="text-xs font-medium" style={{ color: "#8a9aab" }}>{q.label}</div>
                  <div className="text-sm font-bold mt-0.5" style={{ color: "#404e5e" }}>{q.value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/905403363873?text=Kumaş%20numunesi%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center justify-center"
              >
                Ücretsiz Kumaş Numunesi İste
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
