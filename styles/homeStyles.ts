import styled from 'styled-components'
import theme from './themes'

export const MainStyle = styled.main`
	section,
	header,
	footer {
		color: ${theme.colors.secondary};
		outline: 1px solid ${theme.colors.secondary};
		position: relative;
		width: 70%;
		margin: 2rem auto;
		padding: 1.5rem;
		top: 0.5rem;
		left: 0.5rem;
		animation: fakeMoveUp 0.3s 0.6s forwards;
		/* transform: translate(0.5rem, 0.5rem); */
		background-color: ${theme.colors.primary};

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
				/* transform: translate(0.5rem, 0.5rem); */
			}
			to {
				top: 0;
				left: 0;
				/* transform: translate(0, 0); */
			}
		}

		@media screen and (max-width: 600px) {
			width: 90%;
		}
	}
	h3 small {
		font-weight: normal;
	}
	li ul {
		list-style-type: square;
	}
	footer {
		text-align: center;
	}
`

export const HeaderTopStyle = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	img {
		border-radius: 50%;
		border: 0.2em solid ${theme.colors.secondary};
		width: 14rem;
		height: 14rem;
	}

	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;

		p {
			margin: 1rem 0;
		}
	}
`

export const HeaderBottomStyle = styled.div`
	margin: 1rem auto 0 auto;
	text-align: center;
`

export const AsideButtonStyle = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	padding: 0.5rem 2rem;
	border: 1px solid ${theme.colors.secondary};
	background-color: ${theme.colors.primary};
	color: ${theme.colors.secondary};
	transition: ease-out 0.6s;
	cursor: pointer;
	:hover {
		box-shadow: inset 12rem 0 0 0 ${theme.colors.secondary};
		color: ${theme.colors.primary};
	}
	@media screen and (max-width: 800px) {
		bottom: 3rem;
		right: -1.5rem;
		z-index: 3;
		height: min-content;
		transform: rotate(-90deg);
	}
`
export const BlogListStyle = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h3 {
		color: ${theme.colors.links};
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		font-size: x-large;
		&:hover {
			text-decoration: underline;
		}
	}
	li {
		margin: 1rem 0;
	}
	div {
		margin: 0 auto;
	}
`
