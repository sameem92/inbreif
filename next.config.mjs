/** @type {import('next').NextConfig} */
const nextConfig = {


  eslint: {
     ignoreDuringBuilds: true,
  },
  typescript: {
   
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      //   {
      //     source: '/:all*(js|css)', // Cache JS and CSS files for 1 year
      //     headers: [
      //       {
      //         key: 'Cache-Control',
      //         value: 'public, max-age=31536000, immutable', // Cache for a year, won't change
      //       },
      //     ],
      //   },
      {
        source: "/:all*(jpg|jpeg|png|svg|gif)", // Cache images
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(woff|woff2|ttf|otf)", // Cache fonts
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
