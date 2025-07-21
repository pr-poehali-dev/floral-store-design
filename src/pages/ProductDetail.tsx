import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-coral-50 to-white">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="text-6xl mb-4">🌻</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Товар не найден</h2>
            <p className="text-gray-600 mb-6">Возможно, товар был удалён или не существует</p>
            <Link
              to="/catalog"
              className="bg-coral-500 text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-all"
            >
              Вернуться к каталогу
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images || [product.image, product.image, product.image];
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const features = [
    { icon: 'Truck', text: 'Бесплатная доставка от 3000 ₽' },
    { icon: 'Clock', text: 'Доставка в течение 2 часов' },
    { icon: 'Shield', text: 'Гарантия свежести' },
    { icon: 'Heart', text: 'Сделано с любовью' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-coral-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-coral-600">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/catalog" className="hover:text-coral-600">Каталог</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-gray-800">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Галерея изображений */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-96 mb-4"
              >
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Новинка
                  </span>
                )}
              </motion.div>
              
              {/* Миниатюры */}
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index 
                        ? 'ring-2 ring-coral-500 scale-105' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Информация о товаре */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={i < Math.floor(product.rating || 4) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.rating || 4.5})</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.inStock ? 'В наличии' : 'Под заказ'}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Характеристики */}
            <div className="bg-coral-50/50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Характеристики</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Категория:</dt>
                  <dd className="font-medium">{product.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Высота:</dt>
                  <dd className="font-medium">50-60 см</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Срок хранения:</dt>
                  <dd className="font-medium">7-10 дней</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Страна:</dt>
                  <dd className="font-medium">Эквадор</dd>
                </div>
              </dl>
            </div>

            {/* Цена и покупка */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-coral-500">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-lg text-gray-400 line-through">
                      {product.oldPrice} ₽
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                  >
                    <Icon name="Minus" size={20} />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
                  >
                    <Icon name="Plus" size={20} />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full bg-coral-500 text-white py-4 rounded-full font-semibold text-lg hover:bg-coral-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Icon name="ShoppingCart" size={20} />
                Добавить в корзину
              </button>

              {showMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-center text-green-600 font-medium"
                >
                  ✓ Товар добавлен в корзину
                </motion.p>
              )}
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon} size={20} className="text-coral-600" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Icon name="Droplets" className="text-coral-500" />
              Уход за цветами
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Подрежьте стебли под углом 45°</li>
              <li>• Меняйте воду каждые 2 дня</li>
              <li>• Добавьте специальную подкормку</li>
              <li>• Держите вдали от прямых солнечных лучей</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Icon name="Gift" className="text-coral-500" />
              Дополнительные услуги
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Праздничная упаковка</li>
              <li>• Открытка с пожеланиями</li>
              <li>• Фото букета перед доставкой</li>
              <li>• Анонимная доставка</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Icon name="MessageCircle" className="text-coral-500" />
              Отзывы покупателей
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">"Великолепные цветы! Стояли больше недели."</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">"Доставили точно в срок, букет как на фото!"</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Похожие товары */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard {...item} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;