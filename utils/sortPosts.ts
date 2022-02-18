import { PostType } from '../types/post'

export function sortPosts(posts: PostType[]): PostType[] {
	return posts.sort((a, b) => {
		if (a.data.publish_date < b.data.publish_date) return 1
		if (a.data.publish_date > b.data.publish_date) return -1
		return 0
	})
}
