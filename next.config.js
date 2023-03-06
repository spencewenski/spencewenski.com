/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
