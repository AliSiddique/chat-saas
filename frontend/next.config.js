/** @type {import('next').NextConfig} */

const nextConfig = {
    images:{
        domains: ['cdn.sanity.io','tailwindui.com','images.unsplash.com']
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
}

module.exports = nextConfig
