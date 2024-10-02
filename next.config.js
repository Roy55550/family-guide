module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add any necessary webpack configurations here
    return config
  },
};