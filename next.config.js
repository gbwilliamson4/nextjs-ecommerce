/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }, { hostname: 'lh3.googleusercontent.com' }],
  },
  experimental: {
    serverActions: true,
  },
  nextConfig,
};
