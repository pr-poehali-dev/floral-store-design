import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export default function CategoryCard({
  id,
  name,
  description,
  image,
  productCount,
}: CategoryCardProps) {
  return (
    <Link
      to={`/category/${id}`}
      className="group relative bg-glass-light backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm opacity-90 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{productCount} товаров</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Смотреть</span>
            <Icon name="ArrowRight" size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
