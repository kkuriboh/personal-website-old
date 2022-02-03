import Link from 'next/link'
import styled from 'styled-components'

type Props = {
	latest_post_uid: string
}

export default function Nav({ latest_post_uid }: Props) {
	return (
		<NavStyle>
			<ul>
				<Link href={'/'} passHref>
					<li>HOME</li>
				</Link>
				<Link href={'/blog'} passHref>
					<li>BLOG</li>
				</Link>
				<Link href={`/blog/${latest_post_uid}`} passHref>
					<li>LATEST-POST</li>
				</Link>
			</ul>
		</NavStyle>
	)
}

const NavStyle = styled.nav`
	color: white;
	width: 80%;
	margin: 0 auto;
	background-color: #00f;
	display: flex;
	justify-content: space-evenly;
	ul {
		width: 100%;
		justify-content: space-evenly;
		list-style: none;
		display: flex;
	}
	li {
		cursor: pointer;
		/* margin: 0 1em; */
	}
`
