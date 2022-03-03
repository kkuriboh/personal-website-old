import styled from 'styled-components'

export const BlogMainStyle = styled.main`
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.secondary};
	h1 {
		margin: 3rem 0;
	}

	@media screen and (max-width: 600px) {
		width: 95%;
		h1 {
			margin: 2rem 0;
		}
	}
`
