import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const opportunities = [
    "AI & Computer Vision Researchers",
    
    "Medical Professionals & Clinical Advisors",
    
    "Mobile Developer",
    "Full Stack Developer",
    
    "Marketing & Business Development Experts",
    "Students interested in healthcare innovation"
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
            Careers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up-delay-1">
            Join us to build the future of digital diagnostics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12 card-hover fade-in-up-delay-1">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 fade-in-up">
              We're always looking for passionate, curious, and driven individuals eager to shape the future of healthcare.
            </p>

            <div className="mb-8 fade-in-up-delay-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 fade-in-up">Opportunities for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className={`flex items-center space-x-3 bg-white rounded-lg p-4 card-hover ${index % 2 === 0 ? 'fade-in-up-delay-1' : 'fade-in-up-delay-2'}`}>
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're a student, a researcher, or an experienced professional, we welcome you to contribute to real-world impact.
            </p>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                <span>📧</span>
                <span>Contact us at team@virtusrnd.com</span>
              </Link>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default Careers; 