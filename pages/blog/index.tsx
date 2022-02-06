import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PostPreview from '../../components/postPreview'
import { BlogMainStyle } from '../../styles/BlogHomeStyle'
import { PostType } from '../../types/post'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

export default function Blog({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [limit, setLimit] = useState<number>(10)
	// if (process.env.NODE_ENV !== 'development') {
	// 	return (
	// 		<div
	// 			style={{
	// 				width: '100vw',
	// 				height: '100vh',
	// 				display: 'flex',
	// 				justifyContent: 'center',
	// 				alignItems: 'center',
	// 			}}
	// 		>
	// 			<span
	// 				style={{
	// 					color: '#fff',
	// 					fontSize: '4rem',
	// 				}}
	// 			>
	// 				WORK IN PROGRESS...
	// 			</span>
	// 		</div>
	// 	)
	// }
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Header latest_post_uid={posts[0].uid} />
			<BlogMainStyle>
				<h1>Blog</h1>
				{posts.slice(0, limit).map((post: PostType) => (
					<PostPreview key={post.id} post={post} />
				))}
				{posts.length > limit && (
					<Button onClick={() => setLimit(limit + 5)}>
						load more...
					</Button>
				)}
			</BlogMainStyle>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	if (!checkEnv()) return { props: {} }

	const client = getPrismicClient()
	const posts = await client.getAllByType('blog-post', {
		orderings: {
			field: 'publish-date',
			direction: 'desc',
		},
	})
	// console.log(posts[0].data)

	return {
		props: {
			posts,
		},
	}
}
