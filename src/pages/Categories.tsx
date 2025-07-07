import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";

export default function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-coral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Категории цветов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите идеальные цветы для любого случая в нашем каталоге
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
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
      </div>
    </div>
  );
}
