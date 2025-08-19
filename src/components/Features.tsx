import React from 'react';
import { Truck, Shield, Headphones, RefreshCw, CreditCard, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50. Fast and reliable delivery worldwide."
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is encrypted and secure with SSL protection."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to help you."
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy. No questions asked, hassle-free returns."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options including buy now, pay later services."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our products with a comprehensive quality guarantee."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;