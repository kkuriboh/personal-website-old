import styled from 'styled-components'

import { SectionWShadow } from '../styles/global'

type props = {
	children: React.ReactNode
}

export default function PostSection({ children }: props) {
	return <Styles>{children}</Styles>
}

const Styles = styled(SectionWShadow)`
	align-items: flex-start;
	h3 {
		font-size: 1.4rem;
	}
	// change it to code
	pre {
		margin: 0 auto;
		overflow-x: scroll;
		outline: 1px solid ${({ theme }) => theme.colors.secondary};
		color: #0d0d0d;
	}
	code {
		color: unset;
		margin: 0;
	}
	.block-img {
		margin: 0 auto;
		text-indent: 0;
	}
	img {
		max-height: 60vh;
		outline: 1px solid ${({ theme }) => theme.colors.secondary};
	}
	* {
		max-width: 100%;
		margin: 0.4rem 0;
	}
`
