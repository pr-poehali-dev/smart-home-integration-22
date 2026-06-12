import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-mint-50" style={{background: "linear-gradient(135deg, #f5f3ff 0%, #f0fdf9 100%)"}}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl" style={{background: "linear-gradient(90deg, #7c3aed, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
              Код Тела
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-violet-700 transition-colors">О проекте</a>
              <a href="#services" className="text-slate-600 hover:text-violet-700 transition-colors">Возможности</a>
              <a href="#projects" className="text-slate-600 hover:text-violet-700 transition-colors">Разделы</a>
              <a href="#contact" className="text-slate-600 hover:text-violet-700 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" style={{background: "#ede9fe", color: "#6d28d9"}}>Мониторинг здоровья нового поколения</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Пойми свой организм с помощью <span style={{background: "linear-gradient(90deg, #7c3aed, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>искусственного интеллекта</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                «Код Тела» — цифровая платформа, которая собирает, анализирует и объясняет данные о вашем здоровье понятным языком. Следите за своим состоянием и принимайте осознанные решения каждый день.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" style={{background: "linear-gradient(90deg, #7c3aed, #10b981)", color: "white"}}>
                  Начать мониторинг
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-violet-300 text-violet-700 hover:bg-violet-50">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-8 text-white" style={{background: "linear-gradient(135deg, #7c3aed, #10b981)"}}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-2">🌿</div>
                  <p className="font-bold text-xl">Привет, я Юви!</p>
                  <p className="text-white/80 text-sm">Ваш AI-помощник по здоровью</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Icon name="Heart" size={20} />
                    <span className="font-medium">Уровень энергии: отличный</span>
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Icon name="TrendingUp" size={20} />
                    <span className="font-medium">Активность +12% за неделю</span>
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Icon name="Moon" size={20} />
                    <span className="font-medium">Сон: 7.5 ч — норма</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О проекте</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Единая экосистема для мониторинга здоровья, аналитики данных и персональных рекомендаций
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Данные о здоровье — понятным языком</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Многие приложения дают много цифр, но не объясняют, что с ними делать. «Код Тела» создан иначе: платформа не просто собирает показатели, но и интерпретирует их, выявляет закономерности и помогает вам принимать более осознанные решения о здоровье и образе жизни.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Мониторинг</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Энергия</Badge>
                    <Badge variant="secondary">Сон</Badge>
                    <Badge variant="secondary">Активность</Badge>
                    <Badge variant="secondary">Самочувствие</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Аналитика</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI-анализ</Badge>
                    <Badge variant="secondary">Графики</Badge>
                    <Badge variant="secondary">Тренды</Badge>
                    <Badge variant="secondary">Медданные</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-8" style={{background: "linear-gradient(135deg, #f5f3ff, #f0fdf9)"}}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: "#ede9fe"}}>
                      <Icon name="Brain" size={20} style={{color: "#7c3aed"}} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">AI-помощник Юви</p>
                      <p className="text-sm text-slate-500">Анализирует и объясняет ваши показатели</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: "#d1fae5"}}>
                      <Icon name="BarChart2" size={20} style={{color: "#10b981"}} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Визуализация данных</p>
                      <p className="text-sm text-slate-500">Графики, таблицы и цветовые индикаторы</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: "#ede9fe"}}>
                      <Icon name="FileText" size={20} style={{color: "#7c3aed"}} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Медицинские данные</p>
                      <p className="text-sm text-slate-500">Загрузка и расшифровка анализов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{background: "#f9f7ff"}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Возможности платформы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Всё необходимое для осознанного отношения к своему здоровью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: "#ede9fe"}}>
                  <Icon name="Brain" size={24} style={{color: "#7c3aed"}} />
                </div>
                <CardTitle>AI-помощник Юви</CardTitle>
                <CardDescription>
                  Интерактивный персонаж, который анализирует ваши показатели и адаптируется под ваше состояние.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Персональные рекомендации</li>
                  <li>✦ Динамические эмоции и анимации</li>
                  <li>✦ Помощь в навигации по платформе</li>
                  <li>✦ Ответы на вопросы о здоровье</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: "#d1fae5"}}>
                  <Icon name="TrendingUp" size={24} style={{color: "#10b981"}} />
                </div>
                <CardTitle>Аналитика и тренды</CardTitle>
                <CardDescription>Отслеживайте изменения самочувствия, сна и активности с наглядными графиками.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Интерактивные графики</li>
                  <li>✦ Цветовые индикаторы нормы</li>
                  <li>✦ Выявление закономерностей</li>
                  <li>✦ Сравнение по периодам</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: "#ede9fe"}}>
                  <Icon name="FileText" size={24} style={{color: "#7c3aed"}} />
                </div>
                <CardTitle>Медицинские данные</CardTitle>
                <CardDescription>Загружайте результаты анализов — платформа объяснит их простыми словами.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✦ Загрузка результатов исследований</li>
                  <li>✦ Визуализация показателей</li>
                  <li>✦ Понятные пояснения</li>
                  <li>✦ История изменений</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Разделы приложения</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Продуманная структура для удобного отслеживания здоровья
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 flex items-center justify-center" style={{background: "linear-gradient(135deg, #7c3aed, #a78bfa)"}}>
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">🌿</div>
                  <p className="font-bold text-lg">Главный экран</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Дашборд здоровья</CardTitle>
                    <CardDescription>
                      Общее состояние организма, уровень энергии, рекомендации от Юви и важные уведомления.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" style={{borderColor: "#a78bfa", color: "#7c3aed"}}>Энергия</Badge>
                  <Badge variant="outline" style={{borderColor: "#a78bfa", color: "#7c3aed"}}>Самочувствие</Badge>
                  <Badge variant="outline" style={{borderColor: "#a78bfa", color: "#7c3aed"}}>Рекомендации</Badge>
                  <Badge variant="outline" style={{borderColor: "#a78bfa", color: "#7c3aed"}}>Уведомления</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Sparkles" size={16} style={{color: "#f59e0b"}} />
                  <span>AI-персонаж Юви с динамическим настроением</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 flex items-center justify-center" style={{background: "linear-gradient(135deg, #10b981, #34d399)"}}>
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">📅</div>
                  <p className="font-bold text-lg">Календарь</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Трекер состояния</CardTitle>
                    <CardDescription>
                      Отслеживайте изменения самочувствия, сна и активности во времени на интерактивном календаре.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" style={{borderColor: "#34d399", color: "#10b981"}}>Сон</Badge>
                  <Badge variant="outline" style={{borderColor: "#34d399", color: "#10b981"}}>Активность</Badge>
                  <Badge variant="outline" style={{borderColor: "#34d399", color: "#10b981"}}>Настроение</Badge>
                  <Badge variant="outline" style={{borderColor: "#34d399", color: "#10b981"}}>История</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" size={16} style={{color: "#f59e0b", fill: "#f59e0b"}} />
                  <span>Выявление паттернов и закономерностей</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-white" style={{background: "linear-gradient(135deg, #1e1b4b, #134e4a)"}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Начните путь к осознанному здоровью</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: "rgba(255,255,255,0.7)"}}>
              Напишите нам — расскажем подробнее о платформе и поможем начать.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться с командой</h3>
              <p className="mb-8 leading-relaxed" style={{color: "rgba(255,255,255,0.7)"}}>
                «Код Тела» — это экосистема, которая объединяет мониторинг здоровья, аналитику данных и искусственный интеллект. Будем рады ответить на ваши вопросы и рассказать о возможностях платформы.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: "#7c3aed"}}>
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p style={{color: "rgba(255,255,255,0.7)"}}>hello@kodtela.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: "#10b981"}}>
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p style={{color: "rgba(255,255,255,0.7)"}}>@kodtela</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: "#7c3aed"}}>
                    <Icon name="Globe" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Сайт</p>
                    <p style={{color: "rgba(255,255,255,0.7)"}}>kodtela.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)"}}>
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription style={{color: "rgba(255,255,255,0.6)"}}>
                  Расскажите о себе — свяжемся в течение дня.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: "rgba(255,255,255,0.7)"}}>Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:ring-2"
                      style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", focusRingColor: "#7c3aed"}}
                      placeholder="Анна"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: "rgba(255,255,255,0.7)"}}>Фамилия</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:ring-2"
                      style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
                      placeholder="Иванова"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: "rgba(255,255,255,0.7)"}}>Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:ring-2"
                    style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
                    placeholder="anna@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: "rgba(255,255,255,0.7)"}}>Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:ring-2 resize-none"
                    style={{background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)"}}
                    placeholder="Расскажите, как вы хотите использовать «Код Тела»..."
                  />
                </div>
                <Button className="w-full text-white font-semibold" style={{background: "linear-gradient(90deg, #7c3aed, #10b981)"}}>
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center" style={{background: "#0f0e1a", color: "rgba(255,255,255,0.4)"}}>
        <p className="text-sm">© 2024 Код Тела. Цифровая экосистема для мониторинга здоровья.</p>
      </footer>
    </div>
  )
}
