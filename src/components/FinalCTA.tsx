export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #404e5e 0%, #2e3a47 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pleat lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent 0px, transparent 68px,
            rgba(131,189,129,0.05) 68px, rgba(131,189,129,0.05) 69px
          )`,
        }}
      />

      {/* Large decorative circle */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(131,189,129,0.06)", border: "1px solid rgba(131,189,129,0.1)" }}
      />
      <div
        className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(131,189,129,0.04)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* Top: Main CTA */}
        <div className="text-center mb-16">
          <span className="section-label" style={{ color: "#83bd81" }}>
            Harekete Geçin
          </span>
          <h2
            className="text-3xl lg:text-5xl font-bold mt-3 mb-5 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pencerelerinizi{" "}
            <em style={{ color: "#83bd81" }}>Dönüştürün</em>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Ölçünüzü paylaşın, modeli seçin. Türkiye&apos;de montajlı,{" "}
            <a href="/" title="Plise Perde Sistemleri" style={{ color: "#83bd81", textDecoration: "underline" }}>
              plise perde sisteminiz
            </a>{" "}
            kapınıza gelsin. Avrupa&apos;da 10 günde adresinizde.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20plise%20perde%20sipari%C5%9F%20vermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: "1rem", padding: "16px 32px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Teklif Al
            </a>
            <a
              href="tel:+905403363873"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "16px 32px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              +90 540 336 38 73
            </a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: "📞",
              label: "Telefon",
              value: "+90 540 336 38 73",
              href: "tel:+905403363873",
            },
            {
              icon: "💬",
              label: "WhatsApp",
              value: "+90 540 336 38 73",
              href: "https://wa.me/905403363873",
            },
            {
              icon: "📧",
              label: "E-Posta",
              value: "info@fenetresystems.com",
              href: "mailto:info@fenetresystems.com",
            },
            {
              icon: "📍",
              label: "Adres",
              value: "Gebze / Kocaeli, Türkiye",
              href: "https://maps.google.com/?q=Cumhuriyet+Mah.+2233+Sok.+No:4/A+Gebze+Kocaeli",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}
            >
              <span className="text-3xl mb-3" role="img" aria-label={item.label}>{item.icon}</span>
              <span className="text-xs font-medium mb-1" style={{ color: "#83bd81" }}>{item.label}</span>
              <span className="text-sm font-semibold text-white">{item.value}</span>
            </a>
          ))}
        </div>

        {/* Address detail */}
        <div className="mt-8 text-center">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli — Türkiye
          </p>
        </div>
      </div>
    </section>
  );
}
