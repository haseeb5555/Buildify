/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com','64.media.tumblr.com','avatars.githubusercontent.com','img.clerk.com'],
    },
}

module.exports = nextConfig
