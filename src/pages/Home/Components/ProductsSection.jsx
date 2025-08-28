import React from 'react';
import { motion } from 'framer-motion';
import MangoImg from '../../../assets/mango.png';
import BananaImg from '../../../assets/banana.png';
import PineappleImg from '../../../assets/pineapple.png';
import StrawberryImg from '../../../assets/strawberry.png';
import BlueberryImg from '../../../assets/blueberry.png';

const ProductsSection = () => {
  const products = [
    {
      name: 'Mango',
      description: 'Natural tropical flavor',
      color: '#FFA500',
      bgColor: 'rgba(255, 165, 0, 0.1)',
      image: MangoImg
    },
    {
      name: 'Banana',
      description: 'For smoothies & baby food',
      color: '#FFD700',
      bgColor: 'rgba(255, 215, 0, 0.1)',
      image: BananaImg
    },
    {
      name: 'Pineapple',
      description: 'Sweet & tangy boost',
      color: '#FFAB00',
      bgColor: 'rgba(255, 171, 0, 0.1)',
      image: PineappleImg
    },
    {
      name: 'Strawberry',
      description: 'Rich in antioxidants',
      color: '#FF6B6B',
      bgColor: 'rgba(255, 107, 107, 0.1)',
      image: StrawberryImg
    },
    {
      name: 'Blueberry',
      description: 'Superfruit for immunity',
      color: '#6366F1',
      bgColor: 'rgba(99, 102, 241, 0.1)',
      image: BlueberryImg
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFF8F0' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-4"
          style={{ backgroundColor: '#FF7A00' }}
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '10%', right: '5%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
            style={{
              backgroundColor: 'rgba(255, 122, 0, 0.1)',
              color: '#FF7A00',
              border: '2px solid rgba(255, 122, 0, 0.2)'
            }}
          >
            Our Premium Collection
          </div>
          
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#3B2E2E' }}
          >
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FF7A00 0%, #FFD93D 70%)'
              }}
            >
              Top Products
            </span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-20 lg:space-y-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <motion.div
                  className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Large Product Name */}
                  <div className="relative overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center">
                    <motion.h3
                      className="text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-black leading-none select-none absolute top-0 left-0 z-0 w-full"
                      style={{
                        color: product.color,
                        opacity: 0.15,
                        WebkitTextStroke: `2px ${product.color}`,
                        WebkitTextStrokeWidth: '1px',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.04em',
                        transform: 'translateY(-10px)',
                        wordBreak: 'break-all'
                      }}
                      whileHover={{ 
                        opacity: 0.15,
                        scale: 1.01 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    {/* Overlay Text */}
                    <div className="relative z-10 w-full py-12">
                      <div className="space-y-8">
                        <motion.h4
                          className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight"
                          style={{ color: '#3B2E2E' }}
                          whileHover={{ x: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {product.name}
                          <br />
                          <span
                            className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold"
                            style={{ color: product.color }}
                          >
                            Powder
                          </span>
                        </motion.h4>
                        
                        <motion.p
                          className="text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed max-w-2xl"
                          style={{ color: '#3B2E2E', opacity: 0.8 }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.8 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          {product.description}
                        </motion.p>

                        <motion.div
                          className="pt-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          <motion.button
                            className="px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-lg lg:text-xl text-white transition-all duration-300 shadow-lg"
                            style={{ backgroundColor: product.color }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0 15px 35px ${product.color}40`
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  className={`lg:col-span-5 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    className="relative group w-full max-w-md mx-auto"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background Glow */}
                    <div
                      className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                      style={{ backgroundColor: product.color }}
                    />
                    
                    {/* Image Container */}
                    <div
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                      style={{
                        backgroundColor: product.bgColor,
                        border: `3px solid ${product.color}40`
                      }}
                    >
                      <img
                        src={product.image}
                        alt={`${product.name} Powder`}
                        className="w-full h-96 lg:h-[450px] xl:h-[550px] object-fit transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"
                      />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: `1px solid ${product.color}40`
                      }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: product.color }}
                      >
                        Premium
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            className="px-10 py-5 rounded-full font-bold text-xl text-white shadow-xl relative overflow-hidden group"
            style={{ backgroundColor: '#FF7A00' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 122, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Fruit Powders</span>
            
            {/* Button Background Animation */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: '#FFD93D' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;