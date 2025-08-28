import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    // Check if we're in development or production
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    if (isDevelopment) {
      // In development, redirect to Docusaurus dev server
      window.location.href = 'http://localhost:3001/blog/';
    } else {
      // In production, redirect to the built blog files
      window.location.href = '/blog/';
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Blog</h2>
        <p className="text-gray-600">Redirecting to our blog...</p>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">If you're not redirected automatically,</p>
          <button 
            onClick={() => {
              const isDevelopment = process.env.NODE_ENV === 'development';
              window.location.href = isDevelopment ? 'http://localhost:3001/blog/' : '/blog/';
            }}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            click here to continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
