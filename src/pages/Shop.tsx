import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Download, 
  Star, 
  CheckCircle, 
  BookOpen,
  Play,
  FileText,
  ArrowRight
} from 'lucide-react';
import { products } from '../data/mockData';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pdf' | 'course'>('all');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.type === selectedCategory);

  const getProductIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'course':
        return Play;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
            Digital Products &
            <span className="text-gold-600 block">
              Resources
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, workbooks, and courses designed to support your 
            relationship journey with biblical wisdom and professional insights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-gold-500 text-white'
                  : 'bg-white text-gold-600 border border-gold-500 hover:bg-gold-50'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('pdf')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'pdf'
                  ? 'bg-gold-500 text-white'
                  : 'bg-white text-gold-600 border border-gold-500 hover:bg-gold-50'
              }`}
            >
              PDF Guides
            </button>
            <button
              onClick={() => setSelectedCategory('course')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'course'
                  ? 'bg-gold-500 text-white'
                  : 'bg-white text-gold-600 border border-gold-500 hover:bg-gold-50'
              }`}
            >
              Online Courses
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => {
              const IconComponent = getProductIcon(product.type);
              return (
                <div 
                  key={product.id} 
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2">
                      <IconComponent className="h-5 w-5 text-gold-600" />
                    </div>
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.type.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-2xl text-navy-800 leading-tight">
                        {product.name}
                      </h3>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-gold-600">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    {product.features && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-navy-700 mb-3">What You'll Get:</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">(4.9/5 from 50+ reviews)</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors duration-200 flex items-center justify-center">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy Now
                      </button>
                      <button className="px-6 py-3 border border-gold-500 text-gold-600 rounded-lg font-semibold hover:bg-gold-50 transition-colors duration-200 flex items-center justify-center">
                        Preview
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Instant Delivery Badge */}
                    <div className="mt-4 flex items-center justify-center bg-green-50 text-green-700 py-2 px-4 rounded-lg">
                      <Download className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Instant Digital Delivery</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">
              Why Choose Our Digital Products?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional resources designed by licensed therapists with biblical foundations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Instant Access
              </h3>
              <p className="text-gray-600 text-sm">
                Immediate download after purchase with automatic email delivery
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Expert Content
              </h3>
              <p className="text-gray-600 text-sm">
                Created by licensed therapists with years of counseling experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Practical Tools
              </h3>
              <p className="text-gray-600 text-sm">
                Actionable worksheets, exercises, and step-by-step guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-lg text-navy-800 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm">
                Used by hundreds of clients with consistently positive outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Process Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gold-50 to-primary-50 rounded-2xl p-8">
            <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6 text-center">
              Secure Checkout & Instant Delivery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gold-600">1</span>
                </div>
                <h3 className="font-semibold text-lg text-navy-800 mb-2">Choose & Pay</h3>
                <p className="text-gray-600 text-sm">
                  Select your product and complete secure payment via Paystack or Flutterwave
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gold-600">2</span>
                </div>
                <h3 className="font-semibold text-lg text-navy-800 mb-2">Instant Email</h3>
                <p className="text-gray-600 text-sm">
                  Receive your digital product immediately via email with download links
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gold-600">3</span>
                </div>
                <h3 className="font-semibold text-lg text-navy-800 mb-2">Start Learning</h3>
                <p className="text-gray-600 text-sm">
                  Access your content immediately and begin your transformation journey
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                All digital products come with a 30-day satisfaction guarantee
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-500">
                <span>• Secure Payment Processing</span>
                <span>• Instant Digital Delivery</span>
                <span>• Customer Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;