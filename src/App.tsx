import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (productId: number) => {
    setCartItems(prevCount => prevCount + 1);
    // Add subtle feedback or animation here if needed
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} />
      <Hero />
      <Features />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;