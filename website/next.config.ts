import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'], // Современные форматы
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Адаптивные размеры
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Размеры иконок
    minimumCacheTTL: 60, // Кеш на 60 секунд
  },

  // Сжатие для лучшей производительности
  compress: true,

  // Строгий режим React
  reactStrictMode: true,

  // Powering Headers для безопасности и SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      // Кеширование статических файлов
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
