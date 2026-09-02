/** @type {import('next').NextConfig} */
const repoName = 'portfolio-v2'
const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
const basePath = isProduction ? '/' + repoName : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true
}

module.exports = nextConfig