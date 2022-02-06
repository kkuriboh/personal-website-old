import { RichText } from 'prismic-reactjs'
import ReactMarkdown from 'react-markdown'

import { BodySliceType } from '../types/post'

type Props = {
	body: BodySliceType
}

export default function RichTextFilter({ body }: Props) {
	return (
		<>
			{body.items.map((item, index) => {
				const content = RichText.asText(item.content)
				if (content.slice(0, 3) === '$md') {
					return (
						<ReactMarkdown key={index}>
							{content.slice(3)}
						</ReactMarkdown>
					)
				} else {
					return <RichText key={index} render={item.content} />
				}
			})}
		</>
	)
}
