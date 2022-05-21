import { RichTextBlock, Link } from 'prismic-reactjs'

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

export type HomeBodyType = [
	HomeHeaderType,
	HomeContentType,
	HomeEducationType,
	HeaderExperiencType
]

type HomeHeaderType = {
	primary: {
		first_name: RichTextBlock[]
		role: RichTextBlock[]
		resume: RichTextBlock[]
		profile_picture: ImageType
	}
	items: [
		{
			labelname: RichTextBlock[]
			link: Link
		}
	]
	slice_type: 'header'
}
type HomeContentType = {
	items: {
		content: RichTextBlock[]
	}[]
	slice_type: 'content'
}
type HomeEducationType = {
	items: {
		title: RichTextBlock[]
		subtitle: RichTextBlock[]
		content: RichTextBlock[]
	}[]

	slice_type: 'education'
}
type HeaderExperiencType = {
	items: [
		{
			link: Link
			title: RichTextBlock[]
			subtitle: RichTextBlock[]
			content: RichTextBlock[]
		}
	]
}
