import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-coffee-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-coffee-dark-green mb-4">
              О нас
            </h2>
            <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
              Perkup — это больше чем кофейня. Это место, где каждая чашка кофе
              готовится с любовью, а каждый гость чувствует себя как дома.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=600&h=400&fit=crop"
                alt="Наша кофейня"
                className="rounded-3xl shadow-lg w-full h-80 object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-montserrat font-semibold text-coffee-dark-green mb-6">
                Наша история
              </h3>
              <p className="text-coffee-brown mb-6 leading-relaxed">
                Мы начали свой путь в 2018 году с простой идеи — создать место,
                где можно насладиться идеально приготовленным кофе в уютной
                атмосфере. Сегодня Perkup — это команда профессиональных
                бариста, которые знают толк в настоящем кофе.
              </p>
              <p className="text-coffee-brown leading-relaxed">
                Мы тщательно отбираем зерна от лучших поставщиков, обжариваем их
                по авторским рецептам и готовим каждую чашку с особой заботой о
                вкусе и аромате.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-coffee-light-beige rounded-2xl hover-lift">
              <CardContent className="p-8 text-center">
                <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="h-8 w-8 text-coffee-brown" />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-3">
                  Премиум качество
                </h3>
                <p className="text-coffee-brown text-sm">
                  Используем только лучшие сорта арабики от проверенных
                  поставщиков
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-coffee-light-beige rounded-2xl hover-lift">
              <CardContent className="p-8 text-center">
                <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-coffee-brown" />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-3">
                  Для всех
                </h3>
                <p className="text-coffee-brown text-sm">
                  Создаем комфортную атмосферу для студентов, семей, деловых
                  встреч и романтических свиданий
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-coffee-light-beige rounded-2xl hover-lift">
              <CardContent className="p-8 text-center">
                <div className="bg-coffee-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="h-8 w-8 text-coffee-brown" />
                </div>
                <h3 className="font-montserrat font-semibold text-coffee-dark-green mb-3">
                  С любовью
                </h3>
                <p className="text-coffee-brown text-sm">
                  Каждая чашка готовится с душой и вниманием к деталям
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
