import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import theme from '../styles/themes'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
}

export default function Button(props: Props) {
	return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

const ButtonStyle = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${theme.colors.primary};
	border: 1px solid ${theme.colors.secondary};
	color: ${theme.colors.secondary};
	cursor: pointer;
	transition: ease-out 0.6s;
	border-radius: 5px;

	:hover {
		box-shadow: inset 12rem 0 0 0 ${theme.colors.secondary};
		color: ${theme.colors.primary};
	}
`
