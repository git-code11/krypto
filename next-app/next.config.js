/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
  webpack: config => {
    // Enable polling based on env variable being set
    if(process.env.NEXT_WEBPACK_USEPOLLING) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 800,
        aggregateTimeout: 300
      }
    }
    return config
  },
};

module.exports = nextConfig;