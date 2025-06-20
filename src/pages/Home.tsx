import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Shield, 
  MessageCircle, 
  Instagram,
  ChevronRight,
  Star,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight mb-6">
                Biblically Grounded
                <span className="text-gold-600 block">
                  Relationship Coaching
                </span>
                <span className="text-navy-700 text-2xl md:text-3xl lg:text-4xl block mt-2">
                  for Healthier Connections
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Professional therapy services rooted in faith, helping individuals and couples 
                build stronger, God-centered relationships. Licensed, trauma-informed counseling 
                with over 700 clients served across Nigeria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Book a Session
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/shop"
                  className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-500 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  Explore Digital Guides
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Professional counselor Boluwatife Victoria Abiodun"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="h-8 w-8 text-gold-500" />
                    <div>
                      <div className="font-bold text-navy-800">25Under25</div>
                      <div className="text-sm text-gray-600">Award Winner</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">
                  Meet Boluwatife Victoria Abiodun
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Licensed therapist and certified relationship coach with a heart for healing. 
                  Graduate of Covenant University with a degree in Microbiology, certified through 
                  IFIHD Academy for therapeutic practice. Founder of RTWV Academy Ltd, serving 
                  over 700 clients across Nigeria with trauma-informed, biblically-grounded counseling.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-2xl text-gold-600">700+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-2xl text-gold-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-2xl text-gold-600">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1"
                    alt="Boluwatife Victoria Abiodun - Licensed Therapist"
                    className="rounded-xl w-64 h-80 object-cover shadow-lg"
                  />
                  <div className="absolute -top-3 -right-3 bg-gold-500 text-white rounded-full p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive counseling services designed to meet you where you are 
              and guide you toward healthier relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6 group-hover:bg-gold-200 transition-colors">
                <Shield className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-4">
                Trauma-Informed Counseling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional therapy using evidence-based approaches for healing from 
                past wounds, PTSD, and emotional trauma with compassionate care.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6 group-hover:bg-gold-200 transition-colors">
                <Heart className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-4">
                Premarital Packages
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive preparation for marriage including compatibility assessments, 
                communication training, and biblical foundations for lasting unions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-6 group-hover:bg-gold-200 transition-colors">
                <BookOpen className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-4">
                Digital Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Self-paced online learning with downloadable resources, workbooks, 
                and guided exercises for personal growth and relationship skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-8">
            Join Our Growing Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">2,000+</div>
              <div className="text-white opacity-90">WhatsApp Members</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <Instagram className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10k+</div>
              <div className="text-white opacity-90">Instagram Followers</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">700+</div>
              <div className="text-white opacity-90">Clients Helped</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <Star className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white opacity-90">Average Rating</div>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Featured Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">
              Popular Services & Resources
            </h2>
            <p className="text-lg text-gray-600">
              Get started with our most requested services and digital products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Couples Counseling */}
            <div className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <Heart className="h-8 w-8 text-gold-600" />
                <Clock className="h-5 w-5 text-gray-500" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-2">
                Couples Counseling
              </h3>
              <p className="text-gray-600 mb-4">
                60-minute sessions focused on communication, conflict resolution, and biblical principles.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold-600">₦25,000</span>
                <Link
                  to="/services"
                  className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gold-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Premarital Guide */}
            <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 text-gold-600" />
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-2">
                Premarital Workbook
              </h3>
              <p className="text-gray-600 mb-4">
                50+ pages of exercises covering communication, finances, and spiritual growth.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold-600">₦2,500</span>
                <Link
                  to="/shop"
                  className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gold-600 transition-colors"
                >
                  Download
                </Link>
              </div>
            </div>

            {/* Healing Course */}
            <div className="bg-gradient-to-br from-gold-50 to-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <Shield className="h-8 w-8 text-gold-600" />
                <Star className="h-5 w-5 text-gold-500" />
              </div>
              <h3 className="font-semibold text-xl text-navy-800 mb-2">
                Healing After Infidelity
              </h3>
              <p className="text-gray-600 mb-4">
                7-module course for couples working through betrayal with grace and restoration.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold-600">₦5,000</span>
                <Link
                  to="/shop"
                  className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gold-600 transition-colors"
                >
                  Get Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;