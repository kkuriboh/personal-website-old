import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode
}

export default function Button(props: props) {
	return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

const ButtonStyle = styled.button`
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondary};
	cursor: pointer;
	transition: ease-out 0.6s;
	border-radius: 5px;
	margin: 0 1rem;

	:hover {
		box-shadow: inset 12rem 0 0 0 ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
`
