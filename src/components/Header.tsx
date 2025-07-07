import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Header() {
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/", icon: "Home" },
    { name: "Категории", href: "/categories", icon: "Grid3X3" },
    { name: "Товары", href: "/products", icon: "ShoppingBag" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-glass-light backdrop-blur-md border-b border-white/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
              <Icon name="Flower" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-coral-700">
              Цветы&amp;Букеты
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "bg-coral-100 text-coral-700"
                    : "text-gray-600 hover:text-coral-600 hover:bg-coral-50"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-glass-light backdrop-blur-sm border border-white/20 hover:bg-glass-medium transition-colors">
              <Icon name="Search" size={20} className="text-coral-600" />
            </button>
            <button className="p-2 rounded-lg bg-glass-light backdrop-blur-sm border border-white/20 hover:bg-glass-medium transition-colors relative">
              <Icon name="ShoppingCart" size={20} className="text-coral-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-coral-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
