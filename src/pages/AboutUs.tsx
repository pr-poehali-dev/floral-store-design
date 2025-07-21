import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Елена Цветкова',
      role: 'Основатель и главный флорист',
      image: '/img/f9ec8337-05d3-481e-82ee-58fe9210b045.jpg',
      bio: 'Более 15 лет опыта в флористике. Победитель международных конкурсов.',
    },
    {
      name: 'Мария Розова',
      role: 'Старший флорист',
      image: '/img/9cf3f1bc-07c0-4f88-8c56-b7629318f21b.jpg',
      bio: 'Специалист по свадебным букетам и декору мероприятий.',
    },
    {
      name: 'Анна Лилова',
      role: 'Флорист-дизайнер',
      image: '/img/8f8fc918-9b0e-4c56-b44e-556d8ad396e6.jpg',
      bio: 'Эксперт по экзотическим растениям и авторским композициям.',
    },
  ];

  const achievements = [
    { number: '15+', label: 'Лет опыта', icon: 'Calendar' },
    { number: '10K+', label: 'Счастливых клиентов', icon: 'Users' },
    { number: '50K+', label: 'Созданных букетов', icon: 'Flower2' },
    { number: '100+', label: 'Видов цветов', icon: 'Sparkles' },
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Мы работаем только с проверенными поставщиками и отбираем самые свежие цветы',
      icon: 'Award',
    },
    {
      title: 'Творчество',
      description: 'Каждый букет - это уникальное произведение искусства, созданное с любовью',
      icon: 'Palette',
    },
    {
      title: 'Забота',
      description: 'Мы заботимся о каждом клиенте и помогаем выразить чувства через цветы',
      icon: 'Heart',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-coral-50 to-white">
      <Header />
      
      {/* Hero секция */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">О нас</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы создаем не просто букеты - мы создаем эмоции и воспоминания. 
              Наша миссия - делать мир ярче и счастливее с помощью цветов.
            </p>
          </motion.div>
        </div>
        
        {/* Декоративные элементы */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 text-6xl opacity-20"
        >
          🌺
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 text-6xl opacity-20"
        >
          🌻
        </motion.div>
      </section>

      {/* История */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Наш цветочный магазин начал свою историю в 2009 году с маленького киоска 
                  на центральной площади города. Основатель, Елена Цветкова, всегда мечтала 
                  делиться красотой цветов с людьми.
                </p>
                <p>
                  За годы работы мы выросли из небольшого семейного бизнеса в один из 
                  самых любимых цветочных магазинов города. Мы гордимся тем, что стали 
                  частью важных моментов в жизни тысяч людей.
                </p>
                <p>
                  Сегодня мы продолжаем развиваться, следуя трендам флористики и 
                  сохраняя традиции качественного обслуживания и индивидуального подхода 
                  к каждому клиенту.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-coral-200 to-coral-400 rounded-3xl p-8">
                <img
                  src="/img/265aae4b-a145-42dd-948a-6d644d12aa8a.jpg"
                  alt="История магазина"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl"
              >
                <span className="text-4xl">🌷</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16 bg-coral-50/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Наши достижения
          </motion.h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement.icon} size={28} className="text-coral-600" />
                </div>
                <h3 className="text-3xl font-bold text-coral-500 mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Наша команда
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-coral-200 to-coral-400 rounded-full overflow-hidden mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 text-3xl"
                  >
                    🌸
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-coral-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-gradient-to-br from-coral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Наши ценности
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-coral-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={value.icon} size={36} className="text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-gradient-to-r from-coral-400 to-coral-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Позвольте нам создать для вас идеальный букет
            </p>
            <button className="bg-white text-coral-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Перейти в каталог
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;