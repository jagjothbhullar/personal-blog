import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article className="border-b border-black/10 pb-8 mb-8 last:border-0 group">
      <Link to={`/blog/${post.slug}`}>
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold mb-3">
          {post.date}
        </p>
        <h2 className="font-serif text-2xl font-medium text-navy group-hover:text-gold transition-colors mb-3">
          {post.title}
        </h2>
      </Link>
      <p className="text-text-muted leading-relaxed">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-gold text-sm mt-4 inline-block hover:opacity-70 transition-opacity"
      >
        Read more &rarr;
      </Link>
    </article>
  )
}
