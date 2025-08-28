import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/virtuslogo.png" 
                alt="Virtus R&D Software Inc." 
                className="h-20 w-20 max-h-8 max-w-8 object-contain flex-shrink-0"
                style={{ maxHeight: '50px', maxWidth: '50px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-primary-700 hidden">Virtus Vision</span>
              <div className="text-lg font-bold text-primary-700 whitespace-nowrap">
                <span className="text-teal-600">Virtus R&D</span>
                <span className="text-gray-700 ml-2"> Software Inc.</span>
              </div>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-primary-600 transition-colors">
              Solutions
            </Link>
            <Link to="/rd" className="text-gray-700 hover:text-primary-600 transition-colors">
              R&D
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-primary-600 transition-colors">
              News
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-primary-600 transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary-600 transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                About
              </Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Solutions
              </Link>
              <Link to="/rd" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                R&D
              </Link>
              <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                News
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Blog
              </Link>
              <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Team
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Careers
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 