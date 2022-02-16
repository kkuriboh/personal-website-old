import styled from 'styled-components'
import { SectionWShadow } from '../styles/global'
import theme from '../styles/themes'

type Props = {
	children: React.ReactNode
}

export default function PostSection({ children }: Props) {
	return <Styles>{children}</Styles>
}

const Styles = styled(SectionWShadow)`
	img {
		margin: 0 auto;
		max-height: 60vh;
		outline: 1px solid ${theme.colors.secondary};
	}
	* {
		margin: 1rem 0;
	}
`
