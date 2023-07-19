/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname:
          "/photo-1497681883844-82b4f0a359a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
};

module.exports = nextConfig;
