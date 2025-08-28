import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
          About Virtus R&D Software Inc.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up-delay-1">
            Pioneering the future of mobile medical diagnostics through innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up-delay-1">
            <div className="space-y-6">
              
              <p className="text-gray-600 leading-relaxed">
                Founded in Türkiye in 2024 by academic researchers, Virtus R&D Software Inc. is a woman-led deep tech startup creating medical imaging solutions that empower healthcare professionals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We build mobile diagnostic tools in areas that lack standard, scalable, and digital solutions, such as allergy tests, eye assessments, orthopedics, skin conditions, and facial symmetry analysis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to modernize outdated diagnostic workflows by replacing manual, contact-based methods with AI-powered, ethical, and eco-conscious alternatives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We collaborate with university hospitals, clinicians, and students to develop impactful and research-backed technologies. With a growing team of founders, advisors, and future-oriented interns, we aim to become a European leader in mobile diagnostics.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                
               
              </div>
            </div>
          </div>

          {/* Right Content - Team & Values */}
          <div className="space-y-8 fade-in-right">
            {/* Leadership Section */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover">
              <div className="mb-6">
                <p className="text-sm text-gray-500 font-medium">Founders</p>
                
              </div>
              <div className="space-y-8">
                {/* Zeynep */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/team/zeynep-eren.jpg" 
                        alt="Zeynep Filiz Eren"
                        className="w-full h-full object-cover"
                        style={{transform: 'scale(1.5)'}}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span className="text-white font-bold hidden">ZE</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Zeynep Filiz Eren</h4>
                      <p className="text-primary-600">CEO & Co-founder</p>
                      
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 md:pl-4">Leads clinical partnerships, project development, and strategic growth in digital health.</p>
                </div>

                {/* Hasan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/team/hasan-ozkan.JPG" 
                        alt="Hasan Ali Özkan"
                        className="w-full h-full object-cover"
                        style={{transform: 'scale(1.5)'}}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span className="text-white font-bold hidden">HO</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hasan Ali Özkan</h4>
                      <p className="text-blue-600">CTO & Co-founder</p>
                      
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 md:pl-4">Leads AI development, software architecture, and the technical direction of mobile diagnostics.</p>
                </div>
              </div>
            </div>

            {/* Partners Section */}
       
            
          </div>
        </div>
             <div className="bg-white  p-8  mt-16 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partners</h3>
              <div className="flex flex-row justify-center items-center space-x-8">
                <img src="/uutf.png" alt="UUTF" className="" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', maxWidth: '160px', maxHeight: '160px' }} />
                <img src="/uubap.png" alt="UUBAP" className="" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', maxWidth: '160px', maxHeight: '160px' }} />
                <img src="/mskü.jpg" alt="MSKÜ" className="" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', maxWidth: '160px', maxHeight: '160px' }} />
                <img src="/teknopark.jpeg" alt="Teknopark" className="" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', maxWidth: '160px', maxHeight: '160px' }} />
                <img src="/kosgeb.jpg" alt="KOSGEB" className="" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px', maxWidth: '160px', maxHeight: '160px' }} />

              </div>
            </div>
      </div>
    </section>
  );
};

export default About; 