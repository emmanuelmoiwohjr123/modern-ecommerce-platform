import React from 'react';
import { ShoppingCart, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                E-commerce
                <br />
                <span className="text-yellow-400">provides</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Think big you like catch ideally over all your year extremely focused on sunrise.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Explore Hub
              </button>
              
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Play className="h-5 w-5 text-gray-900 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right side - Shopping Cart Illustration */}
          <div className="flex items-center justify-center relative">
            <div className="relative">
              {/* Large yellow circle background */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-20"></div>
              
              {/* Shopping cart illustration */}
              <div className="relative z-10">
                <div className="w-64 h-64 flex items-center justify-center">
                  <ShoppingCart className="w-32 h-32 text-white stroke-1" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute top-32 left-0 w-3 h-3 bg-white rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;