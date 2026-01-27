import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Download, Eye, Calendar, MapPin, Database, BookOpen, Clock } from 'lucide-react';
import { useDatasets } from '../hooks/useDatasets';
import { useCountries } from '../hooks/useCountries';
import { useThemes } from '../hooks/useThemes';
import Slider from '../../assets/sliders_secciones/DC_WEB-09.png';

export function DataCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const { countries } = useCountries();
  const { themes } = useThemes();

  useEffect(() => {
    const countryCode = searchParams.get('country');
    const themeCode = searchParams.get('theme');

    if (countryCode) {
      const country = countries.find((c) => c.code.toLowerCase() === countryCode.toLowerCase());
      if (country) {
        setSelectedCountry(country.id);
      }
    }

    if (themeCode) {
      const theme = themes.find((t) => t.code === themeCode);
      if (theme) {
        setSelectedTheme(theme.id);
      }
    }
  }, [searchParams, countries, themes]);

  const { datasets, loading } = useDatasets({
    countryId: selectedCountry || undefined,
    themeId: selectedTheme || undefined,
  });

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch =
      !searchQuery ||
      dataset.title_es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.description_es.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Coming Soon Takeover Modal - Temporarily Disabled */}
      {/* <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Database className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Próximamente
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos trabajando en el Catálogo de Datos Abiertos para ofrecerte la mejor experiencia.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
            <div className="flex items-start mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mientras tanto, únete a nuestras formaciones
                </h3>
                <p className="text-gray-700 mb-4">
                  Aprende a trabajar con datos abiertos y desarrolla capacidades para generar impacto en tu comunidad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Cursos Disponibles</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                <div className="text-sm text-gray-600">Sesiones en Vivo</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </div>

            <Link
              to="/formacion"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Clock className="h-5 w-5 mr-2" />
              Inscríbete a las Formaciones
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            El catálogo estará disponible próximamente con cientos de conjuntos de datos de la región.
          </p>
        </div>
      </div> */}

      {/* Original page content */}
      <div className="py-32 px-4" style={{ backgroundImage: `url(${Slider})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Catálogo Datos Abiertos</h1>
          <p className="text-xl text-blue-100 mb-8">
            Accede a datos públicos estratégicos de Centroamérica con estándares internacionales de metadatos, documentación completa y formatos reutilizables
          </p>

          <div className="bg-white rounded-lg p-4 flex items-center">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Buscar por título, tema, institución, país o palabra clave..."
              className="flex-1 outline-none text-gray-900 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Filtros</h2>
                <button
                  onClick={() => {
                    setSelectedCountry('');
                    setSelectedTheme('');
                    setSearchQuery('');
                  }}
                  className="text-sm text-primary-500 hover:text-blue-700"
                >
                  Limpiar
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    País
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todos los países</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.flag_emoji} {country.name_es}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tema
                  </label>
                  <select
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todos los temas</option>
                    {themes.map((theme) => (
                      <option key={theme.id} value={theme.id}>
                        {theme.name_es}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {loading ? 'Cargando...' : `${filteredDatasets.length} conjuntos de datos disponibles`}
              </p>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <Filter className="h-4 w-4 mr-2" />
                Ordenar
              </button>
            </div>

            <div className="space-y-4">
              {filteredDatasets.map((dataset) => (
                <div
                  key={dataset.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <Link
                        to={`/datos/${dataset.slug}`}
                        className="text-xl font-semibold text-gray-900 hover:text-primary-500"
                      >
                        {dataset.title_es}
                      </Link>
                      {dataset.publisher && (
                        <p className="text-sm text-gray-500 mt-1">
                          {dataset.publisher.name_es || dataset.publisher.name}
                        </p>
                      )}
                    </div>
                    {dataset.quality_rating && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          dataset.quality_rating === 'A'
                            ? 'bg-green-100 text-green-800'
                            : dataset.quality_rating === 'B'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        Calidad {dataset.quality_rating}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{dataset.description_es}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dataset.formats?.map((format) => (
                      <span
                        key={format}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {format}
                      </span>
                    ))}
                    {dataset.keywords?.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 bg-primary-500 text-white text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {dataset.temporal_start
                          ? new Date(dataset.temporal_start).getFullYear()
                          : 'N/A'}
                      </span>
                      {dataset.geographic_coverage && (
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {dataset.geographic_coverage}
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-gray-700 text-white text-xs rounded">
                        {dataset.license || 'CC BY 4.0'}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/datos/${dataset.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-primary-500 transition-colors"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Link>
                      {dataset.source_url && (
                        <a
                          href={dataset.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-primary-500 transition-colors"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Descargar
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDatasets.length === 0 && !loading && (
              <div className="text-center py-12">
                <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No se encontraron conjuntos de datos
                </h3>
                <p className="text-gray-600">
                  Intenta modificar los filtros de búsqueda o explora por país y tema
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
