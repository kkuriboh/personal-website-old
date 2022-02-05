import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'
import theme from '../styles/themes'

type Props = {
	latest_post_uid: string
}

export default function Nav({ latest_post_uid }: Props) {
	return (
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
	)
}

const NavStyle = styled.nav`
	z-index: 10;
	color: ${theme.colors.foreground};
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	box-shadow: 1px 1px 1px 1px ${theme.colors.links};
	padding: 1rem;
	/* background-color: ${theme.colors.background}; */
	span {
		cursor: pointer;
	}
	ul {
		width: 100%;
		justify-content: space-evenly;
		list-style: none;
		display: flex;
	}
	li {
		cursor: pointer;
		position: relative;
		color: transparent;
		transition: 0.3s ease-in-out;
		padding: 0.5rem 1rem;
		text-align: center;
		background-color: ${theme.colors.background};
	}
	li:hover {
		outline: 1px solid ${theme.colors.foreground};
	}
	li:hover::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		background-color: ${theme.colors.foreground};
		transform: translate(0, 0);
		animation: moveDown 0.3s 0.1s forwards;
		background-color: ${theme.colors.foreground};
	}

	@keyframes moveDown {
		75% {
			transform: translate(0.4rem, 0.4rem);
		}
		100% {
			transform: translate(0.3rem, 0.3rem);
			background-color: ${theme.colors.foreground};
		}
	}
	li::after {
		content: attr(data-text);
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
