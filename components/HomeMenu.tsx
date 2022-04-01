/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

import ThemeButton from './theme-button'

export default function Menu() {
	const [btState, setBtState] = useState<'opened' | 'closed'>('opened')

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setBtState(btState === 'opened' ? 'closed' : 'opened')

		const menu = document.getElementById('menu')

		menu?.animate(
			[
				{
					transform:
						btState === 'opened'
							? 'translate(0, 0)'
							: 'translate(-101%, 0)',
				},
			],
			{
				duration: 300,
				fill: 'forwards',
			}
		)

		e.currentTarget.animate(
			[
				{
					transform:
						btState === 'opened' ? 'rotate(0)' : 'rotate(90deg)',
				},
			],
			{
				duration: 150,
				fill: 'forwards',
			}
		)
	}

	return (
		<>
			<ArrowButton onClick={handleClick}>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_101_19)">
						<path d="M2.98201 15L29.018 15C29.415 15 29.774 15.244 29.926 15.617C30.078 15.991 29.994 16.421 29.713 16.707L17.924 28.707C17.54 29.098 16.919 29.098 16.535 28.707C16.151 28.316 16.151 27.684 16.535 27.293L26.646 17L2.98301 17C2.43901 17 2.00001 16.552 2.00001 16C2.00001 15.448 2.43901 15 2.98201 15Z" />
						<path d="M17.228 2.99999C17.479 2.99999 17.731 3.09799 17.923 3.29299L25.783 11.293C26.167 11.684 26.167 12.316 25.783 12.707C25.399 13.098 24.778 13.098 24.394 12.707L16.534 4.70699C16.15 4.31599 16.15 3.68399 16.534 3.29299C16.725 3.09799 16.977 2.99999 17.228 2.99999Z" />
					</g>
					<defs>
						<clipPath id="clip0_101_19">
							<rect
								width="32"
								height="32"
								fill="white"
								transform="translate(32 32) rotate(-180)"
							/>
						</clipPath>
					</defs>
				</svg>
			</ArrowButton>
			<Styles id="menu">
				<Link href={'/blog'} passHref>
					<BlogBtn>BLOG</BlogBtn>
				</Link>
				<ThemeButton />
			</Styles>
		</>
	)
}

const Styles = styled.div`
	top: 0;
	z-index: 1;
	padding: 0.6rem;
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	transform: translate(-101%, 0);
	outline: 1px solid ${({ theme }) => theme.colors.secondary};
	background-color: ${({ theme }) => theme.colors.primary};
`

const ArrowButton = styled.button`
	position: fixed;
	top: 0;
	left: 0;
	padding: 0.6rem;
	z-index: 2;

	svg {
		fill: ${({ theme }) => theme.colors.secondary};
	}

	background-color: transparent;
	transform: rotate(90deg);
	border: none;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		position: sticky;
		top: 0;
	}
`

const BlogBtn = styled.button`
	margin: 0 1rem;
	padding: 0.5rem 2rem;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
	transition: ease-out 0.6s;
	cursor: pointer;
	:hover {
		box-shadow: inset 12rem 0 0 0 ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
`
