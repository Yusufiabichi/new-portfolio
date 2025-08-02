
'use client';

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%20setup%2C%20geometric%20shapes%20in%20background%2C%20soft%20lighting%2C%20professional%20developer%20environment%2C%20light%20colors%2C%20abstract%20tech%20elements%2C%20modern%20office%20aesthetic%2C%20clean%20white%20and%20blue%20tones%2C%20sophisticated%20design%20atmosphere&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Yusuf</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            I craft scalable web applications using modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProjects}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors font-medium"
            >
              View Projects
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white cursor-pointer whitespace-nowrap transition-all font-medium">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}