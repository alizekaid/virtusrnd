import React from 'react';


const Services = () => {
  const solutions = [
    {
      img_path: "/focus/skin.png",
      title: "Skin Testing & Dermatology",
      description: "AI-assisted evaluation of skin health and conditions",
      features: [
        "Lesion analysis",
        "Inflammation",
        "Pigmentation tracking",
        "Skin-visible systemic conditions"
      ]
    },
    {
      img_path: "/focus/facial.png",
      title: "Facial & Eye Diagnostics",
      description: "Computer vision tools for facial and periocular assessment",
      features: [
        "Facial symmetry",
        "Skin texture",
        "Proportional balance",
        "Eye aesthetics",
        "Ptosis diagnosis"
      ]
    },
    {
      img_path: "/focus/postur.png",
      title: "Orthopedy & Physiotherapy",
      description: "Posture and movement analysis from video",
      features: [
        "Posture alignment",
        "Limb alignment",
        "Motion tracking"
      ]
    },
    {
      img_path: "/focus/dental.png",
      title: "Orthodontics & Jaw Assessment",
      description: "Dental-facial analysis for treatment support",
      features: [
        "Jaw symmetry",
        "Treatment monitoring",
        "Jaw positioning issues"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
            Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up-delay-1">
            Empowering medical diagnostics through intelligent tools
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 fade-in-up-delay-2">
            We develop scalable, AI-powered mobile solutions that support clinical decision-making in fields where traditional diagnostics rely on subjective or manual measurements. Our tools help doctors make faster, more consistent, and data-driven decisions — right from a tablet.
          </p>
        </div>

        <div className="mb-12 fade-in-up-delay-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center fade-in-up">Current focus areas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden card-hover ${index === 0 ? 'fade-in-up-delay-1' : index === 1 ? 'fade-in-up-delay-2' : 'fade-in-right'}`}>
                {/* Solution Content */}
                <div className="p-6">
                  <img src={solution.img_path} alt={solution.title} className="w-full h-32 object-cover mb-4 rounded-lg" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We combine AI, 2D/3D image analysis, and ethical data storage in every solution we build.
          </p>
        </div>

        {/* Bottom CTA Section */}
        
      </div>
    </section>
  );
};

export default Services; 