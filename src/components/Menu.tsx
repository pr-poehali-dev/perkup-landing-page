import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Menu = () => {
  const coffeeTypes = [
    {
      name: "Эспрессо",
      description: "Классический итальянский кофе с насыщенным вкусом",
      price: "180₽",
      image:
        "https://images.unsplash.com/photo-1510707577719-ae7c14805e76?w=300&h=200&fit=crop",
    },
    {
      name: "Американо",
      description: "Эспрессо с добавлением горячей воды",
      price: "200₽",
      image:
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=300&h=200&fit=crop",
    },
    {
      name: "Капучино",
      description: "Эспрессо с молочной пенкой и корицей",
      price: "250₽",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop",
    },
    {
      name: "Латте",
      description: "Нежный кофе с большим количеством молока",
      price: "280₽",
      image:
        "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop",
    },
    {
      name: "Мокко",
      description: "Кофе с шоколадом и взбитыми сливками",
      price: "320₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      name: "Флэт Уайт",
      description: "Двойной эспрессо с микропенкой",
      price: "290₽",
      image:
        "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=300&h=200&fit=crop",
    },
  ];

  const donuts = [
    {
      name: "Классический глазированный",
      description: "Воздушный пончик с сахарной глазурью",
      price: "120₽",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop",
    },
    {
      name: "Шоколадный",
      description: "С шоколадной глазурью и посыпкой",
      price: "140₽",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=200&fit=crop",
    },
    {
      name: "С джемом",
      description: "Пончик с клубничным джемом внутри",
      price: "160₽",
      image:
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-coffee-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-coffee-dark-green mb-4">
            Наше меню
          </h2>
          <p className="text-xl text-coffee-brown max-w-2xl mx-auto">
            Откройте для себя богатый мир кофейных вкусов и свежих пончиков
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-montserrat font-semibold text-coffee-dark-green mb-8 text-center">
            ☕ Популярные виды кофе
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeTypes.map((coffee, index) => (
              <Card
                key={index}
                className="bg-white border-coffee-light-beige hover-lift scale-in rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-coffee-dark-green font-montserrat text-xl">
                    {coffee.name}
                  </CardTitle>
                  <CardDescription className="text-coffee-brown">
                    {coffee.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coffee-brown">
                      {coffee.price}
                    </span>
                    <Button className="bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige rounded-full">
                      <Icon name="Plus" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-montserrat font-semibold text-coffee-dark-green mb-8 text-center">
            🍩 Свежие пончики
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donuts.map((donut, index) => (
              <Card
                key={index}
                className="bg-white border-coffee-light-beige hover-lift scale-in rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={donut.image}
                    alt={donut.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-coffee-dark-green font-montserrat text-xl">
                    {donut.name}
                  </CardTitle>
                  <CardDescription className="text-coffee-brown">
                    {donut.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coffee-brown">
                      {donut.price}
                    </span>
                    <Button className="bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige rounded-full">
                      <Icon name="Plus" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
