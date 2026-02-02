import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise Resource Planning System',
      description: 'Led development of a comprehensive ERP solution serving 500+ users. Implemented microservices architecture and real-time data synchronization.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Customer Analytics Dashboard',
      description: 'Built an analytics platform processing 1M+ daily events with real-time visualization and predictive insights.',
      technologies: ['TypeScript', 'Python', 'MongoDB', 'Redis', 'D3.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Architected and developed a scalable e-commerce solution with payment integration, inventory management, and order tracking.',
      technologies: ['Next.js', 'Express', 'Stripe', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile-First Social Platform',
      description: 'Created a responsive social networking application with real-time messaging and media sharing capabilities.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS S3'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'DevOps Automation Suite',
      description: 'Developed CI/CD pipelines and automation tools that reduced deployment time by 70% and improved reliability.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Python', 'Bash'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI-Powered Content Management',
      description: 'Built a CMS with AI-driven content recommendations and automated SEO optimization features.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL', 'GraphQL'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Showcasing innovative solutions and successful project deliveries across various domains
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 gap-4">
                    <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </button>
                    <button className="p-3 bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                      <Github className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-cyan-400 rounded-full font-medium border border-blue-200 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
