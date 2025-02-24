

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `$var: red;`,
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "picsum.photos",
          },
        ],
      },
};

export default nextConfig;
