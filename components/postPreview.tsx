import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import theme from '../styles/themes'
import { PostType } from '../types/post'
import Image from 'next/image'
import Button from './button'
import { useRouter } from 'next/router'

export default function PostPreview(post: { post: PostType }) {
	const router = useRouter()
	function redirectToPost() {
		router.push(`/blog/${post.post.uid}`)
	}
	return (
		<Container>
			<Top>
				<h2 onClick={redirectToPost}>
					{RichText.asText(post.post.data.title)}
				</h2>
				<p>{post.post.data.publish_date}</p>
			</Top>
			<article>
				<p>{RichText.asText(post.post.data.summary)}</p>
				<Image
					src={post.post.data.banner.url}
					width={post.post.data.banner.dimensions.width}
					height={post.post.data.banner.dimensions.height}
					alt={`${post.post.id}-banner`}
				/>
			</article>
			<Button onClick={redirectToPost}>read more</Button>
		</Container>
	)
}

const Container = styled.section`
	color: ${theme.colors.secondary};
	outline: 1px solid ${theme.colors.secondary};
	position: relative;
	margin: 0 auto 2rem auto;
	padding: 2rem;
	top: 0.5rem;
	left: 0.5rem;
	animation: fakeMoveUp 0.3s 0.6s forwards;
	background-color: ${theme.colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		animation: moveDown 0.3s 0.6s forwards;
		transform: translate(0, 0);
	}

	@keyframes moveDown {
		75% {
			transform: translate(0.7rem, 0.7rem);
		}
		100% {
			transform: translate(0.5rem, 0.5rem);
			background-color: ${theme.colors.secondary};
		}
	}
	@keyframes fakeMoveUp {
		from {
			top: 0.5rem;
			left: 0.5rem;
		}
		to {
			top: 0;
			left: 0;
		}
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
	article {
		padding: 2rem 3rem;
		p {
			margin-bottom: 1.5rem;
		}

		span {
			max-height: 40vh;
			outline: 1px solid ${theme.colors.secondary};
		}
	}
	@media screen and (max-width: 600px) {
		padding: 1.5rem;
		article {
			padding: 2rem 1rem;
		}
	}
`
const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		font-weight: 400;
		font-size: 2rem;
		cursor: pointer;
	}
	h2:hover {
		text-decoration: underline;
	}
	p {
		font-weight: 300;
	}
`
