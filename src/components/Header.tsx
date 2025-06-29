import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-coffee-beige/95 backdrop-blur-sm z-50 border-b border-coffee-light-beige">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Coffee" className="h-8 w-8 text-coffee-brown" />
          <h1 className="text-2xl font-montserrat font-bold text-coffee-dark-green">
            Perkup
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("menu")}
            className="text-coffee-dark-green hover:text-coffee-brown transition-colors font-medium"
          >
            Меню
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-coffee-dark-green hover:text-coffee-brown transition-colors font-medium"
          >
            О нас
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-coffee-dark-green hover:text-coffee-brown transition-colors font-medium"
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-coffee-dark-green hover:text-coffee-brown transition-colors font-medium"
          >
            Контакты
          </button>
        </nav>

        <Button
          className="bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige rounded-full px-6"
          onClick={() => scrollToSection("takeaway")}
        >
          <Icon name="ShoppingBag" className="h-4 w-4 mr-2" />
          Заказать
        </Button>
      </div>
    </header>
  );
};

export default Header;
