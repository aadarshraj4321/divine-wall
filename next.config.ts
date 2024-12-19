// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['d3tj4iy39yo2dk.cloudfront.net'], // Add CloudFront domain here
//   },
// };

// export default nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d3tj4iy39yo2dk.cloudfront.net'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3tj4iy39yo2dk.cloudfront.net',
        pathname: '/public/**',
      },
    ],
  },
}

module.exports = nextConfig