import { Html, Head, NextScript, Main } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
