/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/images/research/dangote-refinery-ipo-three-valuations/hero-three-valuations.svg",
        destination: "/images/research/dangote-refinery-ipo-three-valuations/hero-three-valuations.png",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
