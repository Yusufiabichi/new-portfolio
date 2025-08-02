
'use client';

import { useState } from 'react';

export default function ProjectsManager() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Real Estate Platform",
      description: "Built a comprehensive real estate platform with property listings, virtual tours, and payment integration.",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "https://readdy.ai/api/search-image?query=Modern%20real%20estate%20website%20interface%20on%20laptop%20screen%2C%20clean%20property%20listings%2C%20professional%20real%20estate%20platform%20design%2C%20property%20photos%2C%20search%20filters%2C%20modern%20UI%2FUX%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=realestate-project&orientation=landscape",
      liveDemo: "#",
      github: "#",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "AI Crop Diagnosis App",
      description: "Created an AI-powered application that helps farmers identify and treat crop diseases using image recognition.",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
      image: "https://readdy.ai/api/search-image?query=Agricultural%20technology%20mobile%20app%20interface%2C%20crop%20disease%20detection%2C%20AI%20diagnosis%20system%2C%20green%20plants%2C%20modern%20farming%20technology%2C%20clean%20mobile%20UI%20design%2C%20agricultural%20innovation&width=600&height=400&seq=crop-ai-project&orientation=landscape",
      liveDemo: "#",
      github: "#",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "Developed a comprehensive admin dashboard for e-commerce businesses with real-time analytics and inventory management.",
      technologies: ["React", "Express.js", "PostgreSQL", "Chart.js"],
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20admin%20dashboard%20interface%2C%20sales%20analytics%20charts%2C%20inventory%20management%2C%20clean%20data%20visualization%2C%20professional%20business%20dashboard%20design%2C%20graphs%20and%20metrics&width=600&height=400&seq=ecommerce-dashboard&orientation=landscape",
      liveDemo: "#",
      github: "#",
      featured: true,
      status: "completed"
    },
    {
      id: 4,
      title: "Task Management SaaS",
      description: "Built a collaborative task management platform with team features and subscription billing.",
      technologies: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
      image: "https://readdy.ai/api/search-image?query=Project%20management%20software%20interface%2C%20task%20boards%2C%20team%20collaboration%20tools%2C%20modern%20SaaS%20application%20design%2C%20productivity%20dashboard%2C%20clean%20user%20interface%2C%20professional%20workflow%20management&width=600&height=400&seq=task-management&orientation=landscape",
      liveDemo: "#",
      github: "#",
      featured: true,
      status: "completed"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    liveDemo: '',
    github: '',
    featured: false,
    status: 'completed'
  });

  const openModal = (project?: any) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies.join(', '),
        image: project.image,
        liveDemo: project.liveDemo,
        github: project.github,
        featured: project.featured,
        status: project.status
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        technologies: '',
        image: '',
        liveDemo: '',
        github: '',
        featured: false,
        status: 'completed'
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      id: editingProject ? editingProject.id : Date.now()
    };

    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? projectData : p));
    } else {
      setProjects([...projects, projectData]);
    }

    closeModal();
  };

  const deleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects Management</h2>
          <p className="text-gray-600 mt-1">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors font-medium flex items-center gap-2"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
          Add New Project
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover object-top"
            />
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                {project.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(project)}
                  className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-100 cursor-pointer whitespace-nowrap transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded text-sm hover:bg-red-100 cursor-pointer whitespace-nowrap transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button
                onClick={closeModal}
                className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer flex items-center justify-center"
              >
                <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.technologies}
                    onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                    placeholder="React, Next.js, MongoDB"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Live Demo URL
                    </label>
                    <input
                      type="url"
                      value={formData.liveDemo}
                      onChange={(e) => setFormData({ ...formData, liveDemo: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Featured Project</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors font-medium"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
