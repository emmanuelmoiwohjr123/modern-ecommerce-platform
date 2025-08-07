import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductGrid = ({ onAddToCart }: { onAddToCart: (id: number) => void }) => {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    { id: 1, name: "Premium Denim Jacket", price: 129.99, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg", category: "Jackets" },
    { id: 2, name: "Minimalist Logo Tee", price: 34.99, image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg", category: "T-Shirts" },
    { id: 3, name: "Essential Plus Collection", price: 89.99, image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg", category: "Sets" },
    { id: 4, name: "Vintage Baseball Cap", price: 24.99, image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg", category: "Accessories" },
    { id: 5, name: "The Blue Collar Shirt", price: 79.99, image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg", category: "Shirts" },
    { id: 6, name: "Premium Cashmere Sweater", price: 199.99, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg", category: "Sweaters" },
    { id: 7, name: "Relaxed Summer Tee", price: 29.99, image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg", category: "T-Shirts" },
    { id: 8, name: "Statement Crewneck", price: 64.99, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg", category: "Sweaters" },
    { id: 9, name: "Luxury Canvas Tote", price: 149.99, image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg", category: "Bags" },
    { id: 10, name: "Comfort Fit Jeans", price: 89.99, image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg", category: "Jeans" },
    { id: 11, name: "Suede Desert Boots", price: 179.99, image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg", category: "Shoes" },
    { id: 12, name: "Executive Brief Bag", price: 299.99, image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg", category: "Bags" },
  ];

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleToggleWishlist = (id: number) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(id)) {
        newWishlist.delete(id);
      } else {
        newWishlist.add(id);
      }
      return newWishlist;
    });
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for the modern lifestyle
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-gray-900 shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={wishlist.has(product.id)}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;