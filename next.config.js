/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com'
      }
    ]
  }
};

module.exports = nextConfig;
