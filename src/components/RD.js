import React from 'react';

const RD = () => {
  const projects = [
    {
      id: 1,
      title: "Allergy Diagnosis App",
      description: "We developed a touchless mobile app that uses LiDAR and AI to evaluate skin prick test results. The system analyzes area, volume, redness, and swelling, providing a probabilistic decision support tool for doctors. The project was successfully completed through two national R&D grants and has been tested with real clinical data. It received a first prize at an international medical congress.",
      status: "Completed",
      highlights: ["LiDAR technology", "Real clinical data", "First prize winner", "National R&D grants"]
    },
    {
      id: 2,
      title: "Skin Lesion Classification App",
      description: "We previously conducted AI research on over 50,000 dermatological images (ISIC dataset) and achieved high classification accuracy even in underrepresented categories. A scientific paper from this study is currently under Q1 journal review.",
      status: "Under review & In development",
      highlights: ["50,000+ images", "High accuracy", "Q1 journal submission", "ISIC dataset"]
    },
    {
      id: 3,
      title: "Eyelid Ptosis Diagnosis App",
      description: "We are developing a mobile application to support surgical decision-making for eyelid ptosis. By using image-based AI models, we aim to replace manual ruler measurements with contactless, standardized evaluations.",
      status: "In Development",
      highlights: ["Surgical decision support", "Contactless measurement", "AI models", "Standardized evaluation"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Published':
        return 'bg-blue-100 text-blue-800';
      case 'In Development':
      case 'Under review & In development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="rd" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
            R&D 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up-delay-1">
            Pioneering research and development in medical imaging and AI diagnostics
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 card-hover ${index === 0 ? 'fade-in-up-delay-1' : index === 1 ? 'fade-in-up-delay-2' : 'fade-in-right'}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="lg:flex-1 lg:pr-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <div className="text-sm font-medium text-gray-700">{highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RD; 