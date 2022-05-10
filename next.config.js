/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
    styledComponents: true,
    pure: true,
  },
};

module.exports = nextConfig;
