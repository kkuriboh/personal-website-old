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
				<img src="/arrow.svg" alt="menu-button" />
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
