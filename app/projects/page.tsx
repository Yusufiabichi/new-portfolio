'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import ContactSection from '@/components/ContactSection';

export default function ProjectsPage() {
  const categories = ["All", "Website", "Backend", "AI", "Mobile App"];
  const [hasMounted, setHasMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const allProjects = [
    {
      title: "Cylosis Real Estate Platform",
      category: "Website",
      image: "./elbildad.png",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      description: "A high-performance platform for real estate agents to manage properties and connect with buyers.",
      problem: "Local real estate agents needed a modern platform to showcase properties online beyond just social media.",
      solution: "Developed a full-featured platform with advanced search filters, virtual tours, and a custom Admin dashboard.",
      outcome: "Increased agent sales by 40% and reduced time-to-sale by 2 weeks on average.",
      liveDemo: "https://cyclosisrealestate.com.ng",
      github: "#"
    },
    {
      title: "AI Crop Diagnosis App",
      category: "AI",
      image: "https://readdy.ai/api/search-image?query=Agricultural%20technology%20mobile%20app%20interface%2C%20crop%20disease%20detection&width=600&height=400",
      tags: ["React Native", "TensorFlow", "Node.js"],
      description: "Mobile application using computer vision to diagnose plant health in real-time.",
      problem: "Farmers in rural areas lacked access to agricultural experts, leading to undiagnosed crop diseases.",
      solution: "Built a TensorFlow-powered mobile app that identifies diseases via phone camera offline.",
      outcome: "Successfully identified 12 common crop diseases with 94% accuracy during pilot testing.",
      liveDemo: "https://noma-app-landing-page.vercel.app",
      github: "#"
    },
    {
      title: "E-commerce Dashboard",
      category: "Backend",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20admin%20dashboard%20interface%2C%20sales%20analytics%20charts&width=600&height=400",
      tags: ["React", "Express.js", "PostgreSQL", "Chart.js"],
      description: "A centralized command center for online store owners to track every metric.",
      problem: "Store owners were overwhelmed by fragmented data across multiple sales channels.",
      solution: "Engineered a PostgreSQL-driven dashboard that aggregates sales, inventory, and customer behavior.",
      outcome: "Improved inventory turnover by 20% and saved owners ~10 hours/week in reporting.",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Hakassa Foundation",
      category: "Website",
      image: "https://readdy.ai/api/search-image?query=Scholarship%20application%20portal%20modern%20UI&width=600&height=400",
      tags: ["Next.js", "Firebase", "Stripe"],
      description: "A non-profit portal streamlining scholarship applications and donor engagement.",
      problem: "The foundation was manually processing hundreds of paper applications, causing massive delays.",
      solution: "Digitalized the entire process with a custom application portal and automated email notifications.",
      outcome: "Digitized 1,000+ applications in the first cycle and secured 85% donor retention.",
      liveDemo: "https://hakassa.vercel.app",
      github: "#"
    }
  ];

  if (!hasMounted) {
    // Return a shell or null to prevent mismatch
    return <div className="min-h-screen bg-white pt-24" />;
  }

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Link href="/" className="text-blue-600 font-medium mb-4 flex items-center gap-2 hover:underline">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Project Archive</h1>
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search tech or project..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === cat 
                ? "bg-gray-900 text-white shadow-md" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-gray-50 text-gray-500 px-3 py-1 rounded-full text-xs font-medium border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Overview</h4>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid gap-4">
                      <div className="bg-red-50/50 p-4 rounded-xl border-l-4 border-red-400">
                        <h5 className="text-[10px] font-bold text-red-700 uppercase mb-1">The Challenge</h5>
                        <p className="text-sm text-gray-700">{project.problem}</p>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-400">
                        <h5 className="text-[10px] font-bold text-blue-700 uppercase mb-1">My Solution</h5>
                        <p className="text-sm text-gray-700">{project.solution}</p>
                      </div>
                      <div className="bg-green-50/50 p-4 rounded-xl border-l-4 border-green-400">
                        <h5 className="text-[10px] font-bold text-green-700 uppercase mb-1">Impact & Outcome</h5>
                        <p className="text-sm text-gray-700">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto pt-6 flex gap-4 border-t border-gray-100">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      className="flex-1 bg-gray-900 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200"
                    >
                      Visit Project
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="flex-1 border-2 border-gray-100 text-gray-700 text-center py-4 rounded-xl font-bold hover:border-gray-900 transition-all"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}