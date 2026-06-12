import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{background: "#fff"}}>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50" style={{background: "rgba(255,255,255,0.92)", borderBottom: "1px solid #f0e6ff"}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
              Код Тела
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-500 hover:text-violet-600 transition-colors text-sm">О проекте</a>
              <a href="#services" className="text-slate-500 hover:text-violet-600 transition-colors text-sm">Возможности</a>
              <a href="#projects" className="text-slate-500 hover:text-violet-600 transition-colors text-sm">Разделы</a>
              <a href="#contact" className="text-slate-500 hover:text-violet-600 transition-colors text-sm">Контакты</a>
            </div>
            <Button size="sm" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", color: "white", border: "none"}}>
              Попробовать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{background: "linear-gradient(160deg, #fdf4ff 0%, #fce7f3 40%, #ede9fe 100%)"}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-16">
            <div>
              <Badge className="mb-5 text-sm px-4 py-1" style={{background: "linear-gradient(90deg, #f3e8ff, #fce7f3)", color: "#9333ea", border: "none"}}>
                🌸 Мониторинг здоровья нового поколения
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Пойми своё <span style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>тело.</span><br />
                Заботься о себе<br />осознанно.
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                «Код Тела» помогает расшифровывать анализы, отслеживать состояние и получать персональные рекомендации от AI — понятным языком, без медицинских терминов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-base font-semibold px-8" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", color: "white", border: "none", boxShadow: "0 8px 30px rgba(180,90,255,0.35)"}}>
                  Попробовать бесплатно
                </Button>
                <Button variant="outline" size="lg" className="text-base" style={{borderColor: "#d8b4fe", color: "#9333ea", background: "white"}}>
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#ffb3d1","#c4b5fd","#86efac","#fda4af"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{background: c}} />
                  ))}
                </div>
                <span className="text-sm text-slate-500">Более 12 000 пользователей доверяют «Коду Тела»</span>
              </div>
            </div>
            <div className="relative flex justify-center">
              {/* Phone mockup */}
              <div className="relative w-72" style={{filter: "drop-shadow(0 30px 60px rgba(180,90,255,0.25))"}}>
                <div className="rounded-[2.5rem] p-1 text-white" style={{background: "linear-gradient(135deg, #b45aff, #ff6eb4, #ffb347)"}}>
                  <div className="rounded-[2.2rem] overflow-hidden" style={{background: "#fff"}}>
                    {/* Phone header */}
                    <div className="px-5 pt-6 pb-4" style={{background: "linear-gradient(135deg, #f3e8ff, #fce7f3)"}}>
                      <p className="text-xs text-slate-400 mb-1">Добро пожаловать</p>
                      <p className="font-bold text-slate-800 text-lg">Привет, Анна! 👋</p>
                      <p className="text-xs text-slate-400 mt-1">Ваше состояние сегодня</p>
                    </div>
                    {/* Stats */}
                    <div className="px-5 py-4 space-y-3">
                      <div className="rounded-2xl p-3 flex items-center gap-3" style={{background: "linear-gradient(90deg, #f3e8ff, #fce7f3)"}}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: "#b45aff"}}>
                          <Icon name="Heart" size={16} style={{color: "white"}} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500">Энергия</p>
                          <p className="font-bold text-slate-800 text-sm">Высокая</p>
                        </div>
                        <span className="text-xs font-bold" style={{color: "#b45aff"}}>85%</span>
                      </div>
                      <div className="rounded-2xl p-3 flex items-center gap-3" style={{background: "linear-gradient(90deg, #fce7f3, #fff1f2)"}}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: "#ff6eb4"}}>
                          <Icon name="Moon" size={16} style={{color: "white"}} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500">Сон</p>
                          <p className="font-bold text-slate-800 text-sm">7 ч 30 мин</p>
                        </div>
                        <span className="text-xs font-bold" style={{color: "#ff6eb4"}}>Отлично</span>
                      </div>
                      <div className="rounded-2xl p-3 flex items-center gap-3" style={{background: "linear-gradient(90deg, #ecfdf5, #f0fdf4)"}}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: "#10b981"}}>
                          <Icon name="TrendingUp" size={16} style={{color: "white"}} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500">Активность</p>
                          <p className="font-bold text-slate-800 text-sm">+12% за неделю</p>
                        </div>
                        <span className="text-xs font-bold" style={{color: "#10b981"}}>Норма</span>
                      </div>
                      <div className="rounded-2xl p-3 text-center" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)"}}>
                        <p className="text-xs text-white/80 mb-1">🌿 Юви говорит:</p>
                        <p className="text-xs text-white font-medium">Сегодня отличный день для лёгкой прогулки!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -right-10 top-10 w-40 h-40 rounded-full blur-3xl opacity-30" style={{background: "#ff6eb4"}} />
              <div className="absolute -left-10 bottom-10 w-32 h-32 rounded-full blur-3xl opacity-30" style={{background: "#b45aff"}} />
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-14 px-4" style={{background: "#fdf4ff"}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {icon: "FileSearch", color: "#b45aff", bg: "#f3e8ff", label: "Расшифровка анализов", desc: "Понятное объяснение без сложных терминов"},
              {icon: "Calendar", color: "#ff6eb4", bg: "#fce7f3", label: "Трекинг цикла", desc: "Следите за циклом, симптомами и важными показателями"},
              {icon: "Sparkles", color: "#f59e0b", bg: "#fef9c3", label: "AI-помощник", desc: "Персональные рекомендации на основе ваших данных"},
              {icon: "Stethoscope", color: "#10b981", bg: "#d1fae5", label: "Эксперты", desc: "Консультации врачей онлайн, когда это нужно"},
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{background: f.bg}}>
                  <Icon name={f.icon} size={26} style={{color: f.color}} />
                </div>
                <p className="font-bold text-slate-800 text-sm mb-1">{f.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="py-20 px-4" style={{background: "#fff"}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Как это работает</h2>
            <p className="text-slate-500 text-lg">Три простых шага до понимания своего здоровья</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {num: "1", icon: "Upload", color: "#b45aff", bg: "linear-gradient(135deg, #f3e8ff, #ede9fe)", title: "Загрузите анализы", desc: "Прикрепите фото или PDF результатов анализов — система сразу начнёт обработку"},
              {num: "2", icon: "Brain", color: "#ff6eb4", bg: "linear-gradient(135deg, #fce7f3, #ffe4e6)", title: "AI всё проанализирует", desc: "Мы расшифруем показатели и объясним их простыми словами без медицинского жаргона"},
              {num: "3", icon: "HeartHandshake", color: "#10b981", bg: "linear-gradient(135deg, #d1fae5, #ecfdf5)", title: "Получите рекомендации", desc: "Персональные советы и поддержка врачей для вашего здоровья и образа жизни"},
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="rounded-3xl p-8 h-full" style={{background: s.bg}}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background: s.color}}>
                    <Icon name={s.icon} size={22} style={{color: "white"}} />
                  </div>
                  <div className="text-6xl font-black mb-3" style={{color: "rgba(0,0,0,0.06)"}}>{s.num}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute top-1/2 -right-4 z-10 text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4" style={{background: "linear-gradient(160deg, #fdf4ff 0%, #fce7f3 100%)"}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Возможности платформы</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Всё необходимое для осознанного отношения к своему здоровью в одном месте</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "Brain", color: "#b45aff", bg: "#f3e8ff", title: "AI-помощник Юви", desc: "Интерактивный персонаж, который адаптируется под ваше состояние и настроение.", items: ["Персональные рекомендации", "Динамические эмоции", "Помощь в навигации", "Ответы на вопросы"]},
              {icon: "BarChart2", color: "#ff6eb4", bg: "#fce7f3", title: "Аналитика и тренды", desc: "Отслеживайте изменения с наглядными графиками и цветовыми индикаторами.", items: ["Интерактивные графики", "Цветовые индикаторы нормы", "Выявление паттернов", "Сравнение по периодам"]},
              {icon: "FileText", color: "#10b981", bg: "#d1fae5", title: "Медицинские данные", desc: "Загружайте результаты анализов — платформа объяснит их простыми словами.", items: ["Загрузка результатов", "Визуализация показателей", "Понятные пояснения", "История изменений"]},
            ].map((s, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background: s.bg}}>
                    <Icon name={s.icon} size={24} style={{color: s.color}} />
                  </div>
                  <CardTitle className="text-slate-800">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full" style={{background: s.color}} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All in one app */}
      <section id="projects" className="py-20 px-4" style={{background: "#fff"}}>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 50%, #0a2e1a 100%)"}}>
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="p-10 lg:p-14">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Всё о вашем здоровье<br />в одном приложении</h2>
                <div className="space-y-3 mb-8">
                  {["Анализы и их динамика", "Цикл и симптомы", "Питание и добавки", "Настроение и энергия", "Сон и активность", "Напоминания и рекомендации"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{background: "linear-gradient(135deg, #b45aff, #ff6eb4)"}}>
                        <Icon name="Check" size={11} style={{color: "white"}} />
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="text-sm" style={{background: "white", color: "#1a0533"}}>
                    <Icon name="Apple" size={16} className="mr-2" /> App Store
                  </Button>
                  <Button size="sm" className="text-sm" style={{background: "white", color: "#1a0533"}}>
                    <Icon name="Smartphone" size={16} className="mr-2" /> Google Play
                  </Button>
                </div>
              </div>
              <div className="p-10 grid grid-cols-2 gap-4">
                {[
                  {label: "Железо", val: "45 мкг/л", norm: "Норма ↑ 30", color: "#b45aff", bg: "rgba(180,90,255,0.15)"},
                  {label: "Витамин D", val: "32 нг/мл", norm: "Норма 30–100", color: "#ff6eb4", bg: "rgba(255,110,180,0.15)"},
                  {label: "Энергия", val: "Высокая", norm: "91/100", color: "#f59e0b", bg: "rgba(245,158,11,0.15)"},
                  {label: "Сон", val: "7 + 30 мин", norm: "Отлично", color: "#10b981", bg: "rgba(16,185,129,0.15)"},
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl p-4" style={{background: m.bg, border: `1px solid ${m.color}30`}}>
                    <p className="text-white/60 text-xs mb-2">{m.label}</p>
                    <p className="text-white font-bold text-lg">{m.val}</p>
                    <p className="text-xs mt-1" style={{color: m.color}}>{m.norm}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-4" style={{background: "linear-gradient(160deg, #fdf4ff, #fce7f3)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: "#1a0533"}}>
            Мы превращаем тревогу<br />в понимание.
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Сложные медицинские данные становятся ясными — AI помогает принимать осознанные решения о здоровье.
          </p>
          <div className="flex flex-wrap gap-8 justify-center mb-4">
            {[
              {val: "12 000+", label: "пользователей"},
              {val: "98%", label: "довольны результатом"},
              {val: "50+", label: "видов анализов"},
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>{s.val}</p>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Отзывы пользователей</h2>
            <p className="text-slate-500">Реальные истории реальных людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {text: "После расшифровки анализов я наконец поняла, что со мной происходит. Всё так понятно и спокойно объясняется.", name: "Анастасия", color: "#b45aff"},
              {text: "Очень нравится, что рекомендации мягкие и без запугивания. Чувствуется забота и профессионализм.", name: "Дарья", color: "#ff6eb4"},
              {text: "Удобно, что всё в одном месте: цикл, анализы, настроение. Приложение стало моей опорой.", name: "Елена", color: "#10b981"},
            ].map((r, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Icon key={s} name="Star" size={16} style={{color: "#f59e0b", fill: "#f59e0b"}} />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">«{r.text}»</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{background: r.color}}>
                      {r.name[0]}
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">— {r.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{background: "linear-gradient(160deg, #1a0533, #0a2e1a)"}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Начните путь к осознанному здоровью</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: "rgba(255,255,255,0.6)"}}>Напишите нам — расскажем подробнее и поможем начать</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Связаться с командой</h3>
              <p className="mb-8 leading-relaxed" style={{color: "rgba(255,255,255,0.6)"}}>
                «Код Тела» объединяет мониторинг здоровья, аналитику и AI. Будем рады ответить на вопросы.
              </p>
              <div className="space-y-4">
                {[
                  {icon: "Mail", color: "#b45aff", label: "Email", val: "hello@kodtela.ru"},
                  {icon: "MessageCircle", color: "#ff6eb4", label: "Telegram", val: "@kodtela"},
                  {icon: "Globe", color: "#10b981", label: "Сайт", val: "kodtela.ru"},
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: c.color + "30", border: `1px solid ${c.color}50`}}>
                      <Icon name={c.icon} size={22} style={{color: c.color}} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{c.label}</p>
                      <p className="text-sm" style={{color: "rgba(255,255,255,0.5)"}}>{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card style={{background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)"}}>
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription style={{color: "rgba(255,255,255,0.5)"}}>Свяжемся в течение дня</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["Имя", "Фамилия"].map((lbl, i) => (
                    <div key={i}>
                      <label className="block text-xs font-medium mb-2" style={{color: "rgba(255,255,255,0.6)"}}>{lbl}</label>
                      <input type="text" className="w-full px-3 py-2 rounded-xl text-white text-sm focus:outline-none focus:ring-2" style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", focusRingColor: "#b45aff"}} placeholder={lbl === "Имя" ? "Анна" : "Иванова"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{color: "rgba(255,255,255,0.6)"}}>Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-xl text-white text-sm focus:outline-none" style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)"}} placeholder="anna@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{color: "rgba(255,255,255,0.6)"}}>Сообщение</label>
                  <textarea rows={3} className="w-full px-3 py-2 rounded-xl text-white text-sm focus:outline-none resize-none" style={{background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)"}} placeholder="Расскажите о себе..." />
                </div>
                <Button className="w-full font-semibold text-white" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", border: "none", boxShadow: "0 4px 20px rgba(180,90,255,0.4)"}}>
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4" style={{background: "#0d0120"}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-2" style={{background: "linear-gradient(90deg, #b45aff, #ff6eb4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Код Тела</p>
              <p className="text-xs" style={{color: "rgba(255,255,255,0.35)"}}>Цифровой помощник для женского здоровья</p>
            </div>
            {[
              {title: "Сервис", items: ["О сервисе", "Возможности", "Как это работает", "Тарифы"]},
              {title: "Поддержка", items: ["Блог", "FAQ", "Контакты"]},
              {title: "Документы", items: ["Политика конфиденциальности", "Пользовательское соглашение"]},
            ].map((col, i) => (
              <div key={i}>
                <p className="text-white text-sm font-semibold mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item, j) => <li key={j} className="text-xs cursor-pointer hover:text-white/60 transition-colors" style={{color: "rgba(255,255,255,0.35)"}}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 text-center" style={{borderColor: "rgba(255,255,255,0.08)"}}>
            <p className="text-xs" style={{color: "rgba(255,255,255,0.25)"}}>© 2024 Код Тела. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
