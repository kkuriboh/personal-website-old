import 'styled-components'
import { default_theme } from '../utils/themeContext'

declare module 'styled-components' {
	type Theme = typeof default_theme
	export interface DefaultTheme extends Theme {}
}
