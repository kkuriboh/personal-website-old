import { createContext, useEffect, useState } from 'react'
import { isServer } from './isServer'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

export type Theme = {
	colors: {
		primary: string
		secondary: string
		links: string
	}
}

type ContextType = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const defaultTheme = {
	colors: {
		primary: '#010101',
		secondary: '#f5f5f5',
		links: '#999',
	},
}

export const ThemeContext = createContext<ContextType>({
	theme: defaultTheme,
} as ContextType)

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	useEffect(() => {
		if (isServer()) return
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			setTheme({
				colors: {
					primary: '#f5f5f5',
					secondary: '#0d0d0d',
					links: '#666',
				},
			})
		}
	}, [])
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<SCThemeProvider theme={theme}>{children}</SCThemeProvider>
		</ThemeContext.Provider>
	)
}
