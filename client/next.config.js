/** @type {import('next').NextConfig} */
const path = require('path')

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
  poweredByHeader: false,
  env: {
    PORT: '3279'
  }
}

module.exports = nextConfig
