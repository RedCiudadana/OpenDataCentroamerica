import { Link } from 'react-router-dom';
import {
  Search,
  Database,
  TrendingUp,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { TrainingPopup } from '../components/TrainingPopup';
import { useCountries } from '../hooks/useCountries';
import { useThemes, getThemeIcon } from '../hooks/useThemes';
import { useDatasets } from '../hooks/useDatasets';
import { useTranslation } from '../hooks/useTranslation';
import Icono1 from '../../assets/iconos/DC_WEB-16.png';
import Icono2 from '../../assets/iconos/DC_WEB-17.png';
import Icono3 from '../../assets/iconos/DC_WEB-18.png';
import Icono4 from '../../assets/iconos/DC_WEB-19.png';
import LogoBritish from '../../assets/logos/british.jpeg';

export function HomePage() {
  const { countries } = useCountries();
  const { themes } = useThemes();
  const { datasets } = useDatasets({ limit: 6 });
  const { t, language } = useTranslation();

  const totalDatasets = datasets.length;

  const themeCodeToName: Record<string, string> = {
    'anticorrupcion': 'Anticorrupción',
    'negocios': 'Negocios y Economía',
    'medio-ambiente': 'Medio Ambiente y Clima',
    'genero': 'Género',
    'salud': 'Salud',
    'educacion': 'Educación',
  };

  return (
    <div className="bg-white">
      <HeroSlider />
      <TrainingPopup />

      {/* Sección de Estadísticas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="">
                  <img src={Icono1} alt="Datasets Icon" className="h-16 w-16 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>{totalDatasets}+</span>
                  <p className="text-gray-600 font-medium">{t.home.stats.datasets}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="">
                  <img src={Icono2} alt="Datasets Icon" className="h-16 w-16 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>{countries.length}</span>
                  <p className="text-gray-600 font-medium">{t.home.stats.countries}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="">
                  <img src={Icono3} alt="Datasets Icon" className="h-16 w-16 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>{themes.length}</span>
                  <p className="text-gray-600 font-medium">{t.home.stats.themes}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="">
                  <img src={Icono4} alt="Datasets Icon" className="h-16 w-16 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>100%</span>
                  <p className="text-gray-600 font-medium">{t.home.stats.openData}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Explorar Países */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in" style={{ fontFamily: 'Sora' }}>
              {t.home.exploreCountry.title}
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in" style={{ fontFamily: 'EuclidCircularA' }}>
              {t.home.exploreCountry.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <Link
                key={country.id}
                to={`/datos?country=${country.code.toLowerCase()}`}
                className="bg-white rounded-xl p-8 text-center card-hover border border-gray-100 hover:border-primary-300 hover:shadow-md group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{country.flag_emoji}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>
                    {language === 'es' ? country.name_es : country.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Temas Prioritarios */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Sora' }}>
              {t.home.priorityThemes.title}
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'EuclidCircularA' }}>
              {t.home.priorityThemes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => {
              const themeName = themeCodeToName[theme.code] || theme.name_es || theme.name;
              const themeIcon = getThemeIcon(themeName);
              return (
                <Link
                  key={theme.id}
                  to={`/datos?theme=${theme.code}`}
                  className="bg-white rounded-xl p-8 card-hover border border-gray-100 hover:border-primary-500 hover:shadow-md group relative overflow-hidden transition-all duration-300"
                  style={{ color: theme.color || '#2b68e8', animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    <div className="inline-flex">
                      <img src={`/${themeIcon}`} alt={themeName} className="h-16 w-16 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300" style={{ fontFamily: 'Sora' }}>
                      {language === 'es' ? theme.name_es : theme.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'EuclidCircularA' }}>
                      {language === 'es' ? theme.description_es : theme.description}
                    </p>
                    <div className="flex items-center text-primary-500 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: 'Sora' }}>
                      {t.home.priorityThemes.viewMore}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de Soporte */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Sora' }}>
              {t.home.support.title}
            </h2>
            <div className="flex justify-center items-center gap-8flex-wrap">
              <div className="rounded-lg p-8">
                <img
                  src="https://businessfightspoverty.org/wp-content/uploads/2024/09/FCDO-logo-600x600-1-768x576.png"
                  alt="UK Foreign, Commonwealth & Development Office"
                  className="w-56 object-contain"
                />
              </div>
              <div className="rounded-lg p-8">
                <img
                  src={LogoBritish}
                  alt="UK Embassy in Panama"
                  className="w-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA - Call To Action */}
      <section 
        className="relative py-24 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/assets/slider/DC_WEB-07.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/30"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Sora' }}>
            {t.home.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-10 leading-relaxed animate-slide-up" style={{ fontFamily: 'EuclidCircularA' }}>
            {t.home.cta.subtitle}
          </p>
          <Link
            to="/red-regional"
            className="group inline-flex items-center px-10 py-5 bg-gray-700 text-white rounded-xl font-bold text-lg"
            style={{ fontFamily: 'Sora' }}
          >
            {t.home.cta.button}
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
