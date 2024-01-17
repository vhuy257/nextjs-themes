/** @type {import('next').NextConfig} */
const nextConfig = {    
    images: {
        domains: ["localhost", "res.cloudinary.com", "trusty-desk-8c3c7017fe.media.strapiapp.com"],
        remotePatterns: [{
            protocol: 'http',
            hostname: "res.cloudinary.com",
            pathname: "*"
        }, {
            protocol: 'https',
            hostname: "trusty-desk-8c3c7017fe.media.strapiapp.com",
            pathname: "*"
        }]
    }
}

module.exports = nextConfig
