import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

import Footer from '../../components/footer'
import Header from '../../components/header'
import RichTextFilter from '../../components/richTextFilter'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

import { PostMainStyle, TopStyle } from '../../styles/postStyle'
import { sortPosts } from '../../utils/sortPosts'

export default function Post({
	content,
	latest_post_uid,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>{RichText.asText(content.data.title)}</title>
			</Head>
			<Header latest_post_uid={latest_post_uid} />
			<PostMainStyle style={{ color: 'white' }}>
				<TopStyle>
					<div>
						<h1>{RichText.asText(content.data.title)}</h1>
						<p>
							{new Date(content.data.publish_date)
								.toUTCString()
								.slice(0, -4)}
						</p>
					</div>
					<Image
						src={content.data.banner.url}
						width={content.data.banner.dimensions.width}
						height={content.data.banner.dimensions.height}
						alt="banner"
					/>
					<p>{RichText.asText(content.data.summary)}</p>
				</TopStyle>
				<RichTextFilter body={content.data.body[0]} />
			</PostMainStyle>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	if (!checkEnv()) return { props: {} }
	const slug = context.params?.slug as string
	const client = getPrismicClient()
	const content = await client.getByUID('blog-post', slug, {})

	// BUG: idk why, but this doesn't work
	// const latest_post = await client.getAllByType('blog-post', {
	// 	orderings: {
	// 		field: 'publish-date',
	// 		direction: 'desc',
	// 	},
	// 	pageSize: 1,
	// })

	const latest_post = sortPosts(
		(await client.getAllByType('blog-post', {})) as any
	)[0]

	return {
		props: {
			content,
			latest_post_uid: latest_post.uid,
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
