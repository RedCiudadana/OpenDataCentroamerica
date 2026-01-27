import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import logoFav from '../../assets/img/redciudadana.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [especialesOpen, setEspecialesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center text-xs">
              <span className="font-medium">{t.header.siteTitle}</span>
              <img src={logoFav} alt="Red Ciudadana" className="h-6 w-6 ml-2 object-contain" style={{ filter: 'invert(100%)' }}/>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs hidden sm:inline">{t.header.follow}</span>
              <a
                href="https://x.com/redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Redciudadanagt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCQwc62j7beStZYFzwPxBEQg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/redxguate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.redciudadana.org/assets/img/red/LOGO-RED_NEGRO.png"
              alt="Red Ciudadana"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-500 rounded-md transition-all duration-200 relative group"
            >
              {t.header.inicio}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/formacion"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-500 rounded-md transition-all duration-200 relative group"
            >
              {t.header.formacion}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/datos"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-500 rounded-md transition-all duration-200 relative group"
            >
              {t.header.catalogoDatos}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/indice-regional"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-500 rounded-md transition-all duration-200 relative group"
            >
              {t.header.indiceRegional}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Temporarily hidden - Especiales */}
            {/* <div className="relative">
              <button
                onMouseEnter={() => setEspecialesOpen(true)}
                onMouseLeave={() => setEspecialesOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md transition-all duration-200 flex items-center gap-1 relative group"
              >
                Especiales
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${especialesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
              </button>

              {especialesOpen && (
                <div
                  onMouseEnter={() => setEspecialesOpen(true)}
                  onMouseLeave={() => setEspecialesOpen(false)}
                  className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-scale-in"
                >
                  <Link
                    to="/productos/observatorio-fiscal"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-500 transition-colors"
                  >
                    Observatorio Fiscal
                  </Link>
                  <Link
                    to="/productos/banderas-rojas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-500 transition-colors"
                  >
                    Banderas Rojas
                  </Link>
                  <Link
                    to="/productos/estudio-paridad"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-500 transition-colors"
                  >
                    Estudio de Paridad
                  </Link>
                  <Link
                    to="/productos/inclusion-digital"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-500 transition-colors"
                  >
                    Inclusión Digital
                  </Link>
                  <Link
                    to="/productos/accion-climatica"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-500 transition-colors"
                  >
                    Acción Climática
                  </Link>
                </div>
              )}
            </div> */}

            <Link
              to="/contacto"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-500 rounded-md transition-all duration-200 relative group"
            >
              {t.header.contacto}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  language === 'es'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-700 hover:text-white hover:bg-primary-500'
                }`}
                aria-label="Español"
              >
                <span className="text-lg">🇬🇹</span>
                <span>ES</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-700 hover:text-white hover:bg-primary-500'
                }`}
                aria-label="English"
              >
                <span className="text-lg">🇬🇧</span>
                <span>EN</span>
              </button>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.inicio}
            </Link>

            <Link
              to="/formacion"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.formacion}
            </Link>

            <Link
              to="/datos"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.catalogoDatos}
            </Link>

            <Link
              to="/indice-regional"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.indiceRegional}
            </Link>

            {/* Temporarily hidden - Especiales */}
            {/* <div>
              <button
                onClick={() => setEspecialesOpen(!especialesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md"
              >
                Especiales
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    especialesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {especialesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/productos/observatorio-fiscal"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-blue-50 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEspecialesOpen(false);
                    }}
                  >
                    Observatorio Fiscal
                  </Link>
                  <Link
                    to="/productos/banderas-rojas"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-blue-50 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEspecialesOpen(false);
                    }}
                  >
                    Banderas Rojas
                  </Link>
                  <Link
                    to="/productos/estudio-paridad"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-blue-50 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEspecialesOpen(false);
                    }}
                  >
                    Estudio de Paridad
                  </Link>
                  <Link
                    to="/productos/inclusion-digital"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-blue-50 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEspecialesOpen(false);
                    }}
                  >
                    Inclusión Digital
                  </Link>
                  <Link
                    to="/productos/accion-climatica"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-blue-50 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEspecialesOpen(false);
                    }}
                  >
                    Acción Climática
                  </Link>
                </div>
              )}
            </div> */}

            <Link
              to="/contacto"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-blue-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.contacto}
            </Link>

            <div className="px-3 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">{t.header.language}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    language === 'es'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">🇬🇹</span>
                  <span>Español</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    language === 'en'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">🇬🇧</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
