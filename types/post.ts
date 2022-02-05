import { RichTextBlock } from 'prismic-reactjs'

type DataType = {
	type: string
	text: string
	spans: []
}
export type PostDataType = {
	title: RichTextBlock[]
	publish_date: string
	summary: RichTextBlock[]
	banner: {
		dimensions: {
			width: number
			height: number
		}
		alt: string
		copyright: string
		url: string
	}
	content1: RichTextBlock[]
	content2: RichTextBlock[]
	content3: RichTextBlock[]
	content4: RichTextBlock[]
	content5: RichTextBlock[]
}
export type PostType = {
	id: string
	uid: string
	data: PostDataType
}
