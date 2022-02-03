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
	content1: RichTextBlock[]
	content2: RichTextBlock[]
	content3: RichTextBlock[]
}
export type PostType = {
	id: string
	uid: string
	data: PostDataType
}
