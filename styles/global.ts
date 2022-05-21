import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html,
	body {
		font-family: 'Titillium Web', sans-serif;
	}

	body {
		background-color: ${({ theme }) => theme.colors.primary};
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.links};
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		text-decoration: underline;
	}

	p {
		text-indent: 2ch;
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
	color: ${({ theme }) => theme.colors.secondary};
	outline: 1px solid ${({ theme }) => theme.colors.secondary};
	position: relative;
	margin: 0 auto 2rem auto;
	padding: 2rem;
	top: 0.5rem;
	left: 0.5rem;
	animation: fakeMoveUp 0.3s 0.6s forwards;
	background-color: ${({ theme }) => theme.colors.primary};
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
		background-color: ${({ theme }) => theme.colors.secondary};
		animation: moveDown 0.3s 0.6s forwards;
		transform: translate(0, 0);
	}

	@keyframes moveDown {
		75% {
			transform: translate(0.7rem, 0.7rem);
		}
		100% {
			transform: translate(0.5rem, 0.5rem);
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
