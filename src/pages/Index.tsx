import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FloatingParticles from '@/components/ui/floating-particles';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 5,
    minutes: 43,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-black to-gray-900 text-white relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-space-blue bg-clip-text text-transparent">
              FALCON 9
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Следующий запуск SpaceX
            </p>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="bg-space-blue/20 border-space-blue/50 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-5xl font-bold text-white animate-countdown-pulse">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 uppercase mt-2">
                    {unit === 'days' ? 'дни' : unit === 'hours' ? 'часы' : unit === 'minutes' ? 'мин' : 'сек'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-space-blue hover:bg-space-blue/80 text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Прямая трансляция
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg">
              <Icon name="Info" size={20} className="mr-2" />
              О миссии
            </Button>
          </div>
        </div>
      </section>

      {/* Rocket Image Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/img/2d5cb594-6a73-413d-b964-df44bdecf806.jpg" 
            alt="Falcon 9 на стартовой площадке"
            className="w-full h-96 object-cover rounded-lg mb-8 animate-rocket-launch"
          />
        </div>
      </section>

      {/* About Rocket Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">О ракете</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Rocket" size={48} className="mx-auto mb-4 text-space-blue" />
                <h3 className="text-xl font-bold mb-2 text-white">Высота</h3>
                <p className="text-3xl font-bold text-space-blue mb-2">70 м</p>
                <p className="text-gray-300">Полная высота ракеты с полезной нагрузкой</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={48} className="mx-auto mb-4 text-space-blue" />
                <h3 className="text-xl font-bold mb-2 text-white">Тяга</h3>
                <p className="text-3xl font-bold text-space-blue mb-2">7,607 кН</p>
                <p className="text-gray-300">Тяга 9 двигателей Merlin на уровне моря</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon name="Package" size={48} className="mx-auto mb-4 text-space-blue" />
                <h3 className="text-xl font-bold mb-2 text-white">Полезная нагрузка</h3>
                <p className="text-3xl font-bold text-space-blue mb-2">22,800 кг</p>
                <p className="text-gray-300">Максимальная масса на низкую орбиту Земли</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Миссия</h2>
          <p className="text-xl text-gray-300 mb-8">
            Запуск 60 спутников Starlink для расширения глобальной сети высокоскоростного интернета
          </p>
          
          <div className="aspect-video bg-space-black/50 rounded-lg border-2 border-space-blue/50 flex items-center justify-center mb-8">
            <div className="text-center">
              <Icon name="Play" size={64} className="mx-auto mb-4 text-space-blue" />
              <p className="text-lg">Прямая трансляция начнется за 15 минут до запуска</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Icon name="Target" size={24} className="mr-2 text-space-blue" />
                  Цель миссии
                </h3>
                <p className="text-gray-300">
                  Развертывание 60 спутников Starlink на орбите высотой 550 км для обеспечения глобального покрытия интернетом
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <Icon name="MapPin" size={24} className="mr-2 text-space-blue" />
                  Место запуска
                </h3>
                <p className="text-gray-300">
                  Космический центр Кеннеди, стартовая площадка 39A, Флорида, США
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Следите за SpaceX</h2>
          <p className="text-xl text-gray-300 mb-8">
            Не пропустите исторический момент
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Twitter" size={20} className="mr-2" />
              Twitter
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Icon name="Youtube" size={20} className="mr-2" />
              YouTube
            </Button>
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
              <Icon name="Facebook" size={20} className="mr-2" />
              Facebook
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 SpaceX. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;