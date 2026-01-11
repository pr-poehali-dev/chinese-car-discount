import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-accent" />
            <span className="text-2xl font-montserrat font-bold text-primary">DriveChina</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-accent transition-colors">Каталог</a>
            <a href="#warranty" className="text-foreground hover:text-accent transition-colors">Гарантия</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-lg">
                <Icon name="Sparkles" size={18} className="mr-2" />
                Специальное предложение
              </Badge>
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
                Китайские автомобили
                <span className="block text-accent mt-2">со скидкой 40%</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Премиальные автомобили от ведущих китайских производителей. Официальная гарантия, техническое обслуживание и полная поддержка.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                  Посмотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать кредит
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">40%</div>
                  <div className="text-sm text-primary-foreground/80">Скидка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5 лет</div>
                  <div className="text-sm text-primary-foreground/80">Гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-primary-foreground/80">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/files/lXPpNPMhXn_w5722agNfO1z0rEY-1920.jpg" 
                alt="Премиальный китайский автомобиль"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">Популярные модели</h2>
            <p className="text-muted-foreground text-lg">Выберите автомобиль вашей мечты из нашего каталога</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Geely Monjaro", price: "от 2 890 000 ₽", oldPrice: "4 816 000 ₽", features: ["2.0T 238 л.с.", "AWD", "7 мест"], image: "https://cdn.poehali.dev/files/1814552_1_91617_15414834.jpg" },
              { name: "Chery Tiggo 8 Pro Max", price: "от 2 490 000 ₽", oldPrice: "4 150 000 ₽", features: ["2.0T 192 л.с.", "CVT", "Панорама"], image: "https://cdn.poehali.dev/files/1870459_1_1879830_15670711.jpg" },
              { name: "Haval Jolion", price: "от 1 890 000 ₽", oldPrice: "3 150 000 ₽", features: ["1.5T 150 л.с.", "DCT", "Круиз-контроль"], image: "https://cdn.poehali.dev/projects/e41ab9aa-1915-4298-b073-d538cc48fa51/files/aac70056-65ce-4c69-84c9-ffd4a3bdb19a.jpg" },
            ].map((car, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                  {car.image ? (
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  ) : (
                    <Icon name="Car" size={80} className="text-primary/20" />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-montserrat font-bold mb-2 text-primary">{car.name}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-accent">{car.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{car.oldPrice}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Подробнее
                    <Icon name="ChevronRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="warranty" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">Гарантия и обслуживание</h2>
            <p className="text-muted-foreground text-lg">Полная поддержка на протяжении всего срока эксплуатации</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Shield", title: "5 лет гарантии", desc: "Заводская гарантия на все автомобили" },
              { icon: "Wrench", title: "Бесплатное ТО", desc: "Первые 3 ТО за наш счёт" },
              { icon: "HeadphonesIcon", title: "24/7 Поддержка", desc: "Техническая помощь в любое время" },
              { icon: "MapPin", title: "Сеть сервисов", desc: "Более 50 сервисных центров" },
            ].map((item, idx) => (
              <Card key={idx} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-montserrat font-bold mb-4 text-primary">Программа технического обслуживания</h3>
                <ul className="space-y-3">
                  {[
                    "Регулярные проверки каждые 10 000 км",
                    "Использование оригинальных запчастей",
                    "Сертифицированные специалисты",
                    "Онлайн-запись в сервис",
                    "Прозрачное ценообразование",
                    "Гарантия на все работы"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-8 text-primary-foreground">
                <Icon name="Calendar" size={48} className="text-accent mb-4" />
                <h4 className="text-2xl font-bold mb-3">Запись на ТО</h4>
                <p className="mb-6 text-primary-foreground/90">Запишитесь на техническое обслуживание онлайн и получите скидку 10%</p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Записаться сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-primary mb-6">О компании DriveChina</h2>
              <p className="text-lg text-foreground mb-4">
                Мы являемся официальным дилером ведущих китайских автопроизводителей с 2018 года. Наша миссия — предоставить доступ к качественным и технологичным автомобилям по выгодным ценам.
              </p>
              <p className="text-lg text-foreground mb-6">
                За годы работы мы продали более 5000 автомобилей и заслужили доверие тысяч клиентов благодаря прозрачности, профессионализму и искренней заботе о каждом покупателе.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Проданных авто</div>
                </div>
                <div className="bg-secondary rounded-lg p-6">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Icon name="Award" size={40} className="text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Официальный дилер</h4>
                <p className="text-sm text-muted-foreground">Прямые поставки от производителя</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Users" size={40} className="text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Команда экспертов</h4>
                <p className="text-sm text-muted-foreground">Опыт работы более 5 лет</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="TrendingUp" size={40} className="text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Выгодные цены</h4>
                <p className="text-sm text-muted-foreground">Без переплат и скрытых комиссий</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Heart" size={40} className="text-accent mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Забота о клиентах</h4>
                <p className="text-sm text-muted-foreground">Поддержка 24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Контакты</h2>
            <p className="text-primary-foreground/90 text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Телефон</h3>
              <p className="text-muted-foreground mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground">Ежедневно, 9:00 - 21:00</p>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Email</h3>
              <p className="text-muted-foreground mb-2">info@drivechina.ru</p>
              <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Адрес</h3>
              <p className="text-muted-foreground mb-2">г. Москва, ул. Автомобильная, 123</p>
              <p className="text-sm text-muted-foreground">Пн-Вс, 9:00 - 21:00</p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Car" size={28} className="text-accent" />
            <span className="text-2xl font-montserrat font-bold">DriveChina</span>
          </div>
          <p className="text-primary-foreground/70">© 2024 DriveChina. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}