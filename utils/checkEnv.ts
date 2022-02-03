export default function checkEnv(): boolean {
	if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN)
		return false
	return true
}
