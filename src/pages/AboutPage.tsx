import { Target, Users, Globe, Mail } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Acerca del Proyecto</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El Observatorio Regional de Datos Abiertos de Centroamérica es un bien público
            digital que fortalece la transparencia y la participación ciudadana
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Target className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Misión</h3>
            <p className="text-gray-600">
              Democratizar el acceso a datos públicos estratégicos para fortalecer la toma de
              decisiones basada en evidencia
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Users className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visión</h3>
            <p className="text-gray-600">
              Ser la plataforma de referencia regional para datos abiertos que impulse la
              transparencia y la participación ciudadana
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Globe className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Alcance</h3>
            <p className="text-gray-600">
              5 países de Centroamérica trabajando colaborativamente por datos abiertos de
              calidad
            </p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Objetivos</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Centralizar datos estratégicos regionales
                </h4>
                <p className="text-gray-600">
                  Integrar en un único repositorio datasets clave de los cinco países,
                  asegurando estándares comunes y documentación completa
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Facilitar el uso cívico y periodístico
                </h4>
                <p className="text-gray-600">
                  Proporcionar visualizaciones, tableros y herramientas que permitan a OSC,
                  periodistas y ciudadanía generar análisis e investigaciones
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Impulsar la comparabilidad regional
                </h4>
                <p className="text-gray-600">
                  Permitir análisis cruzados entre países con indicadores armonizados y
                  metodologías validadas
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Fortalecer capacidades técnicas
                </h4>
                <p className="text-gray-600">
                  Integrar formación, mini-subvenciones e iniciativas de innovación ciudadana
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                5
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Producir evidencia aplicada
                </h4>
                <p className="text-gray-600">
                  Generar productos especializados que sirvan como insumos para diálogo
                  político y toma de decisiones
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                6
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Establecer un bien público digital sostenible
                </h4>
                <p className="text-gray-600">
                  Asegurar replicabilidad, mantenibilidad y ampliación por socios regionales
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Gracias al apoyo de:
            </h2>
            <div className="flex justify-center items-center mb-16">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200 card-hover">
                <img
                  src="https://businessfightspoverty.org/wp-content/uploads/2024/09/FCDO-logo-600x600-1-768x576.png"
                  alt="UK Foreign, Commonwealth & Development Office"
                  className="h-24 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              Socios Estratégicos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center h-32 card-hover">
                <img
                  src="https://www.oas.org/imgs/en/OEA-ENG-Main-Updated-AUG2025.svg"
                  alt="OEA"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center h-32 card-hover">
                <img
                  src="https://ilda.la/wp-content/uploads/2025/01/ilda_logo-300x123.png"
                  alt="ILDA"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center h-32 card-hover">
                <img
                  src="https://hivos.org/wp-content/themes/hivos-theme-5-0/assets/img/hivos.svg"
                  alt="HIVOS"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center h-32 card-hover">
                <img
                  src="https://dobt-screendoor.s3.amazonaws.com/uploads/45e5b3913c0a278f1bc598b6bdcb2fee/thumb_OC_logo_RGB_grey__1_.png"
                  alt="Open Contracting Partnership"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre el Observatorio? ¿Quieres contribuir con datos o
            colaborar en proyectos? Escríbenos.
          </p>
          <a
            href="mailto:info@observatorio-ca.org"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            info@observatorio-ca.org
          </a>
        </section>
      </div>
    </div>
  );
}
