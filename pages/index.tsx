/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
	AsideButtonStyle,
	BlogListStyle,
	HeaderBottomStyle,
	HeaderTopStyle,
	MainStyle,
} from '../styles/homeStyles'

import { getPrismicClient } from '../utils/prismic'
import checkEnv from '../utils/checkEnv'
import { RichText } from 'prismic-reactjs'
import { PostType } from '../types/post'

const Home: NextPage = ({
	posts,
	age,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>Augusto Codreanu</title>
			</Head>
			<MainStyle>
				<header>
					<HeaderTopStyle>
						<div>
							<div>
								<h1>Augusto, </h1>
								<h2>Fullstack web developer</h2>
							</div>
							<p>
								Besides from my passion to programming, I&apos;m
								{age} years old, knife collector, linux
								enthusiast, privacy/FOSS activist, skateboarder
								and nu metal fan. Lately I&apos;ve been studying
								a lot of systems programming with Rust and C++
								to have a better understanding of how everything
								works and I&apos;m loving it.
							</p>
						</div>
						<img src="/profile-pic.jpg" alt="profile picture" />
					</HeaderTopStyle>
					<HeaderBottomStyle>
						<a
							target="_blank"
							href="https://github.com/kuribOwOh"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/augusto-pieper-5812b820a/"
							rel="noreferrer"
						>
							LinkedIn
						</a>
						<a
							target="_blank"
							href="mailto:augustooopieper@gmail.com"
							rel="noreferrer"
						>
							Email
						</a>
					</HeaderBottomStyle>
				</header>
				<Link href={'/blog'} passHref>
					<AsideButtonStyle>BLOG</AsideButtonStyle>
				</Link>
				<section>
					<h2>Skills</h2>
					<ul>
						<li>Web with NextJS and Svelte</li>
						<li>Backend with GraphQL and Express</li>
						<li>Basics of mobile with Flutter and React Native</li>
						<li>Advanced Linux</li>
						<li>Scripting with Lua and Shell</li>
						<li>Familiar with Figma, Adobe PS, Krita and Office</li>
						<li>Git and Github</li>
						<li>Native Portuguese / intermediary English</li>
					</ul>
				</section>
				<section>
					<h2>Education</h2>
					<ul>
						<li>
							<h3>
								TI Technical Course
								<small> - 2020 / present</small>
							</h3>
							<h4>What I&apos;ve learned</h4>
							<br />
							<ul>
								<li>Java / Unit tests with JUnit</li>
								<li>.Net Framework / Windows Forms</li>
								<li>Basics of web desing / development</li>
								<li>PHP / CodeIgniter 3</li>
								<li>Computer repair and maintenance</li>
								<li>
									Network administration with linux and
									windows
								</li>
								<li>SQL</li>
							</ul>
						</li>
						<br />
						<li>
							<h3>Self-taught</h3>
							<p>
								I started learning by myself along side my
								course because I knew that they were teaching me
								something a bit outdated and I wanted to learn
								something new to be prepared for the industry.
								<br />I started with simple Javascript and
								ReactJS, then started learning backend with
								NodeJS and Typescript. Now I feel confident to
								create fullstack web apps using these
								technologies.
							</p>
						</li>
					</ul>
				</section>
				<section>
					<h2>Experience</h2>
					<ul>
						<a
							target="_blank"
							href="https://dibiaru-xmas-collab.vercel.app/"
							rel="noreferrer"
						>
							<li>
								<h3>Christmas pixel art collab website</h3>
								<p
									style={{
										color: '#f5f5f5',
									}}
								>
									Svelte website that I did for a pixel art
									event.
								</p>
							</li>
						</a>
						<li>
							<h3>
								Bartender <small>oct.2021 - present</small>
							</h3>
							<p>
								Not something related to software, but gave me a
								lot of soft skills. Because of this, now I can
								work with teams whithout any problems.
							</p>
						</li>
					</ul>
				</section>
				<section>
					<h2>Blog</h2>
					<BlogListStyle>
						{posts.map((post: PostType) => (
							<li key={post.id}>
								<Link href={`/blog/${post.uid}`} passHref>
									<h3>{post.uid}</h3>
								</Link>
								<RichText render={post.data.summary} />
							</li>
						))}
					</BlogListStyle>
				</section>
				<footer>&copy;2022 - Augusto do Monte Pieper</footer>
			</MainStyle>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	if (!checkEnv()) return { props: {} }

	const client = getPrismicClient()
	const posts = await client.getAllByType('blog-post', {})
	const age =
		((new Date() as any) - (new Date('2003-05-15') as any)) /
		(1000 * 60 * 60 * 24 * 365)

	return {
		props: {
			posts,
			age: ' ' + age.toString().substring(0, 2),
		},
		revalidate: 525600,
	}
}
