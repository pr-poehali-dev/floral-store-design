import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { categories, products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const topCategories = categories.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-coral-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 to-coral-300/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Самые свежие цветы
              <span className="block text-coral-600">с доставкой на дом</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаём букеты с любовью для ваших особенных моментов. Свежие
              цветы, быстрая доставка, незабываемые эмоции.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors font-semibold"
              >
                Посмотреть каталог
              </Link>
              <Link
                to="/categories"
                className="bg-glass-light backdrop-blur-sm border border-white/20 text-coral-700 px-8 py-3 rounded-lg hover:bg-glass-medium transition-colors font-semibold"
              >
                Категории
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-glass-light backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-coral-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-600">
                Доставляем цветы в течение 2-3 часов по городу
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Flower" size={32} className="text-coral-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Свежие цветы
              </h3>
              <p className="text-gray-600">
                Только самые свежие цветы от лучших поставщиков
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-coral-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                С любовью
              </h3>
              <p className="text-gray-600">
                Каждый букет создаётся с особой заботой и вниманием
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные категории
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите идеальные цветы для любого случая
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topCategories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                productCount={category.productCount}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-2 text-coral-600 hover:text-coral-700 font-semibold"
            >
              <span>Смотреть все категории</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-glass-light backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Рекомендуемые товары
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наши самые популярные и красивые букеты
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                rating={product.rating}
                inStock={product.inStock}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-coral-600 hover:text-coral-700 font-semibold"
            >
              <span>Смотреть все товары</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
