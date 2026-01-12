import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../utils/posts'

export default function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          &larr; Back to all posts
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link
        to="/blog"
        className="text-blue-600 hover:text-blue-800 text-sm mb-6 inline-block"
      >
        &larr; Back to all posts
      </Link>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
      </header>
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
