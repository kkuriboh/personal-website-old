import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import Footer from '../../components/footer'
import Header from '../../components/header'
import RichTextFilter from '../../components/richTextFilter'
import { PostMainStyle, TopStyle } from '../../styles/postStyle'
import { PostType } from '../../types/post'
import checkEnv from '../../utils/checkEnv'
import { getPrismicClient } from '../../utils/prismic'

export default function Post({
	content,
	latest_post_uid,
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
	const typedContent = content as PostType

	return (
		<>
			<Head>
				<title>{RichText.asText(typedContent.data.title)}</title>
			</Head>
			<Header latest_post_uid={latest_post_uid} />
			<PostMainStyle style={{ color: 'white' }}>
				<TopStyle>
					<h1>{RichText.asText(typedContent.data.title)}</h1>
					<p>{typedContent.data.publish_date}</p>
				</TopStyle>
				{
					//#region test
					/* {content.data.body[0].items.map(
					(item: ItemType, index: number) => {
						// console.log(item.content[index])
						// if ((item.content[index].type = Elements.image)) {
						// 	return (
						// 		<Image
						// 			key={index}
						// 			src={item.content[index].url}
						// 			alt={item.content[index].alt}
						// 			width={
						// 				item.content[index].dimensions?.width
						// 			}
						// 			height={
						// 				item.content[index].dimensions?.height
						// 			}
						// 		/>
						// 	)
						// }
						return <RichText key={index} render={item.content!} />
					}
					)} */
					//#endregion
				}
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
	const latest_post = await client.getAllByType('blog-post', {
		orderings: {
			field: 'publish-date',
			direction: 'desc',
		},
		pageSize: 1,
	})
	// content.data.body[0].items.forEach((item: any) => {
	// 	console.log(item)
	// })
	// console.log(content.data.body)

	return {
		props: {
			content,
			latest_post_uid: latest_post[0].uid,
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
