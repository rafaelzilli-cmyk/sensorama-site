/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
];

const longCache = [
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      // Security headers em todas as rotas
      { source: '/(.*)', headers: securityHeaders },
      // Cache agressivo para assets estáticos imutáveis
      { source: '/images/:path*', headers: longCache },
      { source: '/_next/static/:path*', headers: longCache },
      { source: '/favicon.ico', headers: longCache },
      { source: '/apple-touch-icon.png', headers: longCache },
    ];
  },
  // Redirect non-www to www handled at Vercel/DNS level
  async redirects() {
    return [];
  },
};

export default nextConfig;
