import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      type: 'Prize',
      title: 'First Prize at International Allergy Congress',
      excerpt: 'Our AI-powered allergy test solution received the 1st prize at the International Scientific Congress organized by the Turkish Society of Pediatric Allergy and Immunology.',
      date: '2024-01-15',
      featured: true,
      category: 'Healthcare',
      image: '🏆',
      
    },
    {
      id: 2,
      type: 'R&D Project',
      title: 'KOSGEB R&D Project Completed',
      excerpt: 'We successfully completed our national KOSGEB R&D project developing AI-based diagnostic systems.',
      date: '2024-01-10',
      featured: true,
      category: 'Technology',
      image: '🚀',
      
    },
    {
      id: 5,
      type: 'Academic Collaboration',
      title: 'University SRP Project Completed',
      excerpt: 'Bursa Uludag University-funded SRP  project has been successfully completed through strong academic–clinical collaboration.',
      date: '2024-01-09',
      featured: true,
      category: 'Technology',
      image: '🔬',
      
    },
    {
      id: 3,
      type: 'Application',
      title: 'Women TechEU Application Submitted',
      excerpt: 'We applied to the prestigious Women TechEU program to scale our AI-powered diagnostic platform across Europe.',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false,
      category: 'Project Application',
      image: '📊'
    },
    {
      id: 4,
      type: 'Industry Recognition',
      title: 'Skin Imaging Research Submitted to Q1 Journal',
      excerpt: 'Our large-scale image classification study using the ISIC dataset has been submitted to a high-impact Q1 journal.',
      date: '2024-01-08',
      readTime: '2 min read',
      featured: false,
      category: 'R&D',
      image: '📊'
    },
    {
      id: 6,
      type: 'Grants',
      title: 'KOSGEB Application Accepted',
      excerpt: 'Our KOSGEB funding application has been accepted to support next-stage development of AI-based diagnostics.',
      date: '2024-01-04',
      readTime: '1 min read',
      featured: false,
      category: 'Funding',
      image: '💼'
    },
    {
      id: 7,
      type: 'Grants',
      title: 'SRP Application Accepted',
      excerpt: 'Bursa Uludağ University SRP program proposal has been accepted to accelerate our research and development roadmap.',
      date: '2024-01-04',
      readTime: '1 min read',
      featured: false,
      category: 'Funding',
      image: '🎓'
    }
    
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-EU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Healthcare': 'bg-red-100 text-red-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Expansion': 'bg-green-100 text-green-800',
      'Events': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
            
            News & Updates
          </h2>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16 fade-in-up-delay-1">
            <div className="mb-8 flex items-baseline gap-3 fade-in-up">
              <span className="text-2xl font-bold text-gray-900">Latest News</span>
              
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <article key={news.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden card-hover ${index === 0 ? 'fade-in-up-delay-1' : 'fade-in-right'}`}>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{news.image}</div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                            {news.category}
                          </span>
                          <div className="text-sm text-gray-500 mt-1">{news.type}</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{formatDate(news.date)}</span>
                        <span>•</span>
                        <span>{news.readTime}</span>
                      </div>
                      
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div className="fade-in-up-delay-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 fade-in-up">Recent Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularNews.map((news, index) => (
              <article key={news.id} className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden card-hover ${index % 2 === 0 ? 'fade-in-up-delay-1' : 'fade-in-up-delay-2'}`}>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{news.image}</div>
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{news.type}</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {news.title}
                  </h4>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {formatDate(news.date)}
                    </div>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        

        {/* View All News Button */}
        
      </div>
    </section>
  );
};

export default News; 