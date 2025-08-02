'use client';

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "HTML5", icon: "ri-html5-line", usage: "Used in all web projects" },
        { name: "CSS3", icon: "ri-css3-line", usage: "Styling and animations" },
        { name: "JavaScript", icon: "ri-javascript-line", usage: "Core programming language" },
        { name: "React", icon: "ri-reactjs-line", usage: "Used in Real Estate Platform" },
        { name: "Next.js", icon: "ri-nextjs-line", usage: "Used in AI Crop Diagnosis App" },
        { name: "Tailwind CSS", icon: "ri-tailwind-css-line", usage: "Used in Task Management SaaS" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "ri-nodejs-line", usage: "Server-side development" },
        { name: "Express.js", icon: "ri-server-line", usage: "Used in E-commerce Dashboard" },
        { name: "MongoDB", icon: "ri-database-2-line", usage: "Used in Real Estate Platform" },
        { name: "PostgreSQL", icon: "ri-database-line", usage: "Used in E-commerce Dashboard" },
        { name: "Firebase", icon: "ri-firebase-line", usage: "Used in Task Management SaaS" },
        { name: "Git", icon: "ri-git-branch-line", usage: "Version control for all projects" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {skillGroup.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="group relative bg-gray-50 rounded-xl p-6 hover:bg-blue-50 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300 mb-4">
                        <i className={`${tech.icon} text-2xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300`}></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tech.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["API Integration", "Payment Processing", "Authentication", "Database Design", "Cloud Deployment", "Performance Optimization", "SEO", "Responsive Design"].map((skill, index) => (
              <span 
                key={index}
                className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 cursor-pointer transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}