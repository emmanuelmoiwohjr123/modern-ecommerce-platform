import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = ({ cartItems = 0 }: { cartItems?: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Commerce</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
              Portfolios
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
              Sell All
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
              Payments
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors">
              Support
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="relative text-gray-900 hover:text-gray-700 p-2 rounded-lg transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-700 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-yellow-400">
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Portfolios
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Sell All
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Payments
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 text-base font-medium">
                Support
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="text-gray-900 hover:text-gray-700 p-2">
                  <User className="h-6 w-6" />
                </button>
                <button className="relative text-gray-900 hover:text-gray-700 p-2">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;