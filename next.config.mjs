/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'utfs.io',
            // Optionally, you can specify port and pathname here
            // port: '8080',
            // pathname: '/path/to/images/**'
        }
    ],
        domains: [
          "utfs.io"
        ]
      }
};

export default nextConfig;
