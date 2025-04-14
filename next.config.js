/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
      {
        protocol: 'https',
        hostname: 'media.sproutsocial.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      }, 
      {
        protocol: 'https',
        hostname: 'gratisography.com', 
        pathname: '**',
      }, 
      {
        protocol: 'https',
        hostname: '2ysecm1ojd.ufs.sh', 
        pathname: '/f/**',     
      },

    ],
  },
};

module.exports = nextConfig;
 