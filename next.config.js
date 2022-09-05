/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['images.unsplash.com', 'kreceo.sfo2.cdn.digitaloceanspaces.com']
  }
}