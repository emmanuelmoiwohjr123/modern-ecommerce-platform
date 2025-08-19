import React from 'react';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: (id: number) => void;
  onToggleWishlist: (id: number) => void;
  isWishlisted?: boolean;
  viewMode?: 'grid' | 'list';
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted = false,
  viewMode = 'grid'
}: ProductCardProps) => {
  const rating = 4.5; // Mock rating
  const reviews = Math.floor(Math.random() * 100) + 10; // Mock reviews
  
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-gray-50 w-full sm:w-48 h-48 sm:h-32">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Category badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                {name}
              </h3>
              
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">({reviews})</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onToggleWishlist(id)}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Heart 
                    className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                
                <button
                  onClick={() => onAddToCart(id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md flex items-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm font-medium">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Quick view button */}
        <button className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-200">
            <Eye className="w-4 h-4 text-gray-900" />
          </div>
        </button>
        
        {/* Wishlist button */}
        <button
          onClick={() => onToggleWishlist(id)}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart 
            className={`w-3 h-3 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Category badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        {/* Sale badge */}
        {Math.random() > 0.7 && (
          <div className="absolute top-2 sm:top-3 right-12 sm:right-14">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors text-sm sm:text-base">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
            </span>
            {Math.random() > 0.8 && (
              <span className="text-xs text-gray-500 line-through">
                ${(price * 1.2).toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(id)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;