import styled from 'styled-components'

export const MainStyle = styled.main`
	section,
	header,
	footer {
		color: ${({ theme }) => theme.colors.secondary};
		outline: 1px solid ${({ theme }) => theme.colors.secondary};
		position: relative;
		width: 70%;
		margin: 2rem auto;
		padding: 1.5rem;
		top: 0.5rem;
		left: 0.5rem;
		animation: fakeMoveUp 0.3s 0.6s forwards;
		background-color: ${({ theme }) => theme.colors.primary};

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
			background-color: ${({ theme }) => theme.colors.secondary};
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
				/* transform: translate(0.5rem, 0.5rem); */
			}
			to {
				top: 0;
				left: 0;
				/* transform: translate(0, 0); */
			}
		}
	}

	@media screen and (max-width: 600px) {
		section,
		header,
		footer {
			width: 90%;
			padding: 1rem;
		}
		header {
			margin: 0.2rem auto;
		}
	}
	header a {
		margin: 0 0.5rem;
	}
	h3 small {
		font-weight: normal;
	}
	li ul {
		list-style-type: square;
	}
	li h4 {
		margin-bottom: 1rem;
	}
	li a {
		display: block;
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

	#header_image {
		position: relative;
		border: 0.2em solid ${({ theme }) => theme.colors.secondary};
		border-radius: 50%;
		span > img {
			border-radius: 50%;
		}
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

export const BlogListStyle = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h3 {
		color: ${({ theme }) => theme.colors.links};
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
	@media screen and (max-width: 600px) {
		div {
			display: flex;
			flex-direction: column;
			button {
				margin: 0.5rem 0;
			}
		}
	}
`
