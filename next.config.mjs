/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Redirect non-www to www handled at Vercel/DNS level
  async redirects() {
    return [];
  },
};

export default nextConfig;
