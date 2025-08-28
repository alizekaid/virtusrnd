import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Virtus R&D Software Inc.</h3>
            <p className="text-gray-300 mb-3">
              Pioneering the future of mobile medical diagnostics through innovative AI solutions that empower healthcare professionals.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div>📧 <a href="mailto:info@virtusrnd.com" className="text-white hover:underline">info@virtusrnd.com</a></div>
              <div>🏢 Muğla Teknokent, 48000, Kötekli, Muğla, Türkiye</div>
              <div>🌐 <a href="http://www.virtusrnd.com" className="text-white hover:underline">www.virtusrnd.com</a></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/solutions" className="text-white hover:text-cyan-400">Allergy Testing</Link></li>
              <li><Link to="/solutions" className="text-white hover:text-cyan-400">Ptosis Assessment</Link></li>
              <li><Link to="/solutions" className="text-white hover:text-cyan-400">Medical Imaging</Link></li>
              <li><Link to="/rd" className="text-white hover:text-cyan-400">R&D Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="text-white hover:text-cyan-400">About</Link></li>
              <li><Link to="/team" className="text-white hover:text-cyan-400">Team</Link></li>
              <li><Link to="/news" className="text-white hover:text-cyan-400">News</Link></li>
              <li><Link to="/careers" className="text-white hover:text-cyan-400">Careers</Link></li>
              <li><Link to="/contact" className="text-white hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="mt-2 flex flex-col md:flex-row justify-center items-center gap-2 text-xs">
            <a href="/privacy-policy.pdf" className="hover:underline text-gray-400 mx-2" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="/gender-equity-policy.pdf" className="hover:underline text-gray-400 mx-2" target="_blank" rel="noopener noreferrer">Gender Equity Policy</a>
          </div>
          <p>&copy; 2025 Virtus R&D Software Inc. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 