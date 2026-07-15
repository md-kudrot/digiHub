import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactCompiler: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ui-avatars.com"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            }
            ,
            {
                protocol: "https",
                hostname: "placehold.co"
            }
        ]
    }
}

export default nextConfig

