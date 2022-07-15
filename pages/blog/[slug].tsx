import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-light.css'

import Footer from '../../components/footer'
import Header from '../../components/header'
import RichTextFilter from '../../components/rich_text_filter'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

import { PostMainStyle, TopStyle } from '../../styles/postStyle'
import { sortPosts } from '../../utils/sortPosts'
import { BodySliceType } from '../../types/post'
import { useEffect, useState } from 'react'

export default function Post({
	content,
	latest_post_uid,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	useEffect(() => {
		hljs.configure({
			ignoreUnescapedHTML: true,
		})
		hljs.highlightAll()
	}, [])

	return (
		<>
			<Head>
				<meta name="description" content="Augusto's blog page" />
				<title>{RichText.asText(content.data.title)}</title>
			</Head>
			<Header latest_post_uid={latest_post_uid} />
			<PostMainStyle>
				<TopStyle>
					<div>
						<h1>{RichText.asText(content.data.title)}</h1>
						<time dateTime={content.data.publish_date}>
							{new Date(content.data.publish_date)
								.toUTCString()
								.slice(0, -4)}
						</time>
					</div>
					<Image
						src={content.data.banner.url}
						width={content.data.banner.dimensions.width}
						height={content.data.banner.dimensions.height}
						alt="banner"
					/>
					<p>{RichText.asText(content.data.summary)}</p>
				</TopStyle>
				{content.data.body.map((body: BodySliceType, index: number) => (
					<RichTextFilter body={body} key={index} />
				))}
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
