import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Button from '../components/button'
import Footer from '../components/footer'
import Header from '../components/header'
import checkEnv from '../utils/checkEnv'
import { getPrismicClient } from '../utils/prismic'

export default function NotFound({
	latest_post_uid,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter()
	return (
		<>
			<Head>
				<meta name="description" content="404 page" />
				<title>404</title>
			</Head>
			<Header latest_post_uid={latest_post_uid} />
			<Styles>
				<h1>Sorry, we couldn&apos;t find anything in here</h1>
				<h2>why don&apos;t you go back?</h2>
				<Button onClick={() => router.back()}>go back</Button>
				<p>404 - page not found</p>
			</Styles>
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	if (!checkEnv()) return { props: {} }
	const client = getPrismicClient()
	const latest_post = await client.getAllByType('blog-post', {
		orderings: {
			field: 'publish-date',
			direction: 'desc',
		},
		pageSize: 1,
	})

	return {
		props: {
			latest_post_uid: latest_post[0].uid,
		},
	}
}

const Styles = styled.main`
	margin: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.secondary};
	h1,
	h2,
	p {
		font-weight: 300;
	}
	button,
	p {
		margin-top: 4rem;
	}
`
