import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Nav from '../../components/nav'
import PostPreview from '../../components/postPreview'
import { BlogMainStyle, HeaderStyle } from '../../styles/BlogHomeStyle'
import { PostType } from '../../types/post'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

export default function Blog({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
			<HeaderStyle>
				<Nav latest_post_uid={posts[0].uid} />
			</HeaderStyle>
			<BlogMainStyle>
				<h1>Blog</h1>
				{posts.map((post: PostType) => (
					<PostPreview key={post.id} post={post} />
				))}
			</BlogMainStyle>
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
