/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { getPrismicClient } from '../utils/prismic'
import checkEnv from '../utils/checkEnv'
import PostList from '../components/post_list'

import {
	BlogListStyle,
	HeaderBottomStyle,
	HeaderTopStyle,
	MainStyle,
} from '../styles/homeStyles'
import { sortPosts } from '../utils/sortPosts'
import { useContext } from 'react'
import { ThemeContext } from '../utils/themeContext'
import Menu from '../components/home_menu'
import { HomeBodyType, PostType } from '../types/post'
import { Link, RichText, RichTextBlock } from 'prismic-reactjs'

type StaticProps = {
	posts: PostType[]
	home: HomeBodyType
	age: string
}

type ExperienceItem = {
	link: Link
	title: RichTextBlock[]
	subtitle: RichTextBlock[]
	content: RichTextBlock[]
}

const Home: NextPage<StaticProps> = ({ posts, home, age }) => {
	const { theme } = useContext(ThemeContext)

	function render_experience_item(item: ExperienceItem, index: number) {
		return (
			<li key={index}>
				<h3>
					{item.subtitle[0].text !== '' ? (
						<>
							{RichText.asText(item.title)}
							<small>{' ' + item.subtitle[0].text}</small>
						</>
					) : (
						RichText.asText(item.title)
					)}
				</h3>
			</li>
		)
	}

	return (
		<>
			<Head>
				<title>Augusto Pieper</title>
			</Head>
			<MainStyle>
				<Menu />
				<header>
					<HeaderTopStyle>
						<div>
							<div>
								<h1>
									{RichText.asText(
										home[0].primary.first_name
									)}
								</h1>
								<h2>{RichText.asText(home[0].primary.role)}</h2>
							</div>
							<p>
								{RichText.asText(
									home[0].primary.resume
								).replace('${age}', age)}
							</p>
						</div>
						<img
							src={home[0].primary.profile_picture.url}
							alt={home[0].primary.profile_picture.alt}
						/>
					</HeaderTopStyle>
					<HeaderBottomStyle>
						{home[0].items.map((item, index) => (
							<a
								key={index}
								target="_blank"
								rel="noreferrer"
								href={item.link.url}
							>
								{RichText.asText(item.labelname)}
							</a>
						))}
					</HeaderBottomStyle>
				</header>
				<section>
					<h2>Skills</h2>
					<RichText render={home[1].items[0].content} />
				</section>
				<section>
					<h2>Education</h2>
					<ul>
						{home[2].items.map((item, index) => (
							<>
								<li key={index}>
									{item.subtitle[0].text !== '' ? (
										<h3>
											{RichText.asText(item.title)}
											<small>
												{' - ' + item.subtitle[0].text}
											</small>
										</h3>
									) : (
										<RichText render={item.title} />
									)}
									{item.content.map((paragraph, index) =>
										paragraph.type === 'paragraph' ? (
											<p key={index}>{paragraph.text}</p>
										) : (
											index === 0 && (
												<RichText
													render={item.content}
												/>
											)
										)
									)}
								</li>
								{index !== home[2].items.length - 1 && <br />}
							</>
						))}
					</ul>
				</section>
				<section>
					<h2>Experience</h2>
					<ul>
						{home[3].items.map((item, index) => (
							<>
								{item.link.url !== undefined ? (
									<a
										href={item.link.url}
										target="_blank"
										rel="noreferrer"
									>
										{render_experience_item(item, index)}
									</a>
								) : (
									render_experience_item(item, index)
								)}
								<RichText render={item.content} />
							</>
						))}
					</ul>
				</section>
				<section>
					<h2>Blog</h2>
					<BlogListStyle>
						<PostList initial_limit={3} posts={posts} />
					</BlogListStyle>
				</section>
				<footer>
					&copy;{new Date().getFullYear()} - Augusto do Monte Pieper
				</footer>
			</MainStyle>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	if (!checkEnv()) return { props: {} }

	const client = getPrismicClient()

	const home_page = await client.getSingle('home')

	const posts = sortPosts((await client.getAllByType('blog-post', {})) as any)

	const age =
		((new Date() as any) - (new Date('2003-05-15') as any)) /
		(1000 * 60 * 60 * 24 * 365)

	return {
		props: {
			posts: posts as PostType[],
			home: home_page.data.body as HomeBodyType,
			age: ' ' + age.toString().substring(0, 2),
		},
		revalidate: 525600,
	}
}

export default Home
