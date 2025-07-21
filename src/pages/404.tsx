import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

const NotFound: React.FC = () => {
  const flowers = ['🌺', '🌸', '🌼', '🌻', '🌷', '🌹', '🏵️', '🌵'];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-coral-50 via-white to-coral-100 p-4">
      <div className="text-center relative max-w-2xl">
        {/* Анимированные цветы на фоне */}
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl"
            initial={{ 
              x: Math.random() * 800 - 400,
              y: Math.random() * 600 - 300,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * 100 - 50],
              opacity: [0, 0.3, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          >
            {flower}
          </motion.div>
        ))}
        
        {/* 404 с анимацией */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          className="relative z-10"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold text-coral-400 leading-none">
            4
            <span className="inline-block">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-coral-300"
              >
                🌸
              </motion.span>
            </span>
            4
          </h1>
        </motion.div>
        
        {/* Сообщение об ошибке */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Упс! Кажется, вы заблудились в нашем саду
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Эта страница увяла и больше не существует. <br />
            Но не волнуйтесь, у нас есть много других прекрасных цветов!
          </p>
        </motion.div>
        
        {/* Кнопки действий */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
        >
          <Link
            to="/"
            className="bg-coral-500 text-white px-8 py-3 rounded-full font-medium hover:bg-coral-600 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Icon name="Home" size={20} />
            Вернуться домой
          </Link>
          <Link
            to="/catalog"
            className="bg-white/80 backdrop-blur-sm text-coral-600 px-8 py-3 rounded-full font-medium hover:bg-white transition-all transform hover:scale-105 border border-coral-200 flex items-center gap-2"
          >
            <Icon name="Flower2" size={20} />
            Посмотреть каталог
          </Link>
        </motion.div>
        
        {/* Горшок с цветком */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 relative z-10"
        >
          <div className="inline-block">
            <div className="w-24 h-20 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg relative mx-auto">
              <div className="absolute inset-x-0 -top-2 h-4 bg-amber-500 rounded-t-lg"></div>
              <motion.div
                animate={{ 
                  rotate: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-6xl"
              >
                🌻
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;