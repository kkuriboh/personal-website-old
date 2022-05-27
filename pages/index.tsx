import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
	function render_experience_item(item: ExperienceItem) {
		return (
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
						<div id="header_image">
							<Image src={home[0].primary.profile_picture.url} alt={home[0].primary.profile_picture.url} width={home[0].primary.profile_picture.dimensions.width} height={home[0].primary.profile_picture.dimensions.height} objectFit="contain" layout="fixed" />
						</div>
					</HeaderTopStyle>
					<HeaderBottomStyle>
						{home[0].items.map((item, index) => (
							<a
								key={index + 10}
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
							<li key={index + 20}>
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
								{item.content.map((paragraph, p_index) =>
									paragraph.type === 'paragraph' ? (
										<p key={p_index + 30}>
											{paragraph.text}
										</p>
									) : (
										p_index === 0 && (
											<RichText
												key={p_index}
												render={item.content}
											/>
										)
									)
								)}
								{index !== home[2].items.length - 1 && <br />}
							</li>
						))}
					</ul>
				</section>
				<section>
					<h2>Experience</h2>
					<ul>
						{home[3].items.map((item, index) => (
							<li key={index}>
								{item.link.url !== undefined ? (
									<a
										href={item.link.url}
										target="_blank"
										rel="noreferrer"
									>
										{render_experience_item(item)}
									</a>
								) : (
									render_experience_item(item)
								)}
								<RichText render={item.content} />
							</li>
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
					&copy;Augusto do Monte Pieper - All the source code is under
					the{' '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://mit-license.org/"
					>
						MIT
					</a>{' '}
					license.
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
