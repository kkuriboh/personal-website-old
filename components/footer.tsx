import styled from 'styled-components'
import theme from '../styles/themes'

export default function Footer() {
	return (
		<FooterStyle>
			&copy;{new Date().getFullYear()} - Augusto do Monte Pieper
		</FooterStyle>
	)
}

const FooterStyle = styled.footer`
	width: 100%;
	text-align: center;
	padding: 1rem;
	margin-top: 1rem;
	border-top: 1px solid ${theme.colors.links};
	background-color: ${theme.colors.primary};
	color: ${theme.colors.secondary};
`
