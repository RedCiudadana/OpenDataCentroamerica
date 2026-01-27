import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Database, GraduationCap, LineChart } from 'lucide-react';

const slides = [
  {
    id: 1,
    backgroundImage: 'assets/slider/DC_WEB-07.png',
    rightImage: 'assets/slider/DC_WEB-11.png',
    icon: Database,
    title: 'Plataforma Regional de Datos Abiertos',
    subtitle: 'Centroamérica Conectada',
    description:
      'Centraliza, armoniza y publica datos estratégicos de Guatemala, El Salvador, Honduras, Costa Rica y Panamá bajo estándares internacionales',
    cta: 'Explorar Catálogo',
    ctaLink: '/datos',
    gradient: 'from-blue-600 via-blue-700 to-blue-900',
  },
  {
    id: 2,
    backgroundImage: 'assets/slider/DC_WEB-07.png',
    rightImage: 'assets/slider/DC_WEB-12.png',
    icon: GraduationCap,
    title: 'Capacitaciones en Datos Abiertos',
    subtitle: 'Fortalece tus Capacidades',
    description:
      'Participa en talleres especializados, webinars y certificaciones en análisis de datos, visualización y uso estratégico de información pública',
    cta: 'Ver Capacitaciones',
    ctaLink: '/recursos',
    gradient: 'from-green-600 via-green-700 to-green-900',
  },
  {
    id: 3,
    backgroundImage: 'assets/slider/DC_WEB-07.png',
    rightImage: 'assets/slider/DC_WEB-13.png',
    icon: LineChart,
    title: 'Productos de Datos Aplicados',
    subtitle: 'Análisis e Insights Regionales',
    description:
      'Observatorios temáticos, estudios especializados y análisis comparados que transforman datos en conocimiento accionable para la toma de decisiones',
    cta: 'Explorar Productos',
    ctaLink: '/innovacion',
    gradient: 'from-orange-600 via-orange-700 to-orange-900',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <section
      className={`relative bg-gradient-to-br ${slide.gradient} text-white py-24 px-4 overflow-hidden transition-all duration-700`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundImage: `url('/${slide.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-fade-in"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <IconComponent className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold tracking-wide">{slide.subtitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slide.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={slide.ctaLink}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                {slide.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-fade-in">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img src={`/${slide.rightImage}`} alt={slide.title} className="h-auto w-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 animate-fade-in">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-white shadow-lg' : 'w-2 bg-white/40 hover:bg-white/60 hover:w-4'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
