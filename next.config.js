/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "res.cloudinary.com"],
        remotePatterns: [{
            protocol: 'http',
            hostname: "res.cloudinary.com",
            pathname: "*"
        }]
    }
}

module.exports = nextConfig
