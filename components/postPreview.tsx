import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import theme from '../styles/themes'
import { PostType } from '../types/post'
import Image from 'next/image'
import Button from './button'
import { useRouter } from 'next/router'
import { SectionWShadow } from '../styles/global'

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

const Container = styled(SectionWShadow)`
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
