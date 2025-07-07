import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Коралловая нежность",
      description: "Букет из роз и пионов в коралловых тонах",
      price: "3 500 ₽",
      image: "/img/0dfc625a-4f48-4c0f-b815-28252b8669cf.jpg",
      inStock: true,
      category: "Букеты",
    },
    {
      id: 2,
      name: "Свадебная мечта",
      description: "Роскошный свадебный букет с коралловыми розами",
      price: "8 500 ₽",
      image: "/img/378b7f29-56ad-449e-979e-41ac5176a802.jpg",
      inStock: true,
      category: "Свадебные",
    },
    {
      id: 3,
      name: "Подарочная композиция",
      description: "Элегантная композиция с премиальной упаковкой",
      price: "5 200 ₽",
      image: "/img/ab83202d-9815-4c37-83c5-3c44980b5b21.jpg",
      inStock: true,
      category: "Подарки",
    },
  ];

  const categories = [
    { name: "Букеты", icon: "Flower", count: 45 },
    { name: "Свадебные", icon: "Heart", count: 28 },
    { name: "Подарки", icon: "Gift", count: 32 },
    { name: "Композиции", icon: "Sparkles", count: 18 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-coral-100">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-glass-medium border-b border-coral-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flower" className="text-coral-600" size={32} />
              <h1 className="text-2xl font-bold text-coral-800">
                Цветочный рай
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-coral-700 hover:text-coral-800 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-coral-700 hover:text-coral-800 transition-colors"
              >
                Категории
              </a>
              <a
                href="#"
                className="text-coral-700 hover:text-coral-800 transition-colors"
              >
                Товары
              </a>
              <a
                href="#"
                className="text-coral-700 hover:text-coral-800 transition-colors"
              >
                О нас
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-coral-800 mb-6 animate-fade-in">
              Цветы, которые говорят о ваших чувствах
            </h2>
            <p className="text-xl text-coral-600 mb-8 animate-fade-in">
              Создаем букеты и композиции для особых моментов. Свежие цветы,
              профессиональная флористика и внимание к деталям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                className="bg-coral-600 hover:bg-coral-700 text-white"
              >
                <Icon name="Flower" className="mr-2" size={20} />
                Посмотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-coral-600 text-coral-600 hover:bg-coral-50"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-coral-800 text-center mb-12">
            Наши категории
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-glass-light border-coral-200 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-coral-100 rounded-full w-fit">
                    <Icon
                      name={category.icon}
                      size={32}
                      className="text-coral-600"
                    />
                  </div>
                  <CardTitle className="text-coral-800">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-coral-600">
                    {category.count} товаров
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-coral-800 text-center mb-12">
            Популярные товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="backdrop-blur-sm bg-glass-light border-coral-200 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-coral-600 text-white">
                    {product.category}
                  </Badge>
                  {product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                      В наличии
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-coral-800">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-coral-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-coral-700">
                      {product.price}
                    </span>
                    <Button className="bg-coral-600 hover:bg-coral-700 text-white">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-coral-100 to-coral-200">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-coral-800 text-center mb-12">
            Наши услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-glass-medium border-coral-200 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-coral-100 rounded-full w-fit">
                  <Icon name="Heart" size={32} className="text-coral-600" />
                </div>
                <CardTitle className="text-coral-800">
                  Свадебная флористика
                </CardTitle>
                <CardDescription className="text-coral-600">
                  Создаем букеты невесты, бутоньерки и декор для свадебных
                  торжеств
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="backdrop-blur-sm bg-glass-medium border-coral-200 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-coral-100 rounded-full w-fit">
                  <Icon name="Gift" size={32} className="text-coral-600" />
                </div>
                <CardTitle className="text-coral-800">
                  Подарочное оформление
                </CardTitle>
                <CardDescription className="text-coral-600">
                  Красивая упаковка, открытки и конвертики для особых моментов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="backdrop-blur-sm bg-glass-medium border-coral-200 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-coral-100 rounded-full w-fit">
                  <Icon name="Leaf" size={32} className="text-coral-600" />
                </div>
                <CardTitle className="text-coral-800">
                  Уход за цветами
                </CardTitle>
                <CardDescription className="text-coral-600">
                  Специальный порошок и памятка по уходу к каждому букету
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="backdrop-blur-sm bg-glass-light border-coral-200 text-center">
            <CardHeader>
              <CardTitle className="text-coral-800 flex items-center justify-center gap-2">
                <Icon name="Truck" size={24} />
                Доставка скоро будет доступна!
              </CardTitle>
              <CardDescription className="text-coral-600 text-lg">
                Мы работаем над запуском службы доставки, чтобы дарить радость
                прямо к вашему порогу
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coral-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" size={24} />
                <h4 className="text-xl font-bold">Цветочный рай</h4>
              </div>
              <p className="text-coral-200">
                Создаем красоту из цветов для ваших особых моментов
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-coral-200">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@flower-paradise.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Цветочная, 15
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Часы работы</h4>
              <div className="space-y-2 text-coral-200">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-coral-700 mt-8 pt-8 text-center text-coral-200">
            <p>&copy; 2024 Цветочный рай. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
