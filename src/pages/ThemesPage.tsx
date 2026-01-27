import { Link } from 'react-router-dom';
import { ArrowRight, Database } from 'lucide-react';
import { useThemes } from '../hooks/useThemes';

export function ThemesPage() {
  const { themes, loading } = useThemes();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Temas Prioritarios</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Seis verticales temáticos con datos armonizados, visualizaciones dinámicas y
            análisis comparados entre países
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando temas...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <Link
                key={theme.id}
                to={`/temas/${theme.code}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-gray-200 hover:border-current hover:shadow-lg transition-all group"
                style={{ color: theme.color || '#6B7280' }}
              >
                <div
                  className="h-32 flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.color || '#6B7280' }}
                >
                  <Database className="h-16 w-16 opacity-80" />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-current transition-colors">
                    {theme.name_es}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {theme.description_es}
                  </p>
                  <div className="flex items-center font-semibold text-sm">
                    Explorar datasets
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <section className="bg-blue-50 py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explora el catálogo completo de datos o sugiere nuevos temas prioritarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/datos"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Catálogo Completo
            </Link>
            <Link
              to="/acerca"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
