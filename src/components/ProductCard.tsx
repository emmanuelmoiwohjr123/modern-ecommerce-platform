import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: (id: number) => void;
  onToggleWishlist: (id: number) => void;
  isWishlisted?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted = false 
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist button */}
        <button
          onClick={() => onToggleWishlist(id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          
          <button
            onClick={() => onAddToCart(id)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;