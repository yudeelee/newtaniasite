/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
    ],
  },
  experimental: {
    optimizeCss: true, // витягає критичні CSS
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
