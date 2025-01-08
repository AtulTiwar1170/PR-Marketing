import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, Star } from 'lucide-react';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Credibility", "Trust", "Excellence", "Results"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Animated heading using CSS animations */}
              <h1 
                className="text-5xl md:text-6xl font-bold text-slate-800 animate-slideUp"
                style={{
                  opacity: 0,
                  animation: 'slideUp 1s ease-out forwards'
                }}
              >
                Building PR Solutions
              </h1>
              <h2 
                className="text-5xl md:text-6xl font-bold text-blue-600"
                style={{
                  opacity: 0,
                  animation: 'slideUp 1s ease-out 0.3s forwards'
                }}
              >
                That Deliver
              </h2>
            </div>

            {/* Animated description */}
            <p className="text-xl text-slate-600">
              We specialize in delivering{' '}
              <span 
                className="inline-block font-semibold text-blue-600"
                style={{
                  opacity: 0,
                  animation: 'fadeIn 0.5s ease-out forwards'
                }}
              >
                {words[wordIndex]}
              </span>
              <br />to businesses worldwide.
            </p>

            {/* Trust badges */}
            <div className="flex gap-8 py-6">
              {[
                { icon: <Shield className="w-6 h-6 text-blue-600" />, text: "Trusted Service" },
                { icon: <Star className="w-6 h-6 text-blue-600" />, text: "5-Star Rated" },
                { icon: <CheckCircle className="w-6 h-6 text-blue-600" />, text: "Verified Results" }
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-slate-700"
                  style={{
                    animation: `float 3s ease-in-out ${index * 0.3}s infinite`
                  }}
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "500+", label: "Projects Completed" },
              { value: "10+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out ${index * 0.2}s forwards`
                }}
              >
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;