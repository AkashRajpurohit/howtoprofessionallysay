/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  headers: [
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
