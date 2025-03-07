/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.w3schools.com",
      },
    ],
  },
};

export default nextConfig;
