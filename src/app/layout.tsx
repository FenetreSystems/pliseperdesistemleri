import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pliseperdesistemleri.com.tr"),
  title: {
    default:
      "Plise Perde Sistemleri | Türkiye Üretimi, Avrupa Teslimat",
    template: "%s | Plise Perde Sistemleri",
  },
  description:
    "Plise Perde Sistemleri - Türkiye üretimi, garantili plise perde. Blackout, honeycomb, gece gündüz modelleri. Türkiye geneli montaj, Avrupa'ya 4–10 iş günü teslimat.",
  keywords: [
    "plise perde",
    "plise perde sistemleri",
    "pliseli perde",
    "blackout plise perde",
    "honeycomb plise perde",
    "gece gündüz plise perde",
    "tam karartma plise perde",
    "yarı karartma plise perde",
    "Türkiye plise perde üreticisi",
    "Avrupa plise perde teslimat",
    "plise sineklik",
    "zip perde",
    "özel ölçü perde",
    "cam balkon perdesi",
  ],
  alternates: { canonical: "https://pliseperdesistemleri.com.tr" },
  openGraph: {
    type: "website",
    url: "https://pliseperdesistemleri.com.tr",
    title: "Plise Perde Sistemleri | Türkiye Üretimi, Avrupa Teslimat",
    description:
      "Türkiye üretimi, garantili plise perde. Almanya, Hollanda, Belçika, Fransa ve tüm Avrupa'ya adrese teslim.",
    locale: "tr_TR",
    siteName: "Plise Perde Sistemleri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plise Perde Sistemleri | Türkiye Üretimi, Avrupa Teslimat",
    description:
      "Türkiye üretimi plise perde sistemleri. Avrupa'ya 4–10 iş günü teslimat.",
    site: "@FenetreSystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pliseperdesistemleri.com.tr/#business",
      name: "Plise Perde Sistemleri | Türkiye Üretimi, Avrupa Teslimat",
      url: "https://pliseperdesistemleri.com.tr",
      logo: "https://pliseperdesistemleri.com.tr/og-image.jpg",
      description:
        "Türkiye üretimi plise perde sistemleri. Tüm Avrupa ülkelerine adrese teslim.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
        addressLocality: "Gebze",
        addressRegion: "Kocaeli",
        postalCode: "41400",
        addressCountry: "TR",
      },
      telephone: "+905403363873",
      email: "info@fenetresystems.com",
      sameAs: [
        "https://www.facebook.com/FenetreSystems/",
        "https://www.instagram.com/fenetresystems/",
        "https://x.com/FenetreSystems",
        "https://www.linkedin.com/company/fenetresystems/",
        "https://tr.pinterest.com/fenetresystems/",
        "https://www.youtube.com/@FenetreSystems",
      ],
      areaServed: [
        { "@type": "Country", name: "Turkey" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "Netherlands" },
        { "@type": "Country", name: "Belgium" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Austria" },
        { "@type": "Country", name: "Switzerland" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://pliseperdesistemleri.com.tr/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Plise perde nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plise perde; özel katlama tekniğiyle işlenmiş polyester ya da doğal elyaf kumaşın alüminyum profil ve mekanizma sistemleriyle pencere veya cam yüzeyine monte edildiği modern perde çözümüdür.",
          },
        },
        {
          "@type": "Question",
          name: "Plise perde nerede kullanılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cam balkon, standart pencere, çatı penceresi, ofis bölme camı, mutfak ve banyo gibi tüm camlandırılmış yüzeylerde kullanılabilir.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#83bd81" />
        <link rel="canonical" href="https://pliseperdesistemleri.com.tr" />
      </head>
      <body>{children}</body>
    </html>
  );
}
