// Import all markdown files from the posts directory
const postFiles = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatterBlock = match[1]
  const body = content.slice(match[0].length).trim()

  const data = {}
  frontmatterBlock.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim()
      // Remove quotes if present
      data[key.trim()] = value.replace(/^["']|["']$/g, '')
    }
  })

  return { data, content: body }
}

// Get all posts sorted by date
export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, content]) => {
    const { data, content: body } = parseFrontmatter(content)
    const slug = path.split('/').pop().replace('.md', '')

    return {
      slug: data.slug || slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content: body
    }
  })

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get a single post by slug
export function getPostBySlug(slug) {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}
