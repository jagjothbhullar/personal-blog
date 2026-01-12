import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article className="border-b border-gray-100 pb-6 mb-6 last:border-0">
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      <p className="text-gray-600">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
      >
        Read more &rarr;
      </Link>
    </article>
  )
}
