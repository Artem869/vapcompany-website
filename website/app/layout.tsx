import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vapcompany.kz'),
  title: "VAP Company - Профессиональные IT решения для бизнеса в Казахстане",
  description: "Разработка сайтов, участие в тендерах, импорт товаров. Полный цикл цифровых решений для вашего бизнеса. Работаем с 2023 года.",
  keywords: "разработка сайтов Казахстан, веб-разработка, тендеры, импорт товаров, обучение, VAP Company",
  authors: [{ name: "VAP Company" }],

  // Canonical URL - предотвращает дублирование контента
  alternates: {
    canonical: 'https://vapcompany.kz',
  },

  // Favicon и иконки
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  // Манифест для PWA
  manifest: '/site.webmanifest',

  // Robots для поисковых систем
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Верификация для поисковиков
  verification: {
    google: "eIsd7_wOz48f0MazxyTgFvIfWOb0kZOHTD2B0nRPzt4",
    yandex: "ваш-код-от-яндекс-вебмастера",
  },

  // Open Graph для соцсетей (Facebook, Telegram, WhatsApp и др.)
  openGraph: {
    title: "VAP Company - ВАШ БИЗНЕС ПАРТНЕР",
    description: "Комплексные IT решения для бизнеса: веб-разработка, участие в тендерах, импорт товаров, обучение IT. Профессиональный подход и гарантия результата.",
    url: "https://vapcompany.kz",
    siteName: "VAP Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAP Company - Профессиональные IT решения",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  // Twitter Card (для Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "VAP Company - ВАШ БИЗНЕС ПАРТНЕР",
    description: "Комплексные IT решения для бизнеса: веб-разработка, тендеры, импорт, обучение IT",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org разметка для организации
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VAP Company",
    "url": "https://vapcompany.kz",
    "logo": "https://vapcompany.kz/logomain2.png",
    "description": "Профессиональные IT решения для бизнеса: разработка сайтов, участие в тендерах, импорт товаров, обучение",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KZ",
      "addressLocality": "Алматы"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+77472051617",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "Kazakh", "English"]
    },
    "sameAs": [
      "https://instagram.com/vapcompanykz",
      "https://wa.me/77472051617"
    ]
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch для оптимизации */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />

        {/* Preload критичных изображений */}
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/logomain2.png" as="image" type="image/png" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
