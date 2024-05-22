/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ochi.design',
            // port: '',
            // pathname: '',
          },
        ],
      },
};


export default nextConfig;
