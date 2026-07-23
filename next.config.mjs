/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '4000' },
      { protocol: 'https', hostname: 'abrasion-bakeshop-oxidation.ngrok-free.dev' },
    ],
  },
};

export default nextConfig;
