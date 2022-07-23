import { RichText } from 'prismic-reactjs'
import { useState } from 'react'
import Link from 'next/link'

import { PostType } from '../types/post'
import Button from './button'
import PostPreview from './post_preview'

type props = {
	initial_limit: number
	isPreview?: boolean
	posts: PostType[]
}

export default function PostList(props: props) {
	const [limit, setLimit] = useState<number>(props.initial_limit)

	return (
		<>
			{props.posts.slice(0, limit).map((post) => {
				if (props.isPreview)
					return <PostPreview key={post.id} post={post} />

				return (
					<div className="blog_item" key={post.id}>
						<Link href={`/blog/${post.uid}`} passHref>
							<h3>{post.uid}</h3>
						</Link>
						<RichText render={post.data.summary} />
					</div>
				)
			})}
			<div id="load_list">
				{props.posts.length > limit && (
					<Button
						aria-label="load more button"
						onClick={() => setLimit(limit + 5)}
					>
						load more...
					</Button>
				)}
				{limit > props.initial_limit && (
					<Button
						aria-label="load less button"
						onClick={() => setLimit(limit - 5)}
					>
						load less...
					</Button>
				)}
			</div>
		</>
	)
}
