'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Miftah Edu-Trade Hub - Global Trade & Education Platform",
      image: "./miftah2.png",
      tags: ["React.js", "Express", "MySQL", "Tailwind CSS"],
      description: "Corporate website for a firm offering import/export, education consulting, visa, and travel services.",
      problem: "Clients lacked a central platform to discover and request multiple international services.",
      solution: "Designed a structured website showcasing services, processes, and contact channels.",
      outcome: "Improved online visibility and credibility for attracting global clients and partners.",
      liveDemo: "https://miftahedutradehub.com/",
      github: "https://github.com/Yusufiabichi/Miftahedutradehub2.git"
    },
    {
      title: "YM4SDGs - Youth Leadership & Sustainability Platform",
      image: "./ym4sdgs.png",
      tags: ["SDGs", "React.js", "Tailwind CSS", "Supabase"],
      description: "Website for a youth-led organization promoting leadership and action on the UN Sustainable Development Goals.",
      problem: "Young change-makers lacked a central platform to collaborate and showcase SDG initiatives.",
      solution: "Built an informative site highlighting programs, events, and opportunities for youth engagement.",
      outcome: "Strengthened global visibility and participation in sustainability projects and leadership programs.",
      liveDemo: "https://ym4sdgs.org/",
      github: "https://github.com/Yusufiabichi/YM4SDGs.git"
    },
    {
      title: "NomaApp - AI Crop Disease Diagnosis",
      image: "./nomaapp.png",
      tags: ["AI", "Computer Vision", "Mobile App", "Node.js", "MongoDB"],
      description: "AI mobile app that diagnoses crop diseases from leaf images and recommends treatments.",
      problem: "Farmers lack quick access to experts, causing delayed diagnosis and crop losses.",
      solution: "Built an AI-powered offline-capable app for instant plant disease detection.",
      outcome: "Helps farmers take early action to protect yields and reduce losses.",
      liveDemo: "https://nomaapp.com.ng/",
      github: "https://github.com/Yusufiabichi/noma-app-ai.git"
    },
    {
      title: "DYAM Natural Water Charity & Distribution Platform",
      image: "./dyam.png",
      tags: ["Node.js", "Express", "MySQL", "Paystack", "React", "Tailwind CSS"],
      description: "Full-stack platform for managing charity donations and free water distribution.",
      problem: "Manual processes made it difficult to track donations, sponsors, and distribution activities.",
      solution: "Built a secure web system with Paystack payments, automated tracking, and admin dashboard.",
      outcome: "Streamlined charity operations with transparent donations and efficient sponsor management.",
      liveDemo: "https://dyamnaturalwater.com.ng",
      github: "https://github.com/Yusufiabichi/Dyam-water.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
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
                    target="_blank"
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