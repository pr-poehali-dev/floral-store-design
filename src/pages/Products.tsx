import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";
import { products, categories } from "@/data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.categoryId === selectedCategory,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-coral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог товаров
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 100 видов цветов и букетов для любого случая
          </p>
        </div>

        {/* Filters */}
        <div className="bg-glass-light backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-coral-500 text-white"
                    : "bg-white text-gray-700 hover:bg-coral-50"
                }`}
              >
                Все
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-coral-500 text-white"
                      : "bg-white text-gray-700 hover:bg-coral-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Сортировать:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-coral-500"
              >
                <option value="name">По названию</option>
                <option value="price-low">По цене (возрастание)</option>
                <option value="price-high">По цене (убывание)</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
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

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить фильтры или выберите другую категорию
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
