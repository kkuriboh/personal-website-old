import { RichTextBlock } from 'prismic-reactjs'

export type ImageType = {
	dimensions: {
		width: number
		height: number
	}
	alt: string
	copyright: string
	url: string
}
export type ItemType = {
	content: RichTextBlock[]
}
export type BodySliceType = {
	slice_type: string
	slice_label: string
	items: ItemType[]
	primary: {}
}
export type PostDataType = {
	title: RichTextBlock[]
	publish_date: string
	summary: RichTextBlock[]
	banner: ImageType
	body: BodySliceType[]
}
export type PostType = {
	id: string
	uid: string
	data: PostDataType
}
