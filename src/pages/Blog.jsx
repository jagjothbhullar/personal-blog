import PostCard from '../components/PostCard'
import { getAllPosts } from '../utils/posts'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Insights</h1>
      <p className="text-gray-600 mb-8">
        Thoughts on sports law, media rights, entertainment, and the business of athletics.
      </p>
      {posts.length > 0 ? (
        posts.map(post => <PostCard key={post.slug} post={post} />)
      ) : (
        <p className="text-gray-500">No posts yet. Check back soon!</p>
      )}
    </div>
  )
}
