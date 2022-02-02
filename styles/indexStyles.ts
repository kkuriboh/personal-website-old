import styled from 'styled-components'

export const MainStyle = styled.main`
	section h2 {
		margin-bottom: 1rem;
	}
	section ul {
		margin-left: 1rem;
		text-indent: 0.3rem;
	}
	section h3 {
		margin-bottom: 0.5rem;
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

export const ContainerStyle = styled.div`
	color: var(--foreground);
	outline: 1px solid var(--foreground);
	position: relative;
	width: 70%;
	margin: 2rem auto;
	padding: 1.5rem;
	top: 0.5rem;
	left: 0.5rem;
	animation: fakeMoveUp 0.3s 0.6s forwards;
	/* transform: translate(0.5rem, 0.5rem); */
	background-color: var(--background);

	::before {
		content: '';
		width: 100%;
		height: 100%;
		background-color: var(--foreground);
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
		border: 0.2em solid var(--foreground);
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

export const FooterStyle = styled(ContainerStyle)`
	text-align: center;
`
