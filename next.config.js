module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { 
            key: 'Content-Security-Policy', 
            value: "frame-src 'self' https://tally.so; script-src 'self' 'unsafe-inline' https://tally.so;" 
          },
        ],
      },
    ]
  },
};