import { Video, Download, Clock, CheckCircle2, Calendar, GraduationCap, BarChart3, FileText } from 'lucide-react';
import Slider from '../../assets/sliders_secciones/DC_WEB-08.png';

export function FormacionPage() {
  const scrollToCourse = (courseId: string) => {
    const element = document.getElementById(courseId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courses = [
    {
      id: 'curso-1',
      title: 'Curso 1',
      subtitle: 'Introducción a Datos Abiertos',
      level: 'Básico',
      icon: GraduationCap,
      gradient: 'from-primary-500 to-gray-700'
    },
    {
      id: 'curso-2',
      title: 'Curso 2',
      subtitle: 'Implementación de Proyectos',
      level: 'Intermedio',
      icon: BarChart3,
      gradient: 'from-primary-500 to-gray-700'
    },
    {
      id: 'curso-3',
      title: 'Curso 3',
      subtitle: 'Contratación Abierta',
      level: 'Especializado',
      icon: FileText,
      gradient: 'from-primary-500 to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-32 px-4" style={{ backgroundImage: `url(${Slider})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Formación en Datos Abiertos
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Desarrolla capacidades para trabajar con datos abiertos y generar impacto
            en tu comunidad
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Cursos Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <button
                  key={course.id}
                  onClick={() => scrollToCourse(course.id)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className={`h-32 bg-primary-500 ${course.gradient} flex items-center justify-center`}>
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {course.subtitle}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-gray-700">
                      NIVEL {course.level.toUpperCase()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
        {/* Temporarily hidden - Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1,200+</h3>
            <p className="text-gray-600">Personas Capacitadas</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Cursos Disponibles</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">850+</h3>
            <p className="text-gray-600">Certificados Emitidos</p>
          </div>
        </div> */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Programas de Formación</h2>
          <div className="space-y-8">
            <div id="curso-1" className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 scroll-mt-24">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">
                      Curso 1: Introducción a Datos Abiertos
                    </h3>
                    <div className="flex items-center text-sm text-gray-700 space-x-4 flex-wrap gap-2">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        2 horas / 8 a 10 am hora de Guatemala
                      </span>
                      <span className="bg-primary-50 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        NIVEL BÁSICO
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Aprende los fundamentos de datos abiertos, desde conceptos básicos hasta su aplicación práctica. Este curso está diseñado para principiantes que desean comprender qué son los datos abiertos, cómo acceder a ellos y utilizarlos de manera ética y responsable para generar impacto social.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión B1 – 22 de enero de 2026:</strong> Introducción a los Datos Abiertos</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión B2 – 29 de enero de 2026:</strong> Búsqueda y Acceso a Datos</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión B3 – 5 de febrero de 2026:</strong> Alfabetización de Datos y Lectura Crítica</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión B4 – 12 de febrero de 2026:</strong> Ética, Inclusión y Enfoque de No-Daño</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-gray-100 border-l-4 border-primary-500 rounded-r-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 mr-2" />
                  <h4 className="text-xl font-bold text-gray-700">¡Inscríbete Ahora!</h4>
                </div>
                <p className="text-center text-gray-700 text-sm">
                  Asegura tu lugar en este curso. Los cupos son limitados.
                </p>
              </div>

              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScc-GvGzCGoLTG0U1ChM2tqTNaNvfu0OnVN7dKRAVei658uFA/viewform?embedded=true"
                  width="700"
                  height="520"
                  className="border-0 w-full max-w-full"
                  title="Formulario de registro - Curso 1"
                >
                  Cargando…
                </iframe>
              </div>
            </div>

            <div id="curso-2" className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 scroll-mt-24">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">
                      Curso 2: Implementación de proyectos de Datos Abiertos
                    </h3>
                    <div className="flex items-center text-sm text-gray-700 space-x-4 flex-wrap gap-2">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        2 horas / 8 a 10 am hora de Guatemala
                      </span>
                      <span className="bg-primary-50 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        NIVEL INTERMEDIO
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Desarrolla habilidades prácticas para implementar proyectos de datos abiertos desde la preparación hasta la comunicación de resultados. Aprenderás técnicas de limpieza, análisis, visualización y storytelling con datos para crear narrativas convincentes que impulsen cambios basados en evidencia.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión A1 – 19 de febrero de 2026:</strong> Limpieza de Datos</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión A2 – 26 de febrero de 2026:</strong> Análisis Básico e Indicadores</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión A3 – 5 de marzo de 2026:</strong> Visualización de Datos</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión A4 – 12 de marzo de 2026:</strong> Narrativas y Abogacía Basada en Datos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-gray-100 border-l-4 border-primary-500 rounded-r-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 mr-2" />
                  <h4 className="text-xl font-bold text-gray-700">¡Inscríbete Ahora!</h4>
                </div>
                <p className="text-center text-gray-700 text-sm">
                  Asegura tu lugar en este curso. Los cupos son limitados.
                </p>
              </div>

              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScK58EgKRlldF5EDLS-PG2wmxfZYZNxGs72dFaDc4cKbsao0A/viewform?embedded=true"
                  width="700"
                  height="520"
                  className="border-0 w-full max-w-full"
                  title="Formulario de registro - Curso 2"
                >
                  Cargando…
                </iframe>
              </div>
            </div>

            <div id="curso-3" className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 scroll-mt-24">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">
                      Curso 3: Contratación Abierta y Análisis de Riesgos
                    </h3>
                    <div className="flex items-center text-sm text-gray-700 space-x-4 flex-wrap gap-2">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        2 horas / 8 a 10 am hora de Guatemala
                      </span>
                      <span className="bg-primary-50 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        NIVEL ESPECIALIZADO / OCP
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Curso especializado en contratación abierta utilizando el estándar OCDS (Open Contracting Data Standard). Aprende a identificar banderas rojas, realizar análisis de riesgos en contrataciones públicas, implementar observatorios temáticos y desarrollar prototipos de herramientas de monitoreo para promover la transparencia y eficiencia en las compras gubernamentales.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión S1 – 19 de marzo de 2026:</strong> Fundamentos de OCDS</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión S2 – 26 de marzo de 2026:</strong> Banderas Rojas y Análisis de Riesgos</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión S3 – 2 de abril de 2026:</strong> Observatorios Temáticos (CKAN)</span>
                  </li>
                  <li className="flex items-start text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sesión S4 – 9 de abril de 2026:</strong> Laboratorio de Prototipos y Preparación de Pitch</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-gray-100 border-l-4 border-primary-500 rounded-r-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 mr-2" />
                  <h4 className="text-xl font-bold text-gray-700">¡Inscríbete Ahora!</h4>
                </div>
                <p className="text-center text-gray-700 text-sm">
                  Asegura tu lugar en este curso. Los cupos son limitados.
                </p>
              </div>

              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfaVgMpbbBzdmXNNBfJeD4vC9wpuzaIZ_tVpm1e1DxdzGe5LA/viewform?embedded=true"
                  width="700"
                  height="520"
                  className="border-0 w-full max-w-full"
                  title="Formulario de registro - Curso 3"
                >
                  Cargando…
                </iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Videos Educativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-primary-500 flex items-center justify-center">
                <Video className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  ¿Qué son los Datos Abiertos?
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Introducción a los conceptos fundamentales de datos abiertos y su importancia.
                </p>
                <span className="text-xs text-gray-700">Duración: 12 min</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-primary-500 flex items-center justify-center">
                <Video className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Navegando el Observatorio
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Tutorial paso a paso para usar la plataforma y encontrar datos relevantes.
                </p>
                <span className="text-xs text-gray-700">Duración: 18 min</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-primary-500 flex items-center justify-center">
                <Video className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Uso de APIs de Datos
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Aprende a consumir APIs para integrar datos en tus aplicaciones.
                </p>
                <span className="text-xs text-gray-700">Duración: 25 min</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Recursos Descargables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-primary-500 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-700">Guía de Estándares de Datos</h4>
                  <p className="text-sm text-gray-700">PDF - 2.5 MB</p>
                </div>
              </div>
              <button className="px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                Descargar
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-primary-500 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-700">Manual de Visualización</h4>
                  <p className="text-sm text-gray-700">PDF - 4.1 MB</p>
                </div>
              </div>
              <button className="px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                Descargar
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-primary-500 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-700">Plantillas de Análisis</h4>
                  <p className="text-sm text-gray-700">Excel - 1.2 MB</p>
                </div>
              </div>
              <button className="px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                Descargar
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-primary-500 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-700">Casos de Estudio Regional</h4>
                  <p className="text-sm text-gray-700">PDF - 5.8 MB</p>
                </div>
              </div>
              <button className="px-4 py-2 text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                Descargar
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
