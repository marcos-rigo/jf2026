/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "josefarhat.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
