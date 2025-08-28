import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Heart, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Made from Fresh, Ripe Fruits",
      description: "Sourced from the finest quality fruits at peak ripeness for maximum flavor and nutrition",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "No Added Sugar or Preservatives",
      description: "Pure and natural fruit powders with no artificial additives or unnecessary ingredients",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Rich in Vitamins & Antioxidants",
      description: "Packed with essential nutrients that support your health and boost your immune system",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Convenient & Long Shelf Life",
      description: "Easy to store and use anytime, anywhere with extended freshness and quality",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-orange-50 to-yellow-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-orange-200 rounded-full opacity-25 blur-lg"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-200 rounded-full opacity-20 blur-xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-orange-600 font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            WHY CHOOSE OUR PRODUCTS
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-orange-500">Pure Benefits</span>
            <br />
            <span className="text-gray-800">In Every Scoop</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the natural goodness of our premium fruit powders, 
            carefully crafted to preserve all the essential nutrients and flavors.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`relative p-8 bg-white/70 backdrop-blur-sm border-2 ${benefit.borderColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-opacity-100 h-full`}>
                {/* Icon Container */}
                <motion.div 
                  className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <div className={benefit.color}>
                    {benefit.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;