import { Link } from 'react-router-dom';
import { Database, Twitter, Mail, Filter } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import logo from '../../assets/img/LOGO-RED_NEGRO.png';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Logo Red Ciudadana" className="h-12 w-auto" style={{ filter: 'invert(100%)' }} />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://x.com/redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Redciudadanagt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCQwc62j7beStZYFzwPxBEQg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/redxguate/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@redxguate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="mailto:info@observatorio-ca.org"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Temporarily hidden - Navegación Section */}
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Navegación
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/datos" className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Catálogo Datos Abiertos
                </Link>
              </li>
              <li>
                <Link to="/temas" className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Temas Prioritarios
                </Link>
              </li>
              <li>
                <Link to="/productos/observatorio-fiscal" className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/indice-regional"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Índice Regional
                </Link>
              </li>
              <li>
                <Link
                  to="/red-regional"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Red Regional
                </Link>
              </li>
              <li>
                <Link to="/formacion" className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Formación
                </Link>
              </li>
              <li>
                <Link to="/acerca" className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Acerca
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Temporarily hidden - Productos Section */}
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Productos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/productos/observatorio-fiscal"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Observatorio Fiscal
                </Link>
              </li>
              <li>
                <Link
                  to="/productos/banderas-rojas"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Banderas Rojas
                </Link>
              </li>
              <li>
                <Link
                  to="/productos/paridad"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Estudio de Paridad
                </Link>
              </li>
              <li>
                <Link
                  to="/productos/inclusion-digital"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Inclusión Digital
                </Link>
              </li>
              <li>
                <Link
                  to="/productos/accion-climatica"
                  className="text-sm hover:text-blue-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Acción Climática
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {t.footer.resources}
              <span className="absolute top-10 left-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-3">
              {/* <li>
                <a
                  href="/api/docs"
                  className="text-sm hover:text-primary-500 transition-all duration-200 hover:translate-x-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.apiDocs}
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:info@observatorio-ca.org"
                  className="text-sm hover:text-primary-500 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacidad" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                {t.footer.privacy}
              </Link>
              <Link to="/terminos" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
