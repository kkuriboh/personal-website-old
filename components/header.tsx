import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'
import theme from '../styles/themes'

type Props = {
	latest_post_uid: string
}

export default function Header({ latest_post_uid }: Props) {
	return (
		<HeaderStyle>
			<NavStyle>
				<ul>
					<Link href="/" passHref>
						<Image
							src={'/logo-placeholder.png'}
							alt="logo"
							width={40}
							height={40}
						/>
					</Link>
					<Link href={'/'} passHref>
						<li data-text="HOME">HOME</li>
					</Link>
					<Link href={'/blog'} passHref>
						<li data-text="BLOG">BLOG</li>
					</Link>
					<Link href={`/blog/${latest_post_uid}`} passHref>
						<li data-text="LATEST-POST">LATEST-POST</li>
					</Link>
				</ul>
			</NavStyle>
		</HeaderStyle>
	)
}

const HeaderStyle = styled.header`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1;
	background: ${theme.colors.primary};
`

const NavStyle = styled.nav`
	z-index: 10;
	color: ${theme.colors.secondary};
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	box-shadow: 1px 1px 1px 1px ${theme.colors.links};
	padding: 1rem;
	span {
		cursor: pointer;
	}
	ul {
		width: 100%;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		display: flex;
	}
	li {
		cursor: pointer;
		position: relative;
		color: transparent;
		transition: 0.3s ease-in-out;
		padding: 0.5rem 1rem;
		height: min-content;
		background-color: ${theme.colors.primary};
	}
	li:hover {
		outline: 1px solid ${theme.colors.secondary};
	}
	li:hover::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		background-color: ${theme.colors.secondary};
		transform: translate(0, 0);
		animation: btMoveDown 0.3s 0.1s forwards;
		background-color: ${theme.colors.secondary};
	}

	@keyframes btMoveDown {
		75% {
			transform: translate(0.3rem, 0.3rem);
		}
		100% {
			transform: translate(0.2rem, 0.2rem);
			background-color: ${theme.colors.secondary};
		}
	}
	li::after {
		content: attr(data-text);
		text-align: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		transition: opacity 0.3s ease, animation 0.3s ease;
		background: linear-gradient(
			to right,
			#88c0d0 5%,
			#ebcb8b 15%,
			#ebcb8b 25%,
			#bf616a 35%,
			#bf616a 45%,
			#b48ead 55%,
			#b48ead 65%,
			#a3be8c 75%,
			#a3be8c 85%,
			#88c0d0 95%
		);
		background-size: 200%;
		background-clip: text;
		-webkit-background-clip: text;
		background-position: 0%;
		animation: font 1s linear infinite;
	}
	@keyframes font {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: -200%;
		}
	}
`
