import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-gold-500" />
              <span className="font-serif font-bold text-2xl">RTWV Academy</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Biblically grounded relationship coaching for healthier connections. 
              Licensed therapy services in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/rtwvacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Digital Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gold-500 transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Couples Counseling</li>
              <li>Individual Therapy</li>
              <li>Premarital Counseling</li>
              <li>Trauma-Informed Therapy</li>
              <li>Digital Courses</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-500" />
                <a 
                  href="mailto:hello@rtwvacademy.com" 
                  className="text-gray-300 hover:text-gold-500 transition-colors"
                >
                  hello@rtwvacademy.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-500" />
                <a 
                  href="tel:+2348123456789" 
                  className="text-gray-300 hover:text-gold-500 transition-colors"
                >
                  +234 812 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-gold-500" />
                <span className="text-gray-300">Join 2,000+ WhatsApp members</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-navy-700 text-center">
          <h3 className="font-serif text-2xl mb-4">Start Your Healing Journey Today</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take the first step towards healthier relationships with expert guidance rooted in faith and professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gold-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors duration-200"
            >
              Book a Session
            </Link>
            <Link
              to="/shop"
              className="border border-gold-500 text-gold-500 px-8 py-3 rounded-lg font-medium hover:bg-gold-500 hover:text-white transition-colors duration-200"
            >
              Download a Guide
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-navy-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 RTWV Academy Ltd. All rights reserved. Licensed therapy services in Nigeria.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;