import React from 'react';
import { Monitor, Code, Cloud, Shield, Zap, Globe, ArrowRight, CheckCircle, Brain, Network } from 'lucide-react';

const IoMarketsTech: React.FC = () => {
  const techSolutions = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, predictive analytics, and AI-powered financial insights',
      color: 'bg-purple-600'
    },
    {
      icon: Network,
      title: 'Web3 Solutions',
      description: 'Blockchain infrastructure, DeFi protocols, and decentralized applications',
      color: 'bg-teal-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for financial institutions',
      color: 'bg-blue-600'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Enterprise-grade security for financial data and transactions',
      color: 'bg-green-600'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Custom APIs and integrations for financial services',
      color: 'bg-indigo-600'
    },
    {
      icon: Zap,
      title: 'High-Performance Computing',
      description: 'Ultra-fast processing for real-time trading and analytics',
      color: 'bg-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Worldwide network infrastructure for seamless operations',
      color: 'bg-red-600'
    },
    {
      icon: Monitor,
      title: 'Trading Platforms',
      description: 'AI/ML models for financial analytics, trading algorithms, and market intelligence',
      color: 'bg-pink-600'
    }
  ];

  const features = [
    'Custom financial software development',
    'Blockchain and DeFi integrations',
    'AI/ML infrastructure deployment',
    'Regulatory compliance systems',
    'Real-time data processing',
    'Mobile application development',
    'DevOps and automation',
    '24/7 technical support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 parallax-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-gray-50/80"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-up relative z-10">
            <h1 className="text-5xl font-bold text-navy-900 mb-6">
              IoMarkets<sup className="text-xs">®</sup> Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cutting-edge technology infrastructure and solutions powering the future of financial services.
              From cloud architecture to AI implementations, we build the technology that drives innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-navy-300 text-navy-700 px-8 py-3 rounded-lg font-medium hover:bg-navy-50 transition-colors">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed specifically for financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer">
                <div className={`w-16 h-16 ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Enterprise-Grade Solutions</h2>
              <p className="text-gray-600 mb-8">
                We provide comprehensive technology solutions that meet the demanding requirements
                of financial institutions, from startups to global enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Choose IoMarkets<sup className="text-xs">®</sup>.tech?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Financial Expertise',
                    description: 'Deep understanding of financial markets and regulatory requirements'
                  },
                  {
                    title: 'Scalable Architecture',
                    description: 'Built to handle high-frequency trading and massive data volumes'
                  },
                  {
                    title: 'Security First',
                    description: 'Bank-grade security and compliance with global financial standards'
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Trusted by leading financial institutions worldwide'
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Technology?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with IoMarkets<sup className="text-xs">®</sup>.tech to build the next generation of financial services technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-400 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsTech;