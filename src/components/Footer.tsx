import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">Commerce</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Your premier destination for quality products and exceptional shopping experience. 
                We're committed to bringing you the best in fashion and lifestyle.
              </p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Portfolios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Sell All</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Customer Service</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm sm:text-base">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">123 Commerce Street, Business District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">support@commerce.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4 sm:mt-6">
              <h5 className="font-medium mb-3 text-sm sm:text-base">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                />
                <button className="bg-yellow-400 text-gray-900 px-3 sm:px-4 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-yellow-500 transition-colors font-medium text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Commerce. All rights reserved. Built with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-[10px] sm:text-xs">VISA</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-[10px] sm:text-xs">MC</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-[10px] sm:text-xs">AMEX</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-[10px] sm:text-xs">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;