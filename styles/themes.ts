import { isServer } from '../utils/isServer'

const isDarkTheme = !isServer()
	? window.matchMedia('(prefers-color-scheme: dark)').matches
	: true

const theme = {
	colors: !isDarkTheme
		? {
				primary: '#010101',
				secondary: '#f5f5f5',
				links: '#999',
		  }
		: {
				primary: '#f5f5f5',
				secondary: '#010101',
				links: '#666',
		  },
}

export default theme
