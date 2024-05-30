/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "dist",
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
