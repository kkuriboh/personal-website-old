/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.prismic.io'],
	},
	experimental: {
		styledComponents: true,
	},
}

module.exports = nextConfig
