import React, { useState } from 'react';
import { Filter, Grid, List, SortAsc } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [showFilters, setShowFilters] = useState(false);

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

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our curated collection of premium products designed for the modern lifestyle
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border"
            >
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SortAsc className="h-4 w-4 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-yellow-400 text-gray-900 shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Price Range Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 lg:hidden">
              <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm text-gray-600 min-w-[60px]">
                  $0 - ${priceRange[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6' 
            : 'space-y-4'
        }`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={onAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.has(product.id)}
                viewMode={viewMode}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No products found</div>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-8 lg:mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
            Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;