import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	:root {
		--background: #0d0d0d;
		--foreground: #f5f5f5;
		--links: #999;
	}

	html,
	body {
		font-family: 'Titillium Web', sans-serif;
	}

	body {
		background-color: var(--background);
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: var(--links);
		margin: 0 0.5rem;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		text-decoration: underline;
	}

	p {
		text-indent: 1rem;
	}
	ul {
		padding: 0 2.85rem;
	}

`

export default GlobalStyle
