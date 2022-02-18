import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import Footer from '../../components/footer'
import Header from '../../components/header'
import PostList from '../../components/postList'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

import { BlogMainStyle } from '../../styles/BlogHomeStyle'
import { sortPosts } from '../../utils/sortPosts'

export default function Blog({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Header latest_post_uid={posts[0].uid} />
			<BlogMainStyle>
				<h1>Blog</h1>
				<PostList initial_limit={5} posts={posts} isPreview />
			</BlogMainStyle>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	if (!checkEnv()) return { props: {} }

	const client = getPrismicClient()
	const posts = sortPosts((await client.getAllByType('blog-post', {})) as any)

	return {
		props: {
			posts,
		},
	}
}
