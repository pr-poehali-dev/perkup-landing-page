import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-coffee-dark-green to-coffee-green flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-coffee-beige mb-6">
            Добро пожаловать в
            <span className="block text-coffee-light-beige">Perkup</span>
          </h1>

          <p className="text-xl md:text-2xl text-coffee-beige/90 mb-8 font-light">
            Ваше идеальное место для настоящего кофе и свежих пончиков
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToMenu}
              className="bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige px-8 py-3 text-lg rounded-full transition-all hover-lift"
            >
              <Icon name="Coffee" className="h-5 w-5 mr-2" />
              Посмотреть меню
            </Button>

            <Button
              variant="outline"
              className="border-coffee-beige text-coffee-beige hover:bg-coffee-beige hover:text-coffee-dark-green px-8 py-3 text-lg rounded-full transition-all hover-lift"
            >
              <Icon name="MapPin" className="h-5 w-5 mr-2" />
              Найти нас
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-coffee-beige/80">
            <div className="flex items-center space-x-2">
              <Icon name="Check" className="h-5 w-5 text-coffee-light-beige" />
              <span>Премиум кофе</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" className="h-5 w-5 text-coffee-light-beige" />
              <span>Быстрый сервис</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="h-5 w-5 text-coffee-light-beige" />
              <span>С любовью</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-coffee-beige" />
      </div>
    </section>
  );
};

export default Hero;
