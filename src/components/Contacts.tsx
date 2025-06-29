import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-coffee-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-coffee-dark-green mb-4">
            Контакты
          </h2>
          <p className="text-xl text-coffee-brown max-w-2xl mx-auto">
            Приходите к нам в гости или свяжитесь любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white border-coffee-light-beige rounded-2xl mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-coffee-dark-green flex items-center">
                  <Icon
                    name="MapPin"
                    className="h-6 w-6 mr-3 text-coffee-brown"
                  />
                  Наше расположение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Home"
                    className="h-5 w-5 text-coffee-brown mt-1"
                  />
                  <div>
                    <p className="font-semibold text-coffee-dark-green">
                      Адрес:
                    </p>
                    <p className="text-coffee-brown">
                      г. Москва, ул. Кофейная, 12
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon
                    name="Clock"
                    className="h-5 w-5 text-coffee-brown mt-1"
                  />
                  <div>
                    <p className="font-semibold text-coffee-dark-green">
                      Режим работы:
                    </p>
                    <p className="text-coffee-brown">Пн-Пт: 7:00 - 22:00</p>
                    <p className="text-coffee-brown">Сб-Вс: 8:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon
                    name="Phone"
                    className="h-5 w-5 text-coffee-brown mt-1"
                  />
                  <div>
                    <p className="font-semibold text-coffee-dark-green">
                      Телефон:
                    </p>
                    <p className="text-coffee-brown">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon
                    name="Mail"
                    className="h-5 w-5 text-coffee-brown mt-1"
                  />
                  <div>
                    <p className="font-semibold text-coffee-dark-green">
                      Email:
                    </p>
                    <p className="text-coffee-brown">hello@perkup.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige p-6 rounded-2xl flex items-center justify-center space-x-3">
                <Icon name="Phone" className="h-5 w-5" />
                <span>Позвонить</span>
              </Button>

              <Button
                variant="outline"
                className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-coffee-beige p-6 rounded-2xl flex items-center justify-center space-x-3"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
                <span>Написать</span>
              </Button>
            </div>
          </div>

          <div>
            <Card className="bg-white border-coffee-light-beige rounded-2xl overflow-hidden">
              <div className="h-80">
                <img
                  src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=600&h=400&fit=crop"
                  alt="Карта расположения"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-3">
                  Как нас найти
                </h3>
                <p className="text-coffee-brown text-sm mb-4">
                  Мы находимся в самом центре города, рядом с парком "Зеленый".
                  Есть парковка для автомобилей и велосипедная стоянка.
                </p>
                <Button className="w-full bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige rounded-full">
                  <Icon name="Navigation" className="h-4 w-4 mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coffee-brown to-coffee-light-brown rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-montserrat font-bold text-coffee-beige mb-4">
              Следите за нами в соцсетях!
            </h3>
            <p className="text-coffee-beige/90 mb-6">
              Узнавайте о новинках меню, акциях и специальных предложениях
              первыми
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="secondary"
                className="bg-coffee-beige text-coffee-brown hover:bg-coffee-light-beige rounded-full"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                className="bg-coffee-beige text-coffee-brown hover:bg-coffee-light-beige rounded-full"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                className="bg-coffee-beige text-coffee-brown hover:bg-coffee-light-beige rounded-full"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
