import PostCard from '../components/PostCard'
import { getAllPosts } from '../utils/posts'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div>
      {/* Hero header */}
      <section className="bg-navy text-white pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-serif text-sm text-gold block mb-4">Insights</span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight mb-6">
            Latest<br /><em className="italic text-gold">Writing</em>
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Thoughts on sports law, media rights, entertainment, and the business of athletics.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-text-muted">No posts yet. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  )
}
