import React from 'react';
import { 
  Award, 
  BookOpen, 
  Heart, 
  Shield, 
  Users, 
  Star,
  PlayCircle,
  ExternalLink,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
                About 
                <span className="text-gold-600 block">
                  Boluwatife Victoria Abiodun
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Licensed therapist, certified relationship coach, and founder of RTWV Academy Ltd. 
                Dedicated to providing biblically-grounded, trauma-informed counseling that transforms 
                lives and relationships across Nigeria.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gold-100 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-gold-600 mr-2" />
                  <span className="text-gold-800 font-medium">25Under25 Award Winner</span>
                </div>
                <div className="flex items-center bg-navy-100 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-navy-600 mr-2" />
                  <span className="text-navy-800 font-medium">Licensed Therapist</span>
                </div>
                <div className="flex items-center bg-primary-100 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-primary-800 font-medium">700+ Clients Served</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Boluwatife Victoria Abiodun - Licensed Therapist and Founder"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg max-w-xs">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">RTWV Academy Ltd</div>
                  <div className="text-sm text-gray-600">Incorporated 2025</div>
                  <div className="text-xs text-gold-600 mt-1">Faith-Based Counseling Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-navy-800 mb-8 text-center">
              My Journey to Healing Others
            </h2>
            
            <div className="bg-navy-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                My path to becoming a licensed therapist began with a profound understanding that healing 
                comes not just through professional training, but through a deep integration of faith, 
                science, and compassionate care. After completing my degree in Microbiology at the 
                prestigious Covenant University, I felt called to serve others in a different capacity.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                This calling led me to pursue certification through IFIHD Academy, where I received 
                comprehensive training in therapeutic practices with a special emphasis on trauma-informed 
                care. The intersection of my scientific background and therapeutic training has given me 
                a unique perspective on healing - one that honors both the complexity of human psychology 
                and the power of faith-based approaches.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Over the past five years, I've had the privilege of walking alongside over 700 individuals 
                and couples on their healing journeys. Each story has taught me something new about 
                resilience, love, and the capacity for transformation when people are met with both 
                professional expertise and genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Education & Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-gold-600 mr-3" />
                <h3 className="font-semibold text-xl text-navy-800">Academic Foundation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Bachelor's in Microbiology</div>
                    <div className="text-sm text-gray-600">Covenant University, Nigeria</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Scientific Research Methods</div>
                    <div className="text-sm text-gray-600">Evidence-based approach foundation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-gold-600 mr-3" />
                <h3 className="font-semibold text-xl text-navy-800">Professional Training</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Licensed Therapist Certification</div>
                    <div className="text-sm text-gray-600">IFIHD Academy</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Trauma-Informed Care Specialist</div>
                    <div className="text-sm text-gray-600">Advanced certification</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Couples Therapy Specialization</div>
                    <div className="text-sm text-gray-600">Relationship dynamics expertise</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-gold-600 mr-3" />
                <h3 className="font-semibold text-xl text-navy-800">Recognition</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">25Under25 Award Winner</div>
                    <div className="text-sm text-gray-600">Excellence in young leadership</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-navy-700">Media Recognition</div>
                    <div className="text-sm text-gray-600">Featured in multiple publications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6">
                Our Mission & Approach
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-gold-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Faith-Integrated Healing</h3>
                    <p className="text-gray-600">
                      We believe that true healing addresses the whole person - mind, body, and spirit. 
                      Our approach integrates evidence-based therapeutic techniques with biblical principles 
                      to provide comprehensive care.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-gold-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Trauma-Informed Care</h3>
                    <p className="text-gray-600">
                      Understanding that past wounds affect present relationships, we use trauma-informed 
                      approaches that create safety, promote healing, and prevent re-traumatization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-gold-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-700 mb-2">Culturally Responsive</h3>
                    <p className="text-gray-600">
                      Our services are designed specifically for the Nigerian context, understanding 
                      cultural dynamics, family systems, and the unique challenges faced by our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold-50 to-primary-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4">
                  Our Impact So Far
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">700+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">2000+</div>
                  <div className="text-sm text-gray-600">Community Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Media & Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <PlayCircle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="font-semibold text-xl text-navy-800">YouTube Channel</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Weekly relationship tips, biblical counseling insights, and Q&A sessions 
                addressing common relationship challenges.
              </p>
              <a
                href="https://youtube.com/@rtwvacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
              >
                Visit Channel
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="font-semibold text-xl text-navy-800">Podcast Appearances</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Featured guest on various podcasts discussing relationships, faith, 
                mental health, and the integration of counseling with Christian values.
              </p>
              <a
                href="/blog"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
              >
                View Episodes
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                RTWV Academy Ltd
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Officially incorporated in 2025, RTWV Academy Ltd represents our commitment 
                to providing professional, licensed therapy services across Nigeria. We are 
                a faith-based counseling organization dedicated to excellence in mental health 
                care and relationship restoration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gold-500 mr-3" />
                  <span>Incorporated: January 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold-500 mr-3" />
                  <span>Location: Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gold-500 mr-3" />
                  <span>Licensed Faith-Based Counseling Services</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Our Values
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Compassionate Care</div>
                    <div className="text-sm text-gray-300">Every client is treated with dignity, respect, and genuine care.</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Biblical Foundation</div>
                    <div className="text-sm text-gray-300">All our approaches are grounded in biblical principles and wisdom.</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Professional Excellence</div>
                    <div className="text-sm text-gray-300">Maintaining the highest standards of therapeutic practice and ethics.</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Community Impact</div>
                    <div className="text-sm text-gray-300">Building stronger families and communities through healing relationships.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;