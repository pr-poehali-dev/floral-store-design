import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.categoryId === product?.categoryId && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-coral-100 flex items-center justify-center">
        <div className="text-center">
          <Icon
            name="AlertCircle"
            size={48}
            className="text-gray-400 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Товар не найден
          </h2>
          <p className="text-gray-600 mb-6">
            Возможно, товар был удалён или не существует
          </p>
          <Link
            to="/products"
            className="bg-coral-500 text-white px-6 py-3 rounded-lg hover:bg-coral-600 transition-colors"
          >
            Вернуться к каталогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-coral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-coral-600">
                Главная
              </Link>
            </li>
            <li>
              <Icon name="ChevronRight" size={16} />
            </li>
            <li>
              <Link to="/products" className="hover:text-coral-600">
                Товары
              </Link>
            </li>
            <li>
              <Icon name="ChevronRight" size={16} />
            </li>
            <li className="text-coral-600">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-coral-500"
                      : "border-gray-200 hover:border-coral-300"
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

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-coral-600 font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-amber-400 fill-current"
                  />
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="bg-glass-light backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-coral-600">
                  {product.price} ₽
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-gray-600">Количество:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  className="flex-1 bg-coral-500 text-white py-3 px-6 rounded-lg hover:bg-coral-600 transition-colors font-semibold disabled:opacity-50"
                  disabled={!product.inStock}
                >
                  В корзину
                </button>
                <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Icon name="Heart" size={20} className="text-coral-600" />
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-glass-light backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Особенности</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500"
                  />
                  <span>Свежие цветы прямо с плантации</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500"
                  />
                  <span>Быстрая доставка по городу</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500"
                  />
                  <span>Гарантия свежести 7 дней</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500"
                  />
                  <span>Красивая упаковка включена</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
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
          </section>
        )}
      </div>
    </div>
  );
}
