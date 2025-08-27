import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    { icon: '🥤', text: 'Smoothies' },
    { icon: '🥛', text: 'Dairy' },
    { icon: '🍰', text: 'Desserts' },
    { icon: '🥖', text: 'Bakery' },
    { icon: '💊', text: 'Supplements' }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-40 h-40 rounded-full opacity-5"
          style={{ backgroundColor: '#FFD93D' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '15%', right: '10%' }}
        />
        
        <motion.div
          className="absolute w-24 h-24 rounded-full opacity-6"
          style={{ backgroundColor: '#FF4C68' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ bottom: '20%', left: '8%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Badge */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase inline-block"
              style={{ 
                backgroundColor: 'rgba(255, 122, 0, 0.1)',
                color: '#FF7A00',
                border: '2px solid rgba(255, 122, 0, 0.2)'
              }}
            >
              About Our Products
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: '#3B2E2E' }}
            >
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #FF7A00 0%, #FFD93D 70%)'
                }}
              >
                Fruit Powders
              </span>
              <br />
              <span>Made Simple</span>
            </h2>

            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#3B2E2E' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fruit powders are a <span style={{ color: '#FF7A00', fontWeight: 'semibold' }}>healthy, versatile way</span> to enjoy fruits anytime, anywhere. 
              Perfect for smoothies, dairy, desserts, bakery, and health supplements. 
              <span style={{ color: '#FF4C68', fontWeight: 'semibold' }}> Loved by both retail buyers and global distributors.</span>
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div 
                  className="p-6 rounded-2xl text-center transition-all duration-300 group-hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '2px solid rgba(255, 122, 0, 0.1)'
                  }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div 
                    className="text-sm font-semibold"
                    style={{ color: '#3B2E2E' }}
                  >
                    {feature.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#FF7A00' }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 35px rgba(255, 122, 0, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Products
            </motion.button>
          </motion.div>

          {/* Decorative Bottom Element */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#FF7A00' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: dot * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;