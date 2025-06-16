import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Heart, 
  Shield, 
  CheckCircle, 
  Star,
  Calendar,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { sessions } from '../data/mockData';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: 'Individual Counseling',
      description: 'Personal growth, trauma healing, and relationship preparation',
      icon: Shield,
      services: ['Individual Therapy Session', 'Trauma Recovery Program', 'Pre-relationship Counseling']
    },
    {
      title: 'Couples Counseling',
      description: 'Strengthening relationships through communication and biblical principles',
      icon: Heart,
      services: ['60-Minute Couple Counseling Session', 'Intensive Couples Retreat', 'Marriage Restoration']
    },
    {
      title: 'Premarital Services',
      description: 'Comprehensive preparation for marriage with biblical foundations',
      icon: Users,
      services: ['Premarital Counseling Package', 'Compatibility Assessment', 'Marriage Preparation Workshop']
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
            Professional Counseling
            <span className="text-gold-600 block">
              Services
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive therapy services designed to help individuals and couples build 
            stronger, healthier relationships through biblically-grounded, trauma-informed care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book-session"
              className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all duration-200 transform hover:scale-105"
            >
              Book a Session
            </a>
            <a
              href="#services-list"
              className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Our Counseling Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-gold-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-navy-800 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section id="services-list" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Available Sessions & Packages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sessions.map((session) => (
              <div 
                key={session.id} 
                className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl text-navy-800 mb-2">
                      {session.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{session.duration} minutes</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm capitalize">{session.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gold-600">
                      {formatPrice(session.price)}
                    </div>
                    <div className="text-sm text-gray-500">per session</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {session.description}
                </p>
                
                {session.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-700 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {session.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSelectedService(session.id)}
                    className="flex-1 bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    Book This Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="px-6 py-3 border border-gold-500 text-gold-600 rounded-lg font-semibold hover:bg-gold-50 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-session" className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          
          <p className="text-gray-300 mb-8 text-lg">
            Book your session using our integrated Calendly booking system. 
            Choose your preferred time and receive instant confirmation.
          </p>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-white rounded-xl p-8 text-navy-800">
            <div className="mb-6">
              <Calendar className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Schedule Your Session</h3>
              <p className="text-gray-600">
                Select your preferred date and time from our available slots
              </p>
            </div>
            
            {/* This would be replaced with actual Calendly embed */}
            <div className="bg-gray-100 rounded-lg p-12 mb-6">
              <div className="text-center text-gray-500">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Calendly Booking Widget</p>
                <p className="text-sm">
                  Integrate your Calendly embed code here for seamless booking
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center bg-green-50 text-green-700 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4 mr-2" />
                Instant Confirmation
              </div>
              <div className="flex items-center justify-center bg-blue-50 text-blue-700 p-3 rounded-lg">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Reminders
              </div>
              <div className="flex items-center justify-center bg-purple-50 text-purple-700 p-3 rounded-lg">
                <Star className="h-4 w-4 mr-2" />
                Professional Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6">
                What to Expect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <span className="font-bold text-gold-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">
                      We begin with a comprehensive assessment to understand your unique situation, 
                      goals, and any specific concerns you'd like to address.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <span className="font-bold text-gold-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Based on your assessment, we develop a tailored approach that combines 
                      evidence-based techniques with biblical principles for your healing journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <span className="font-bold text-gold-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Regular sessions with continuous progress monitoring, resource recommendations, 
                      and between-session support through WhatsApp when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-6 text-center">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-navy-700 mb-2">
                    How long are the sessions?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Individual sessions are typically 50 minutes, while couples sessions are 60 minutes. 
                    Intensive packages may include longer sessions as needed.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-navy-700 mb-2">
                    Do you offer online sessions?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer both in-person and secure video conferencing sessions to 
                    accommodate clients across Nigeria and beyond.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-navy-700 mb-2">
                    What payment methods do you accept?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We accept bank transfers, Paystack, and Flutterwave payments. 
                    Payment is typically due at the time of booking.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">
                    Is everything confidential?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Absolutely. All sessions are completely confidential and follow 
                    professional ethical guidelines for therapeutic practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;