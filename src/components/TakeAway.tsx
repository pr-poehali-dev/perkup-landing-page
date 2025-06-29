import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TakeAway = () => {
  return (
    <section id="takeaway" className="py-20 bg-coffee-light-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-coffee-dark-green mb-8">
            Кофе с собой 🥤
          </h2>

          <Card className="bg-white border-coffee-brown border-2 rounded-3xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-coffee-brown to-coffee-light-brown p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-montserrat text-coffee-beige mb-4">
                  Специальное предложение!
                </CardTitle>
                <CardDescription className="text-coffee-beige/90 text-lg">
                  Заказывайте любимый кофе заранее и забирайте без очереди
                </CardDescription>
              </CardHeader>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="Smartphone"
                      className="h-8 w-8 text-coffee-brown"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-2">
                    Закажите онлайн
                  </h3>
                  <p className="text-coffee-brown text-sm">
                    Выберите напиток в нашем приложении или на сайте
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="h-8 w-8 text-coffee-brown" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-2">
                    Готовим быстро
                  </h3>
                  <p className="text-coffee-brown text-sm">
                    Ваш заказ будет готов через 5-7 минут
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="ShoppingBag"
                      className="h-8 w-8 text-coffee-brown"
                    />
                  </div>
                  <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-2">
                    Забирайте
                  </h3>
                  <p className="text-coffee-brown text-sm">
                    Приходите в удобное время и забирайте готовый заказ
                  </p>
                </div>
              </div>

              <div className="bg-coffee-beige rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon
                    name="Gift"
                    className="h-6 w-6 text-coffee-brown mr-2"
                  />
                  <span className="font-montserrat font-semibold text-coffee-dark-green">
                    Скидка 10% на первый заказ с собой!
                  </span>
                </div>
                <p className="text-coffee-brown text-center text-sm">
                  Промокод: TAKEAWAY10
                </p>
              </div>

              <Button className="w-full bg-coffee-brown hover:bg-coffee-light-brown text-coffee-beige py-4 text-lg rounded-full">
                <Icon name="Coffee" className="h-5 w-5 mr-2" />
                Заказать кофе с собой
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TakeAway;
