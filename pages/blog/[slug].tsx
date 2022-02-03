import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { RichText } from 'prismic-reactjs'
import checkEnv from '../../utils/checkEnv'

import { getPrismicClient } from '../../utils/prismic'

export default function Post({
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	if (process.env.NODE_ENV !== 'development') {
		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						color: '#fff',
						fontSize: '4rem',
					}}
				>
					WORK IN PROGRESS...
				</span>
			</div>
		)
	}
	return (
		<div style={{ color: 'white' }}>
			<RichText render={content.data.title} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	if (!checkEnv()) return { props: {} }
	const slug = context.params?.slug as string
	const client = getPrismicClient()
	const content = await client.getByUID('blog-post', slug, {})

	return {
		props: {
			content,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	if (!checkEnv()) return { paths: [], fallback: false }

	const client = getPrismicClient()
	const posts = await client.getAllByType('blog-post', {})

	return {
		paths: posts.map((post: any) => ({
			params: { slug: post.uid },
		})),
		fallback: false,
	}
}
