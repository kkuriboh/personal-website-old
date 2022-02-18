import styled, { createGlobalStyle } from 'styled-components'
import theme from './themes'

const GlobalStyle = createGlobalStyle`
	:root {
		--background: ${theme.colors.primary};
		--foreground: ${theme.colors.secondary};
		--links: ${theme.colors.links};
	}

	html,
	body {
		font-family: 'Titillium Web', sans-serif;
	}

	body {
		background-color: var(--background);
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: var(--links);
		margin: 0 0.5rem;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		text-decoration: underline;
	}

	p {
		text-indent: 1rem;
	}
	ul {
		padding: 0 2.85rem;
	}
	@media screen and (max-width: 600px) {
		ul {
			padding: 0 1.5rem;
		}
	}

`

export default GlobalStyle

export const SectionWShadow = styled.section`
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
`
