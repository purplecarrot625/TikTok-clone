/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img01.yohoboys.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
