const projects = [
  {
    title: 'NHL Player Value Analysis',
    description: 'Machine learning model that identifies undervalued and overvalued NHL players by comparing performance metrics to contract value. Built to support hockey operations decision-making at the San Jose Sharks.',
    tags: ['Python', 'Machine Learning', 'Data Analytics', 'NHL API'],
    link: 'https://github.com/jagjothbhullar/nhl-analytics',
    status: 'Live'
  },
  {
    title: 'Personal Portfolio',
    description: 'A React-based portfolio and blog site showcasing my work in sports and entertainment law. Built with Vite, Tailwind CSS, and deployed on GitHub Pages.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/jagjothbhullar/personal-blog',
    status: 'Live'
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
      <p className="text-gray-600 mb-8">
        A collection of projects I've worked on — from legal tech tools to personal experiments.
      </p>

      {projects.length > 0 ? (
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Projects coming soon!</p>
      )}

    </div>
  )
}
