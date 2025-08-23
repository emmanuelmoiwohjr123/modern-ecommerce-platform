import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Bell, Globe } from 'lucide-react';

const Header = ({ cartItems = 0 }: { cartItems?: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-yellow-400 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Commerce</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm xl:text-base font-medium transition-colors relative group">
              Portfolios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm xl:text-base font-medium transition-colors relative group">
              Sell All
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm xl:text-base font-medium transition-colors relative group">
              Payments
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm xl:text-base font-medium transition-colors relative group">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-6 xl:mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 shadow-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 border border-gray-200 rounded text-xs font-sans font-medium text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors"
            >
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            {/* Notifications - Hidden on mobile */}
            <button className="hidden sm:block text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors relative">
              <Bell className="h-5 w-5 lg:h-6 lg:w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center text-[10px] lg:text-xs">
                3
              </span>
            </button>
            
            {/* Language Toggle - Hidden on small screens */}
            <button className="hidden md:block text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors">
              <Globe className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
            
            <button className="hidden sm:block text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors">
              <User className="h-6 w-6" />
            </button>
            
            <button className="relative text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs animate-pulse">
                  {cartItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-700 p-2"
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 shadow-sm"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-yellow-500">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-yellow-400">
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-3 text-base font-medium rounded-lg hover:bg-yellow-300 transition-colors">
                Portfolios
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-3 text-base font-medium rounded-lg hover:bg-yellow-300 transition-colors">
                Sell All
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-3 text-base font-medium rounded-lg hover:bg-yellow-300 transition-colors">
                Payments
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-3 text-base font-medium rounded-lg hover:bg-yellow-300 transition-colors">
                Support
              </a>
              
              <div className="border-t border-yellow-500 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-gray-900 font-medium">Account & More</span>
                </div>
                <div className="flex items-center space-x-4 px-3 py-2">
                  <button className="text-gray-900 hover:text-gray-700 p-2 rounded-lg hover:bg-yellow-300 transition-colors">
                    <Bell className="h-6 w-6" />
                  </button>
                  <button className="text-gray-900 hover:text-gray-700 p-2 rounded-lg hover:bg-yellow-300 transition-colors">
                    <Globe className="h-6 w-6" />
                  </button>
                  <button className="text-gray-900 hover:text-gray-700 p-2 rounded-lg hover:bg-yellow-300 transition-colors">
                  <User className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;