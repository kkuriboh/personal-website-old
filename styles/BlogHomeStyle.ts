import styled from 'styled-components'
import theme from './themes'

export const BlogMainStyle = styled.main`
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${theme.colors.foreground};
	h1 {
		margin: 3rem 0;
	}
`

export const HeaderStyle = styled.header`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1;
	background: ${theme.colors.background};
`
