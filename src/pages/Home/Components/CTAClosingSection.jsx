import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Globe, ArrowRight } from 'lucide-react';

const CTAClosingSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-25 blur-lg"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Single CTA Card */}
          <motion.div 
            className="relative p-8 lg:p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-200"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div 
                className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-medium text-sm rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                READY TO GET STARTED?
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Choose Your <span className="text-orange-500">Perfect Option</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands who've transformed their nutrition with our premium fruit powders
              </p>
            </div>

            {/* Two CTA Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Retail Option */}
              <motion.div 
                className="group p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl">🍓</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  Buy Now for Daily Nutrition
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for personal use, smoothies & healthy recipes
                </p>
                <motion.button 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Wholesale Option */}
              <motion.div 
                className="group p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl">🌍</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                  Request a Quote for Wholesale Supply
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Bulk orders, competitive pricing & custom packaging
                </p>
                <motion.button 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>

            {/* Bottom Contact */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Questions? Contact us at{' '}
                <a href="mailto:hello@freshpowders.com" className="text-orange-500 hover:text-orange-600 transition-colors">
                  hello@freshpowders.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAClosingSection;