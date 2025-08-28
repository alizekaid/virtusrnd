import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white pt-20 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-shadow fade-in-up">
                Reimagining
                <span className="text-primary-600 gradient-text"> Medical Diagnostics</span>
              </h1>
              <div className="inline-block bg-white/80 backdrop-blur border border-gray-200 rounded-xl shadow-md px-4 py-3 fade-in-up-delay-1">
                <p className="text-base lg:text-lg text-gray-700 font-medium">
                  Turning images into insights with mobile, AI-powered healthcare tools.
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed fade-in-up-delay-2">
                Virtus R&D Software Inc. develops contactless, image-based medical diagnostic tools using LiDAR, computer vision, and AI. Our first solution modernizes allergy testing with a touchless mobile app.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium fade-in-up-delay-2">
                We're building the future of diagnostics smarter, faster, greener.
              </p>
            </div>

            {/* Removed feature chips and left-side stats per design */}
          </div>

          {/* Right Content - Modern Dashboard */}
          <div className="relative fade-in-right">
            {/* Main Dashboard Container */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-bg-blue-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">VR</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Virtus R&D</h3>
                    <p className="text-xs text-gray-500">Software Inc.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Live</span>
                </div>
              </div>

              {/* Modern Terminal Interface */}
              <div className="terminal bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                <div className="terminal-header">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                  <span className="text-white text-xs ml-3">Vision Analytics Dashboard</span>
                </div>
                
                <div className="p-4 space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-white">✓</span>
                    <span className="text-white">Initializing vision model...</span>
                    <span className="text-gray-400">200ms</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-white">✓</span>
                    <span className="text-white">Loading neural network weights...</span>
                    <span className="text-gray-400">450ms</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">⚡</span>
                    <span className="text-white">Processing image data...</span>
                    <span className="text-gray-400">Real-time</span>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-30 rounded-lg p-3 my-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">🎯 Object Detection</span>
                      <span className="text-gray-400">97.3%</span>
                    </div>
                    <div className="text-xs text-white mt-1">Person detected in frame</div>
                  </div>
                  
                  <div className="bg-yellow-900 bg-opacity-30 rounded-lg p-3 my-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">🚗 Motion Analysis</span>
                      <span className="text-gray-400">94.1%</span>
                    </div>
                    <div className="text-xs text-white mt-1">Vehicle movement tracked</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white">Analysis complete</span>
                    <span className="text-gray-400">Total: 1.2s</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="text-purple-400">⟳</span>
                    <span className="text-white">Ready for next frame...</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="stat-card bg-white rounded-lg p-4 text-center pulse-stats hover:bg-blue-50 transition-colors">
                  <div className="text-2xl font-bold text-primary-600">99.8%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="stat-card bg-white rounded-lg p-4 text-center pulse-stats hover:bg-green-50 transition-colors">
                  <div className="text-2xl font-bold text-green-600">&lt;1s</div>
                  <div className="text-xs text-gray-500">Response</div>
                </div>
                <div className="stat-card bg-white rounded-lg p-4 text-center pulse-stats hover:bg-purple-50 transition-colors">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 