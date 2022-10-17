/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img01.yohoboys.com'],
  }
}

module.exports = nextConfig
