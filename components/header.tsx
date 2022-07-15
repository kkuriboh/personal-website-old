import Link from 'next/link'
import { useRef } from 'react'

import styled from 'styled-components'

import ThemeButton from './theme_button'

type props = {
	latest_post_uid: string
}

export default function Header({ latest_post_uid }: props) {
	const menu_ref = useRef<HTMLButtonElement>(null)
	const list_ref = useRef<HTMLUListElement>(null)

	function menu_click() {
		if (menu_ref.current && list_ref.current) {
			menu_ref.current.classList.toggle('opened')

			if (menu_ref.current.classList.contains('opened'))
				list_ref.current.style.display = 'flex'
			else list_ref.current.style.display = 'none'
		}
	}

	return (
		<HeaderStyle>
			<NavStyle>
				<Link href="/" passHref>
					<span className="only_phones home_btn">Augusto Pieper</span>
				</Link>
				<ul ref={list_ref}>
					<Link href="/" passHref>
						<li className="no_phones home_btn">Augusto Pieper</li>
					</Link>
					<Link href="/" passHref>
						<li className="item" data-text="HOME">
							HOME
						</li>
					</Link>
					<Link href="/blog" passHref>
						<li className="item" data-text="BLOG">
							BLOG
						</li>
					</Link>
					<Link href={`/blog/${latest_post_uid}`} passHref>
						<li className="item" data-text="LATEST-POST">
							LATEST-POST
						</li>
					</Link>
					<ThemeButton />
				</ul>
				{/* stolen from here
					https://css-tricks.com/line-animated-hamburger-menu/ */}
				<button
					ref={menu_ref}
					className="only_phones"
					onClick={menu_click}
				>
					<svg width="60" height="60" viewBox="0 0 100 100">
						<path
							id="line1"
							d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
						/>
						<path id="line2" d="M 20,50 H 80" />
						<path
							id="line3"
							d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
						/>
					</svg>
				</button>
			</NavStyle>
		</HeaderStyle>
	)
}

const HeaderStyle = styled.header`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1;
	background: ${({ theme }) => theme.colors.primary};
`

const NavStyle = styled.nav`
	.only_phones {
		display: none;
	}
	z-index: 10;
	color: ${({ theme }) => theme.colors.secondary};
	width: 100%;
	box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.colors.links};
	padding: 1rem;
	.home_btn {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.secondary};
		font-size: 1.5rem;
	}
	ul {
		width: 100%;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		display: flex;
	}
	.item {
		cursor: pointer;
		position: relative;
		color: transparent;
		transition: 0.3s ease-in-out;
		padding: 0.5rem 1rem;
		height: min-content;
		background-color: ${({ theme }) => theme.colors.primary};
		:hover {
			outline: 1px solid ${({ theme }) => theme.colors.secondary};
		}
		:hover::before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			transform: translate(0, 0);
			animation: btMoveDown 0.3s 0.1s forwards;
			background-color: ${({ theme }) => theme.colors.secondary};
		}
		::after {
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
	}

	@keyframes btMoveDown {
		75% {
			transform: translate(0.3rem, 0.3rem);
		}
		100% {
			transform: translate(0.2rem, 0.2rem);
		}
	}
	@keyframes font {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: -200%;
		}
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		padding: 0;
	}
	path {
		fill: none;
		stroke: ${({ theme }) => theme.colors.secondary};
		stroke-width: 2;
		transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	#line1 {
		stroke-dasharray: 60 207;
		stroke-width: 2;
	}
	#line2 {
		stroke-dasharray: 60 60;
		stroke-width: 2;
	}
	#line3 {
		stroke-dasharray: 60 207;
		stroke-width: 2;
	}
	.opened #line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 2;
	}
	.opened #line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 2;
	}
	.opened #line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 2;
	}

	@media screen and (max-width: 600px) {
		.only_phones {
			display: unset;
		}

		.no_phones {
			display: none;
		}
		ul {
			display: none;
			position: absolute;
			flex-direction: column;
			justify-content: space-around;
			height: calc(100vh - 5.75rem);
			width: 100vw;
			top: 5.75rem;
			left: 0;
			background-color: ${({ theme }) => theme.colors.primary};
			z-index: -1;
			animation: slideDown 0.6s 0.1s forwards;
			transform: translateY(-100%);
			li {
				font-size: 1.5rem;
			}
		}
		@keyframes slideDown {
			to {
				transform: translateY(0);
			}
		}
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`
