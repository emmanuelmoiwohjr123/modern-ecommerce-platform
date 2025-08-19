import React from 'react';
import { ShoppingCart, Play, Star, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-24 xl:py-32">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>50K+ Customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>Fast Growing</span>
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                E-commerce
                <br />
                <span className="text-yellow-400">provides</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
                Discover premium products with exceptional quality. Shop with confidence and enjoy fast, secure delivery worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base">
                Explore Hub
              </button>
              
              <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                  <Play className="h-5 w-5 text-gray-900 ml-1" />
                </div>
                <span className="font-medium text-sm sm:text-base">Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 lg:pt-8 border-t border-gray-800">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">10K+</div>
                <div className="text-xs sm:text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-xs sm:text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">99%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Shopping Cart Illustration */}
          <div className="flex items-center justify-center relative order-first lg:order-last">
            <div className="relative">
              {/* Large yellow circle background */}
              <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 h-48 sm:w-80 sm:h-80 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Shopping cart illustration */}
              <div className="relative z-10">
                <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                  <ShoppingCart className="w-24 h-24 sm:w-32 sm:h-32 text-white stroke-1 hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 sm:bottom-20 left-6 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute top-20 sm:top-32 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-80 animate-bounce"></div>
              
              {/* Floating product cards */}
              <div className="absolute -top-4 -left-8 bg-white rounded-lg p-2 shadow-lg animate-float hidden sm:block">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="text-xs text-gray-600 mt-1">$29.99</div>
              </div>
              <div className="absolute -bottom-4 -right-8 bg-white rounded-lg p-2 shadow-lg animate-float-delayed hidden sm:block">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="text-xs text-gray-600 mt-1">$49.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;