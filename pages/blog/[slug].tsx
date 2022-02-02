import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { RichText } from 'prismic-reactjs'

import { getPrismicClient } from '../../utils/prismic'

export default function Post({
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div style={{ color: 'white' }}>
			<RichText render={content.data.title} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const client = getPrismicClient()
	const content = await client.getByUID('blog-post', 'test', {})

	return {
		props: {
			content,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN)
		return { paths: [], fallback: false }

	const client = getPrismicClient()
	const posts = await client.getAllByType('blog-post', {})

	return {
		paths: posts.map((post: any) => ({
			params: { slug: post.uid },
		})),
		fallback: false,
	}
}
