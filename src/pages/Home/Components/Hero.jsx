import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../../../assets/hero.png';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#FF7A00' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '10%', left: '5%' }}
        />
        
        <motion.div
          className="absolute w-48 h-48 rounded-full opacity-8"
          style={{ backgroundColor: '#FFD93D' }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '60%', left: '8%' }}
        />

        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-12"
          style={{ backgroundColor: '#FF4C68' }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '30%', left: '15%' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50 opacity-30" />
        
        {/* Organic Shapes */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#gradient1)"
            animate={{
              d: [
                "M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z",
                "M0,250 Q300,150 600,250 T1200,150 L1200,0 L0,0 Z",
                "M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FFD93D" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FF4C68" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-6 py-3 rounded-full border-2 text-sm font-semibold tracking-wide uppercase"
              style={{ 
                borderColor: '#FF4C68', 
                backgroundColor: 'rgba(255, 76, 104, 0.1)',
                color: '#3B2E2E'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ✨ Welcome to Fresh Experience
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              style={{ color: '#3B2E2E' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #FF7A00 0%, #FFD93D 50%, #FF4C68 100%)'
                }}
              >
                Fresh
              </span>
              <br />
              <span>Innovation</span>
              <br />
              <motion.span
                className="inline-block"
                // animate={{ rotate: [0, 5, -5, 0] }}
                // transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Awaits
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl leading-relaxed max-w-lg"
              style={{ color: '#3B2E2E' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the perfect blend of creativity and innovation. 
              <span style={{ color: '#FF7A00' }}> Transform your ideas</span> into 
              extraordinary realities with our fresh approach.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg transform transition-all duration-300"
                style={{ backgroundColor: '#FF7A00' }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(255, 122, 0, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300"
                style={{ 
                  borderColor: '#FF4C68', 
                  color: '#3B2E2E',
                  backgroundColor: 'transparent'
                }}
                whileHover={{ 
                  backgroundColor: '#FF4C68',
                  color: 'white',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              className="flex flex-wrap gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '99%', label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="text-2xl lg:text-3xl font-bold"
                    style={{ color: '#FF7A00' }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-sm font-medium"
                    style={{ color: '#3B2E2E' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
                style={{ backgroundColor: '#FFD93D' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                initial={{ opacity: 0.8 }}
              />

              <motion.div
                className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full"
                style={{ backgroundColor: '#FF4C68' }}
                animate={{
                  scale: [1, 0.8, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                initial={{ opacity: 0.6 }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.1) 0%, rgba(255, 217, 61, 0.1) 100%)',
                  border: '3px solid rgba(255, 122, 0, 0.2)'
                }}
              >
                <img
                  src={HeroImg}
                  alt="Hero Image"
                  className="w-full h-96 lg:h-[600px] object-fit"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white opacity-20" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-8 left-8 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 122, 0, 0.3)'
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span 
                  className="text-sm font-semibold"
                  style={{ color: '#FF7A00' }}
                >
                  🌟 Premium Quality
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#FF7A00' }}>
          <motion.div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: '#FF7A00' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;