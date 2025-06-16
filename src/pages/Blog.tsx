import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Heart,
  Users,
  Star
} from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const categories = [
    { name: 'All Posts', count: blogPosts.length },
    { name: 'Relationships', count: 8 },
    { name: 'Marriage', count: 12 },
    { name: 'Premarital', count: 6 },
    { name: 'Healing', count: 5 },
    { name: 'Faith', count: 10 }
  ];

  const featuredPosts = blogPosts.slice(0, 2);
  const recentPosts = blogPosts.slice(2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
            Blog &
            <span className="text-gold-600 block">
              Resources
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Insights, tips, and biblical wisdom for building healthier relationships 
            and stronger marriages. Written by licensed professionals with real-world experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <BookOpen className="h-4 w-4 text-gold-600 mr-2" />
              <span className="text-sm text-navy-700">50+ Articles</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Heart className="h-4 w-4 text-gold-600 mr-2" />
              <span className="text-sm text-navy-700">Relationship Focus</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="h-4 w-4 text-gold-600 mr-2" />
              <span className="text-sm text-navy-700">Expert Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.published_at)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-semibold text-xl text-navy-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between px-4 py-2 text-left rounded-lg hover:bg-gold-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-3">
                  Get Weekly Insights
                </h3>
                <p className="text-gold-100 mb-4 text-sm">
                  Join our newsletter for relationship tips and biblical wisdom delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-navy-800 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-gold-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold text-navy-800">
                  Recent Articles
                </h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Alphabetical</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(post.published_at)}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>3 min read</span>
                      </div>
                      
                      <h3 className="font-serif text-xl font-bold text-navy-800 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <button className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors duration-200">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Popular Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Communication
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Building better dialogue in relationships
              </p>
              <span className="text-xs text-gold-600 font-medium">12 Articles</span>
            </div>
            
            <div className="bg-gradient-to-br from-gold-50 to-primary-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Conflict Resolution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Healthy ways to handle disagreements
              </p>
              <span className="text-xs text-gold-600 font-medium">8 Articles</span>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <BookOpen className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Biblical Wisdom
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Scripture-based relationship guidance
              </p>
              <span className="text-xs text-gold-600 font-medium">15 Articles</span>
            </div>
            
            <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Star className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Personal Growth
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Individual development for better relationships
              </p>
              <span className="text-xs text-gold-600 font-medium">10 Articles</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;