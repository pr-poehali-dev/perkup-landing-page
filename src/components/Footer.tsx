import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark-green text-coffee-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Coffee" className="h-8 w-8 text-coffee-light-brown" />
              <h3 className="text-2xl font-montserrat font-bold">Perkup</h3>
            </div>
            <p className="text-coffee-beige/80 text-sm">
              Ваше идеальное место для настоящего кофе и свежих пончиков.
              Создаем особенные моменты каждый день.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Меню</h4>
            <ul className="space-y-2 text-sm text-coffee-beige/80">
              <li>Кофе</li>
              <li>Пончики</li>
              <li>Десерты</li>
              <li>Напитки</li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-coffee-beige/80">
              <li>Кофе с собой</li>
              <li>Доставка</li>
              <li>Корпоративные заказы</li>
              <li>Бариста на мероприятия</li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-coffee-beige/80">
              <li>+7 (495) 123-45-67</li>
              <li>hello@perkup.ru</li>
              <li>г. Москва, ул. Кофейная, 12</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-green/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-beige/60 text-sm">
            © 2024 Perkup. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-coffee-beige/60 text-sm">
              Политика конфиденциальности
            </span>
            <span className="text-coffee-beige/60 text-sm">
              Условия использования
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
