import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram,
  Send,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
            Get in
            <span className="text-gold-600 block">
              Touch
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to take the first step towards healing? We're here to support you 
            on your journey to healthier relationships and personal growth.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-green-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Book a Session</option>
                      <option value="product">Product Support</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gold-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-800 mb-1">Email</h3>
                      <a 
                        href="mailto:hello@rtwvacademy.com"
                        className="text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        hello@rtwvacademy.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gold-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-800 mb-1">Phone</h3>
                      <a 
                        href="tel:+2348123456789"
                        className="text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        +234 812 345 6789
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Mon-Fri, 9AM-6PM WAT
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gold-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-800 mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/2348123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        +234 812 345 6789
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Join our community of 2,000+ members
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gold-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy-800 mb-1">Location</h3>
                      <p className="text-gray-600">
                        Lagos, Nigeria
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Online sessions available nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-navy-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-gold-600 mr-3" />
                  <h3 className="font-semibold text-xl text-navy-800">Office Hours</h3>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-navy-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-navy-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-navy-800 font-medium">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gold-50 rounded-lg">
                  <p className="text-sm text-gold-800">
                    <strong>Emergency Support:</strong> For urgent matters, 
                    please contact us via WhatsApp for faster response.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-xl text-navy-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/rtwvacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/2348123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Stay connected for daily relationship tips and inspiration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy-800 mb-3">
                How quickly can I book a session?
              </h3>
              <p className="text-gray-600 text-sm">
                We typically have availability within 2-3 days. For urgent matters, 
                please contact us directly via WhatsApp for priority scheduling.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy-800 mb-3">
                Do you offer online sessions?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We provide secure video conferencing sessions for clients 
                anywhere in Nigeria and internationally.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy-800 mb-3">
                What are your payment options?
              </h3>
              <p className="text-gray-600 text-sm">
                We accept bank transfers, Paystack, Flutterwave, and other 
                secure Nigerian payment methods for your convenience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-navy-800 mb-3">
                Is my information kept confidential?
              </h3>
              <p className="text-gray-600 text-sm">
                Absolutely. All sessions and communications are completely 
                confidential and follow professional ethical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;