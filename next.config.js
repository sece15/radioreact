/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}
const withVideos = require('next-videos')


module.exports = nextConfig, withVideos({
  basePath: '/projects',
  webpack(config, options) {
    return config
  }
}
)
