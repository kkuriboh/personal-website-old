import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import ThemeProvider from '../utils/themeContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
