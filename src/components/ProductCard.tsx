import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating,
  inStock,
}: ProductCardProps) {
  return (
    <div className="group relative bg-glass-light backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-coral-600 font-medium">{category}</span>
          <div className="flex items-center space-x-1">
            <Icon
              name="Star"
              size={14}
              className="text-amber-400 fill-current"
            />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-coral-600">{price} ₽</span>
          <div className="flex items-center space-x-2">
            {inStock ? (
              <span className="text-sm text-green-600 font-medium">
                В наличии
              </span>
            ) : (
              <span className="text-sm text-gray-500">Нет в наличии</span>
            )}
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Link
            to={`/product/${id}`}
            className="flex-1 bg-coral-500 text-white py-2 px-4 rounded-lg hover:bg-coral-600 transition-colors text-center text-sm font-medium"
          >
            Подробнее
          </Link>
          <button
            className="p-2 bg-glass-light backdrop-blur-sm border border-white/20 rounded-lg hover:bg-glass-medium transition-colors"
            disabled={!inStock}
          >
            <Icon name="ShoppingCart" size={16} className="text-coral-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
