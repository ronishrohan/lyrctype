/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "**"
        }]
    },
    env: {
        GENIUS_ACCESS_TOKEN: process.env.GENIUS_ACCESS_TOKEN
    },
    redirects: async () => {
        return [
            {source: "/", destination: "/home", permanent: true}
        ]
    }
};

export default nextConfig;
