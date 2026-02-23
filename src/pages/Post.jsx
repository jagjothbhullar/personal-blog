import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../utils/posts'

export default function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="bg-cream min-h-screen pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-serif text-3xl text-navy mb-4">Post Not Found</h1>
          <p className="text-text-muted mb-6">
            Sorry, the post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="text-gold hover:opacity-70 transition-opacity">
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Post header */}
      <section className="bg-navy text-white pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <Link
            to="/blog"
            className="text-gold text-sm hover:opacity-70 transition-opacity inline-block mb-8"
          >
            &larr; Back to all posts
          </Link>
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-4">
            {post.date}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post body */}
      <section className="bg-cream py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="prose-custom">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  )
}
