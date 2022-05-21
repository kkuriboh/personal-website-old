import { useContext } from 'react'
import styled from 'styled-components'

import { SectionWShadow } from '../styles/global'

type props = {
	children: React.ReactNode
}

export default function PostSection({ children }: props) {
	return <Styles>{children}</Styles>
}

const Styles = styled(SectionWShadow)`
	.block-img {
		text-indent: 0;
	}
	img {
		margin: 0;
		max-height: 60vh;
		outline: 1px solid ${({ theme }) => theme.colors.secondary};
	}
	* {
		max-width: 100%;
	}
`
