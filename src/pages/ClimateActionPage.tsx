import { ClimateMonitoring } from '../components/ClimateMonitoring';

export function ClimateActionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Monitoreando la Acción Climática
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Inventario regional completo de datasets climáticos. Clasificados por sector y utilidad,
            con medición de nivel de apertura y calidad, identificación de brechas y priorización de datos críticos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <ClimateMonitoring />

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Acerca del Mapa Climático</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué es?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un inventario regional completo que reúne TODOS los datasets climáticos disponibles por país,
                los clasifica por sector y utilidad, mide su nivel de apertura y calidad, e identifica brechas críticas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Para qué sirve?</h3>
              <p className="text-gray-700 leading-relaxed">
                Permite a gobiernos, sociedad civil y organismos internacionales identificar qué datos climáticos
                existen, cuáles faltan y qué tan abiertos y útiles son para la toma de decisiones sobre acción climática.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Componentes del Mapa:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Inventario regional completo de datasets</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Semáforo de apertura y calidad</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Buscador y filtros por país y categoría</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">KPIs regionales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">Perfiles climáticos por país</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">API regional de datos priorizados</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Guía de Apertura para Acción Climática</h3>
            <p className="text-blue-50 mb-6 max-w-3xl mx-auto leading-relaxed">
              Este observatorio está alineado con la Guía de Apertura para Acción Climática,
              que establece estándares internacionales para la publicación de datos climáticos abiertos y reutilizables.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Solicitar la Guía
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
