import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries';
import { TrendingUp, Award, FileText, Filter, BookOpen, Clock, BarChart3 } from 'lucide-react';
import { RegionalMap } from '../components/RegionalMap';
import Slider from '../../assets/sliders_secciones/DC_WEB-10.png';

export function RegionalIndexPage() {
  const { countries } = useCountries();
  const [selectedCategory, setSelectedCategory] = useState<string>('general');

  const categories = [
    { id: 'general', name: 'General', color: 'green' },
    { id: 'politica', name: 'Política', color: 'blue' },
    { id: 'economia', name: 'Economía', color: 'yellow' },
    { id: 'justicia', name: 'Justicia', color: 'purple' },
    { id: 'ambiente', name: 'Ambiente', color: 'teal' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Coming Soon Takeover Modal - Temporarily Disabled */}
      {/* <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <BarChart3 className="h-10 w-10 text-primary-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Próximamente
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Estamos trabajando en el Índice Regional de Datos Abiertos para ofrecerte la mejor experiencia.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-8">
            <div className="flex items-start mb-4">
              <BookOpen className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-1" />
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
                <div className="text-2xl font-bold text-primary-500 mb-1">3</div>
                <div className="text-sm text-gray-600">Cursos Disponibles</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-500 mb-1">12</div>
                <div className="text-sm text-gray-600">Sesiones en Vivo</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </div>

            <Link
              to="/formacion"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              <Clock className="h-5 w-5 mr-2" />
              Inscríbete a las Formaciones
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            El índice estará disponible próximamente con evaluaciones comparadas de los países de la región.
          </p>
        </div>
      </div> */}

      {/* Original page content */}
      <div className="py-32 px-4" style={{ backgroundImage: `url(${Slider})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Índice Regional de Datos Abiertos
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Evaluación comparada del estado de los datos abiertos en Centroamérica
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <TrendingUp className="h-10 w-10 text-primary-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Progreso Regional</h3>
            <p className="text-gray-600">
              Seguimiento del avance en políticas y prácticas de datos abiertos
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Award className="h-10 w-10 text-primary-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rankings</h3>
            <p className="text-gray-600">
              Comparación de desempeño entre los cinco países participantes
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <FileText className="h-10 w-10 text-primary-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Informes Detallados</h3>
            <p className="text-gray-600">
              Análisis profundo por categoría: política, economía, justicia, ambiente
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-6 w-6 text-gray-600" />
            <h3 className="text-xl font-bold text-gray-900">Filtrar por Categoría</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <RegionalMap selectedCategory={selectedCategory} />

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Comparativo por País (2024)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posición
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    País
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Puntaje General
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Política
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Economía
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Justicia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ambiente
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {countries.map((country, index) => (
                  <tr key={country.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{country.flag_emoji}</span>
                        <span className="text-sm font-medium text-gray-900">
                          {country.name_es}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-bold text-gray-900">
                          {65 + index * 5}/100
                        </div>
                        <div className="ml-3 w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${65 + index * 5}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {60 + index * 6}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {70 + index * 4}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {55 + index * 7}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {68 + index * 5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Metodología</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            El Índice Regional evalúa políticas, disponibilidad de datos y uso social de la información en la región centroamericana.
          </p>
        </div>
      </div>
    </div>
  );
}
