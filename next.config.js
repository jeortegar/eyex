/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
    removeConsole: {
      exclude: ["error"],
    },
  },
};

module.exports = nextConfig;
