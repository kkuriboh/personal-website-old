import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../utils/themeContext'

export default function ThemeButton({ style }: any | null) {
	const { theme, setTheme } = useContext(ThemeContext)

	function handleTheme() {
		if (theme.colors.primary === '#f5f5f5') {
			setTheme({
				colors: {
					primary: '#010101',
					secondary: '#f5f5f5',
					links: '#999',
				},
			})
			return
		}
		setTheme({
			colors: {
				primary: '#f5f5f5',
				secondary: '#0d0d0d',
				links: '#666',
			},
		})
	}

	return (
		<Style style={style}>
			<input type="checkbox" onClick={handleTheme} />
			<span />
		</Style>
	)
}

const Style = styled.label`
	position: relative;
	display: inline-block;
	width: 3.8rem;
	height: 1.75rem;
	z-index: 1;

	input {
		position: relative;
		display: inline-block;
		width: 3.8rem;
		height: 1.75rem;
	}
	input:checked + span {
		background: ${({ theme }) => theme.colors.secondary};
	}
	input:not(:checked):active + span::before {
		width: 2.4rem;
	}
	input:checked:active + span::before {
		transform: translate(1rem, -50%);
		width: 2.4rem;
	}
	input:checked + span::before {
		transform: translate(1.95rem, -50%);
	}
	span {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${({ theme }) => theme.colors.secondary};
		border-radius: 1rem;
		transition: all 0.6s;
		cursor: pointer;

		::before {
			content: '';
			position: absolute;
			left: 0.2rem;
			top: 50%;
			transform: translateY(-50%);
			height: 1.4rem;
			width: 1.4rem;
			border-radius: 1.6rem;
			background: ${({ theme }) => theme.colors.primary};
			transition: all 0.6s;
		}
	}

	@media screen and (max-width: 600px) {
		top: 0.2rem;
		right: 0.2rem;
	}
`
