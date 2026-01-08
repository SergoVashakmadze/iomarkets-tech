import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Code, Cloud, Shield, Zap, Globe, ArrowRight, CheckCircle, Brain, Network } from 'lucide-react';

// Floating Elements Component for hero
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated background orbs */}
    <div
      className="absolute top-1/4 left-1/4 w-96 h-96 orb-hero"
      style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
    />
    <div
      className="absolute top-1/2 right-1/4 w-80 h-80 orb-hero"
      style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)', animationDelay: '-3s' }}
    />
    <div
      className="absolute bottom-1/4 left-1/3 w-72 h-72 orb-hero"
      style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', animationDelay: '-5s' }}
    />
    <div
      className="absolute top-1/3 right-1/3 w-64 h-64 orb-hero"
      style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)', animationDelay: '-7s' }}
    />

    {/* Floating geometric shapes */}
    <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-violet-500/20 rounded-full float-elegant" style={{ animationDelay: '0s' }} />
    <div className="absolute top-[30%] right-[15%] w-6 h-6 bg-indigo-500/20 rounded-full float-medium" style={{ animationDelay: '-2s' }} />
    <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-blue-500/20 rounded-full float-fast" style={{ animationDelay: '-4s' }} />
    <div className="absolute top-[70%] right-[25%] w-5 h-5 bg-cyan-500/20 rounded-full float-elegant" style={{ animationDelay: '-1s' }} />
    <div className="absolute top-[40%] left-[70%] w-4 h-4 bg-violet-400/20 rounded-full float-medium" style={{ animationDelay: '-3s' }} />

    {/* Decorative rings */}
    <div className="absolute top-[25%] right-[10%] w-32 h-32 border border-violet-500/10 rounded-full rotate-slow" />
    <div className="absolute bottom-[20%] left-[5%] w-24 h-24 border border-indigo-500/10 rounded-full rotate-slow" style={{ animationDirection: 'reverse' }} />
  </div>
);

// Animated Wave Lines Component
const AnimatedLines = () => (
  <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradientViolet" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="url(#waveGradientViolet)"
        className="animate-pulse"
      />
    </svg>
  </div>
);

const IoMarketsTech: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const techSolutions = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, predictive analytics, and AI-powered financial insights',
      color: 'bg-violet-600'
    },
    {
      icon: Network,
      title: 'Web3 Solutions',
      description: 'Blockchain infrastructure, DeFi protocols, and decentralized applications',
      color: 'bg-indigo-600'
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
      color: 'bg-cyan-600'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Custom APIs and integrations for financial services',
      color: 'bg-violet-600'
    },
    {
      icon: Zap,
      title: 'High-Performance Computing',
      description: 'Ultra-fast processing for real-time trading and analytics',
      color: 'bg-indigo-600'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Worldwide network infrastructure for seamless operations',
      color: 'bg-blue-600'
    },
    {
      icon: Monitor,
      title: 'Trading Platforms',
      description: 'AI/ML models for financial analytics, trading algorithms, and market intelligence',
      color: 'bg-cyan-600'
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
    <div className="min-h-screen text-white relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden hero-gradient-bg"
      >
        {/* Animated Background Elements */}
        <FloatingElements />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 elegant-grid" />
        <div className="absolute inset-0 diamond-pattern" />

        {/* Animated Wave Lines */}
        <AnimatedLines />

        <motion.div
          className="container mx-auto px-6 pt-32 pb-20 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up glass-violet">
              <div className="relative">
                <span className="w-2 h-2 bg-violet-500 rounded-full block" />
                <span className="absolute inset-0 w-2 h-2 bg-violet-500 rounded-full animate-ping-violet" />
              </div>
              <span className="text-violet-300 text-sm font-medium">Technology Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1">
              IoMarkets<sup className="text-lg">®</sup>{' '}
              <span className="gradient-text-animated-violet">Technology</span>
            </h1>

            {/* Animated Tagline */}
            <p className="text-xl md:text-2xl mb-6 animate-fade-up-delay-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Where <span className="gradient-text-animated-violet font-semibold">Innovation</span> meets{' '}
              <span className="gradient-text-animated-indigo font-semibold">Power</span> &{' '}
              <span className="gradient-text-animated-blue font-semibold">Speed</span> meets{' '}
              <span className="gradient-text-animated-cyan font-semibold">Scale</span>
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-up-delay-3">
              Cutting-edge technology infrastructure and solutions powering the future of financial services.
              From cloud architecture to AI implementations, we build the technology that drives innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-4">
              <button className="group bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-violet-500/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl font-medium transition-all duration-300 glass-violet hover:bg-violet-500/20">
                View Solutions
              </button>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-sm font-medium text-gray-400">Scroll to explore</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#8B5CF6]/60 flex justify-center pt-2 shadow-lg shadow-[#8B5CF6]/20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#A78BFA]"
            />
          </div>
        </motion.div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gradient-to-b from-[#0F0D17] to-[#16131F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed specifically for financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSolutions.map((solution, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:bg-violet-500/10 transition-all duration-300 group cursor-pointer border border-violet-500/20 hover:border-violet-500/40"
              >
                <div className={`w-14 h-14 ${solution.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#16131F]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Solutions</h2>
              <p className="text-gray-400 mb-8 text-lg">
                We provide comprehensive technology solutions that meet the demanding requirements
                of financial institutions, from startups to global enterprises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-violet-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose IoMarkets<sup className="text-xs">®</sup>.tech?</h3>
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
                  <div key={index} className="border-l-2 border-violet-500 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-bg" />
        <div className="absolute inset-0 elegant-grid" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="gradient-text-animated-violet">Financial Technology</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Partner with IoMarkets<sup className="text-xs">®</sup>.tech to build the next generation of financial services technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-violet-500/25">
                Schedule Consultation
              </button>
              <button className="glass-violet px-8 py-4 rounded-xl font-medium hover:bg-violet-500/20 transition-all duration-300">
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
