/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    imageSizes: [500, 500],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      },
    ]
  }
}

module.exports = nextConfig
