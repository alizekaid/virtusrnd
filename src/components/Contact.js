import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up-delay-1">
            We'd love to hear from you!
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 fade-in-up-delay-2">
            Whether you are a healthcare professional, potential partner, investor, or student — feel free to get in touch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 fade-in-up-delay-1">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏢</span>
                  Address:
                </h3>
                <p className="text-gray-600 ml-11">
                  Muğla Teknokent, 48000, Kötekli, Muğla, Türkiye
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  Email:
                </h3>
                <p className="text-gray-600 ml-11">
                  <a href="mailto:info@virtusrnd.com" className="text-black hover:underline">info@virtusrnd.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🌐</span>
                  Website:
                </h3>
                <p className="text-gray-600 ml-11">
                  <a href="http://www.virtusrnd.com" className="text-black hover:underline">www.virtusrnd.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  Social Media:
                </h3>
                <div className="text-gray-600 ml-11">
                  <div className="flex flex-row items-center space-x-4">
                   
                   <a href="https://www.linkedin.com/company/virtusrnd" target="_blank" rel="noopener noreferrer">
                     <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                   </a>
                   <a href="https://www.instagram.com/virtusrnd" target="_blank" rel="noopener noreferrer">
                     <img src="instagram-1-svgrepo-com.svg" alt="Instagram" className="w-6 h-6" />
                   </a>
                   <a href="https://www.youtube.com/@virtusrnd" target="_blank" rel="noopener noreferrer">
                     <img src="youtube-color-svgrepo-com.svg" alt="YouTube" className="w-6 h-6" />
                   </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover fade-in-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 fade-in-up">Get in Touch</h3>
              <form action="mailto:info@virtusrnd.com" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 