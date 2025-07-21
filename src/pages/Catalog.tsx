import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Фильтр по категории
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Фильтр по поиску
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Фильтр по цене
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Сортировка
    switch (sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, searchQuery, priceRange]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-coral-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок и поиск */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Каталог цветов</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-coral-200 focus:outline-none focus:border-coral-400"
              />
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-coral-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon name="Grid3x3" size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-coral-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon name="List" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Фильтры */}
          <aside className="lg:w-64">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg sticky top-4"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Фильтры</h2>
              
              {/* Категории */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Категории</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer hover:text-coral-600 transition-colors">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="mr-2 text-coral-500"
                    />
                    <span>Все категории</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center cursor-pointer hover:text-coral-600 transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="mr-2 text-coral-500"
                      />
                      <span>{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ценовой диапазон */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Цена</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-coral-500"
                  />
                </div>
              </div>

              {/* Сортировка */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Сортировка</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-coral-200 focus:outline-none focus:border-coral-400"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-asc">По возрастанию цены</option>
                  <option value="price-desc">По убыванию цены</option>
                  <option value="name">По названию</option>
                  <option value="rating">По рейтингу</option>
                </select>
              </div>
            </motion.div>
          </aside>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">
                Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🌻</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
                <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    layout
                  >
                    {viewMode === 'grid' ? (
                      <ProductCard {...product} />
                    ) : (
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex gap-6 hover:shadow-xl transition-all">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-32 h-32 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-coral-500">{product.price} ₽</span>
                            <button className="bg-coral-500 text-white px-6 py-2 rounded-full hover:bg-coral-600 transition-all">
                              В корзину
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;