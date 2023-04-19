/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["static.wixstatic.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
