import * as prismic from '@prismicio/client'
// import fetch from 'node-fetch'

export function getPrismicClient() {
	const endpoint = prismic.getEndpoint(process.env.PRISMIC_API_ENDPOINT!)
	const client = prismic.createClient(endpoint, {
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		fetch,
	})

	return client
}
