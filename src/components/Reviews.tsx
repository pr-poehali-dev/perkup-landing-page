import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Лучший кофе в городе! Атмосфера невероятно уютная, а пончики просто тают во рту. Рекомендую всем кофеманам!",
      initials: "АС",
    },
    {
      name: "Михаил Петров",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Отличное место для работы с ноутбуком. Wi-Fi быстрый, кофе превосходный, персонал дружелюбный. Стал постоянным клиентом!",
      initials: "МП",
    },
    {
      name: "Елена Козлова",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Заказывала кофе с собой через приложение — очень удобно! Заказ готов точно в срок, качество на высоте.",
      initials: "ЕК",
    },
    {
      name: "Дмитрий Волков",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Привел сюда семью на выходных — всем понравилось! Дети в восторге от пончиков, а взрослые от кофе. Обязательно вернемся!",
      initials: "ДВ",
    },
    {
      name: "Ольга Новикова",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Идеальное место для встреч с подругами. Интерьер стильный, музыка приятная, а главное — вкуснейший латте!",
      initials: "ОН",
    },
    {
      name: "Алексей Соколов",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Бариста настоящие профессионалы! Каждый раз готовят кофе по-разному, но всегда идеально. Скидка на первый заказ — приятный бонус.",
      initials: "АС",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-coffee-light-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-coffee-dark-green mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-xl text-coffee-brown max-w-2xl mx-auto">
            Мы гордимся тем, что создаем особенные моменты для каждого
            посетителя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white border-coffee-light-beige rounded-2xl hover-lift scale-in"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-coffee-beige text-coffee-brown font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-montserrat font-semibold text-coffee-dark-green">
                      {review.name}
                    </h3>
                    <div className="flex space-x-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-coffee-brown leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto border-coffee-brown border-2">
            <div className="flex justify-center mb-4">
              <Icon
                name="Star"
                className="h-8 w-8 text-yellow-400 fill-current"
              />
              <Icon
                name="Star"
                className="h-8 w-8 text-yellow-400 fill-current"
              />
              <Icon
                name="Star"
                className="h-8 w-8 text-yellow-400 fill-current"
              />
              <Icon
                name="Star"
                className="h-8 w-8 text-yellow-400 fill-current"
              />
              <Icon
                name="Star"
                className="h-8 w-8 text-yellow-400 fill-current"
              />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-coffee-dark-green mb-2">
              4.9/5
            </h3>
            <p className="text-coffee-brown">
              Средняя оценка на основе 247 отзывов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
