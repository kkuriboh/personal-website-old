import Link from 'next/link'

export default function Blog() {
	return (
		<div>
			<h1 style={{ color: 'white' }}>Blog</h1>
			<Link href={'/blog/test'}>aasdasd</Link>
		</div>
	)
}
