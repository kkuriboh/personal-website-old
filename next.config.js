/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.prismic.io'],
	},
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
