module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { ...config.resolve.fallback, react: require.resolve('react') };
    return config;
  },
};