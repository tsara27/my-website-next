const path = require("path");

const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
