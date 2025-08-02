'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real Estate Platform",
      image: "https://readdy.ai/api/search-image?query=Modern%20real%20estate%20website%20interface%20on%20laptop%20screen%2C%20clean%20property%20listings%2C%20professional%20real%20estate%20platform%20design%2C%20property%20photos%2C%20search%20filters%2C%20modern%20UI%2FUX%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=realestate-project&orientation=landscape",
      tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      description: "Built a comprehensive real estate platform with property listings, virtual tours, and payment integration.",
      problem: "Local real estate agents needed a modern platform to showcase properties online",
      solution: "Developed a full-featured platform with advanced search and payment processing",
      outcome: "Increased agent sales by 40% and reduced time-to-sale by 2 weeks",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "AI Crop Diagnosis App",
      image: "https://readdy.ai/api/search-image?query=Agricultural%20technology%20mobile%20app%20interface%2C%20crop%20disease%20detection%2C%20AI%20diagnosis%20system%2C%20green%20plants%2C%20modern%20farming%20technology%2C%20clean%20mobile%20UI%20design%2C%20agricultural%20innovation&width=600&height=400&seq=crop-ai-project&orientation=landscape",
      tags: ["React", "Node.js", "TensorFlow", "MongoDB"],
      description: "Created an AI-powered application that helps farmers identify and treat crop diseases using image recognition.",
      problem: "Farmers struggled to quickly identify crop diseases leading to significant losses",
      solution: "Built an AI system that analyzes crop photos and provides instant diagnosis",
      outcome: "Achieved 95% accuracy rate with 1000+ active users saving $50K+ in crop losses",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "E-commerce Dashboard",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20admin%20dashboard%20interface%2C%20sales%20analytics%20charts%2C%20inventory%20management%2C%20clean%20data%20visualization%2C%20professional%20business%20dashboard%20design%2C%20graphs%20and%20metrics&width=600&height=400&seq=ecommerce-dashboard&orientation=landscape",
      tags: ["React", "Express.js", "PostgreSQL", "Chart.js"],
      description: "Developed a comprehensive admin dashboard for e-commerce businesses with real-time analytics and inventory management.",
      problem: "E-commerce businesses needed better insights into their sales and inventory data",
      solution: "Created a real-time dashboard with advanced analytics and automated reporting",
      outcome: "Helped businesses increase efficiency by 30% and reduce inventory costs by 20%",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management SaaS",
      image: "https://readdy.ai/api/search-image?query=Project%20management%20software%20interface%2C%20task%20boards%2C%20team%20collaboration%20tools%2C%20modern%20SaaS%20application%20design%2C%20productivity%20dashboard%2C%20clean%20user%20interface%2C%20professional%20workflow%20management&width=600&height=400&seq=task-management&orientation=landscape",
      tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
      description: "Built a collaborative task management platform with team features and subscription billing.",
      problem: "Small teams needed an affordable, feature-rich project management solution",
      solution: "Developed a SaaS platform with real-time collaboration and flexible pricing",
      outcome: "Acquired 500+ teams in first 6 months with 85% retention rate",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work building scalable web applications that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6 text-gray-700">
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Outcome:</strong> {project.outcome}</p>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveDemo}
                    className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors font-medium"
                  >
                    <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-900 hover:text-gray-900 cursor-pointer whitespace-nowrap transition-all font-medium"
                  >
                    <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}