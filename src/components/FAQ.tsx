"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Plise perde nedir, nasıl çalışır?",
    a: "Plise perde; özel katlama tekniğiyle işlenmiş polyester ya da doğal elyaf kumaşın alüminyum profil ve mekanizma sistemleriyle pencere veya cam yüzeyine monte edildiği modern bir perde çözümüdür. Kumaş, akordeon gibi önceden belirlenmiş kat çizgilerinde katlanır. Üstten aşağıya veya aşağıdan yukarıya sürülebilir; bazı modeller her iki yönde de hareket eder. Mekanizma, belirlediğiniz pozisyonda kilitlenerek perdinin yerinde kalmasını sağlar."
  },
  {
    q: "Plise perde hangi mekânlara uygundur?",
    a: "Standart pencere, cam balkon, çatı penceresi, yaşam alanı, yatak odası, bebek odası, ofis bölme camı, mutfak ve banyo gibi hemen her yüzeye uygulanabilir. Özellikle cam balkon ve çatı pencereleri için tercih edilen ilk çözümdür. Eğimli ve standart dışı geometrik yüzeyler için özel ölçü üretim yapılır."
  },
  {
    q: "Blackout ile tam karartma plise perde arasındaki fark nedir?",
    a: "Blackout ve tam karartma perde teknik olarak aynı kategoridedir; ikisi de ışık geçişini tamamen engeller. Fenetre Systems katalogunda blackout terimi, dört katlı özel dokuma ve ayrıca ses yutucu özelliğe sahip premium kumaşları ifade eder. Tam karartma modeller ise standart üç katlı yapıda üretilir. Her iki model de bebek odası, home cinema ve vardiyalı çalışanlar için uygundur."
  },
  {
    q: "Ölçü nasıl alınır? Kendiniz mi alıyorsunuz?",
    a: "Türkiye içindeki siparişlerde ekibimiz ölçü almak için adresinize gelir; bu hizmet ücretsizdir. Avrupa ve diğer yurt dışı siparişlerde ise WhatsApp veya e-posta üzerinden ölçü alma kılavuzu paylaşılır. Genişlik ve yükseklik bilgisini doğru iletmeniz yeterlidir. Net ölçü yetersiz kalırsa ücretsiz video görüşme desteği de sunulmaktadır."
  },
  {
    q: "Avrupa'ya teslimat süresi gerçekten 4–10 gün mi?",
    a: "Evet. Üretim süresi ortalama 5–7 iş günüdür. Buna kargonun yola çıkması eklenir. Almanya ve Avusturya'ya kargo 3–5, Fransa ve İspanya'ya 4–6 gün sürer. Toplam süre 8–12 iş günü arasındadır. Kargo takip numarası sipariş hazır olunca paylaşılır. Tatil dönemlerinde süre birkaç gün uzayabilir."
  },
  {
    q: "Montaj hizmeti var mı? Avrupa'da da montaj yapılıyor mu?",
    a: "Türkiye içi siparişlerde montaj fiyata dahildir. Profesyonel ekip adresinize gelir, kurulum yapar ve çalışmasını kontrol eder. Avrupa siparişlerinde montaj ekibi gönderilmez; ancak her sipariş ile birlikte Türkçe, İngilizce ve Almanca hazırlanmış ayrıntılı montaj kılavuzu, şematik çizimler ve QR kodlu video yönlendirmesi eklenir. Montaj genellikle 20–40 dakika arasında tamamlanır."
  },
  {
    q: "Garanti kapsamı nedir? Sorun yaşarsam ne yapmalıyım?",
    a: "Tüm ürünler 2 yıl yazılı garanti kapsamındadır. Garanti; mekanizma parçaları, alüminyum profil ve bağlantı aksesuarlarını kapsar. Kumaştaki renk değişimi ve normal kullanım aşınması garanti dışındadır. Sorun yaşadığınızda WhatsApp veya e-posta üzerinden fotoğraf paylaşmanız yeterlidir; teknik ekip uzaktan tanı koyar ve gerekirse parça gönderir ya da yeniden üretim yapar."
  },
  {
    q: "Özel ölçüde üretim yapılıyor mu? Standart dışı pencereler için?",
    a: "Kesinlikle evet. Fenetre Systems, yalnızca özel ölçüde üretim yapar; katalog ürünü stok tutulmaz. Eğimli çatı pencereleri, üçgen veya yamuk camlar, çok parçalı cam balkon sistemleri ve geniş mağaza vitrinleri için de özel çözüm üretilir. Standart dışı ölçülerde minimum üretim miktarı uygulanmaz."
  },
  {
    q: "Kumaş numunesi alabilir miyim?",
    a: "Evet. Türkiye içi siparişlerde ölçü ziyaretinde fiziksel numune defterleri getirilir. Yurt dışı siparişlerde ise ücretsiz kumaş numunesi paketi posta ile gönderilir. Bunun için WhatsApp veya e-posta üzerinden adres bilginizi paylaşmanız yeterlidir. Numune tesliminden itibaren 10 iş günü içinde siparişinizi onaylamanız önerilir."
  },
  {
    q: "Hangi profil rengi seçenekleri var?",
    a: "Alüminyum profiller standart olarak beyaz ve antrasit gri renklerde üretilir. Ahşap desenli (meşe ve ceviz) seçenekler de mevcuttur. Özel renk uygulamaları için toz boya prosesi yapılabilir; bu seçenek ek üretim süresi gerektirir ve toplu siparişlere önerilir."
  },
  {
    q: "Gece gündüz plise perde nasıl çalışır?",
    a: "Gece gündüz modeli; tek bir mekanizmada iki farklı kumaş katmanına sahiptir. Birinci katman saydam ya da yarı saydam kumaştan yapılmıştır; gündüz ışığı filtreler ve mahremiyet sağlar. İkinci katman opak kumaştan oluşur; gece tam gizlilik sunar. Her iki katman da bağımsız olarak yukarı-aşağı hareket ettirilebilir, böylece dilediğiniz ışık ve gizlilik dengesi kurulabilir."
  },
  {
    q: "Honeycomb plise perde neden farklıdır?",
    a: "Honeycomb (bal peteği) model; iki kumaş katmanı arasında hava cepleri oluşturan özel hücresel yapısıyla diğer modellerden ayrılır. Bu hava cepleri doğal bir yalıtım tabakası oluşturur; iç mekânın ısısını korur, klima ve ısıtma giderlerini azaltır. Yapısal sağlamlığı da yüksek olduğundan şekil bozulması yaşanmaz. Türkiye'de ve Avrupa'da enerji tasarrufu odaklı projelerde en çok tercih edilen modeldir."
  },
  {
    q: "Ödeme ve sipariş süreci nasıl işliyor?",
    a: "WhatsApp veya telefon üzerinden ölçü ve model bilgilerini paylaşırsınız. Ekibimiz fiyat teklifi hazırlar. Ön ödeme yapıldığında üretim başlar. Türkiye içi siparişlerde kapıda ödeme seçeneği de mevcuttur. Yurt dışı siparişlerde ödeme, ürün hazır olmadan önce tamamlanmalıdır. Havale, EFT ve kartlı ödeme kabul edilmektedir."
  },
  {
    q: "Keten plise perdenin bakımı nasıl yapılır?",
    a: "Keten ve doğal elyaflı kumaşlar hafif nemli bez ile silinebilir. Yoğun kir için pH nötr sabun solüsyonu kullanılabilir; ovmak yerine hafifçe bastırarak temizlenir. Kumaş yüzeyleri makine yıkama için uygun değildir. Nemli temizlik sonrasında profilin nem bariyeri kumaşın uzun ömürlü kalmasını sağlar. Yılda iki kez kuru toz alımı kumaşın tazeliğini korur."
  },
  {
    q: "Avrupa'ya gönderimde gümrük sorunu çıkar mı?",
    a: "Avrupa Birliği ülkelerine gönderimde ticari fatura ve ihracat belgesi tarafımızca düzenlenir. Ürünler CE uyumlu alüminyum profil ve tekstil kumaşından oluştuğundan ithalat süreçleri sorunsuz ilerler. Bazı ülkelerde KDV ve ithalat vergisi alıcıya ait olabilir; bu durum ülkeye göre değişir ve sipariş aşamasında bilgilendirme yapılır."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" className="py-20 lg:py-28" style={{ background: "#fafaf8" }}>
      <div className="max-w-4xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="fold-accent" />
            <span className="section-label">Sıkça Sorulan Sorular</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#404e5e" }}
          >
            <a href="/" title="Plise Perde" style={{ color: "inherit", textDecoration: "none" }}>
              <em style={{ color: "#83bd81" }}>Plise Perde</em>
            </a>{" "}
            Hakkında Her Şey
          </h2>
          <p className="text-base" style={{ color: "#5a6b7d" }}>
            Türkiye ve Avrupa&apos;daki müşterilerimizin en çok sorduğu sorular ve net yanıtları.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-2xl border overflow-hidden transition-all duration-200"
              style={{ borderColor: open === index ? "#83bd81" : "#eae8e2" }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
              >
                <span
                  className="text-sm lg:text-base font-semibold leading-snug"
                  style={{ color: "#404e5e", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: open === index ? "#83bd81" : "rgba(131,189,129,0.1)",
                    transform: open === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open === index ? "#fff" : "#83bd81"} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === index ? "500px" : "0px" }}
              >
                <div className="px-6 pb-6">
                  <div
                    className="h-px mb-4"
                    style={{ background: "rgba(131,189,129,0.2)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "#5a6b7d" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 p-6 rounded-2xl text-center"
          style={{ background: "rgba(131,189,129,0.07)", border: "1px solid rgba(131,189,129,0.2)" }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: "#404e5e" }}>
            Sorunuz listede yoksa doğrudan yanıt verelim.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://wa.me/905403363873?text=Plise%20perde%20hakk%C4%B1nda%20sorum%20var."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "10px 20px" }}
            >
              WhatsApp&apos;tan Sor
            </a>
            <a href="tel:+905403363873" className="btn-outline" style={{ padding: "10px 20px" }}>
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
