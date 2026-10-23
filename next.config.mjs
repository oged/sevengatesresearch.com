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
      {
        source: "/research/chellarams-hotel-california",
        destination: "/research/chellarams-family-never-left",
        permanent: true,
      },
      {
        source: "/images/research/chellarams-hotel-california/:path*",
        destination: "/images/research/chellarams-family-never-left/:path*",
        permanent: true,
      },
      {
        source: "/downloads/chellarams-hotel-california.pdf",
        destination: "/downloads/chellarams-family-never-left.pdf",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
