import styled from 'styled-components'
import { SectionWShadow } from './global'
import theme from './themes'

export const PostMainStyle = styled.main`
	width: 70%;
	margin: 2rem auto;

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`
export const TopStyle = styled(SectionWShadow)`
	width: 100%;
	div {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			font-weight: 300;
		}
	}
	span {
		outline: 1px solid ${theme.colors.secondary};
		margin: 1rem 0 !important;
		max-height: 60vh;
	}
`
