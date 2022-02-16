import styled from 'styled-components'
import { SectionWShadow } from './global'

export const PostMainStyle = styled.main`
	width: 70%;
	margin: 2rem auto;
`
export const TopStyle = styled(SectionWShadow)`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	p {
		font-weight: 300;
	}
	margin-bottom: 2rem;
`
