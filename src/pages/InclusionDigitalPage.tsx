import { useState } from 'react';
import { Wifi, Smartphone, Users, TrendingUp, Download, Globe, School, Building2 } from 'lucide-react';

interface CountryData {
  country: string;
  flag: string;
  internetAccess: number;
  mobileAccess: number;
  digitalSkills: number;
  affordability: number;
  infrastructure: number;
  overallScore: number;
}

const inclusionData: CountryData[] = [
  {
    country: 'Costa Rica',
    flag: '🇨🇷',
    internetAccess: 82,
    mobileAccess: 95,
    digitalSkills: 68,
    affordability: 75,
    infrastructure: 78,
    overallScore: 80,
  },
  {
    country: 'El Salvador',
    flag: '🇸🇻',
    internetAccess: 58,
    mobileAccess: 88,
    digitalSkills: 52,
    affordability: 62,
    infrastructure: 61,
    overallScore: 64,
  },
  {
    country: 'Guatemala',
    flag: '🇬🇹',
    internetAccess: 45,
    mobileAccess: 78,
    digitalSkills: 42,
    affordability: 48,
    infrastructure: 52,
    overallScore: 53,
  },
  {
    country: 'Honduras',
    flag: '🇭🇳',
    internetAccess: 42,
    mobileAccess: 75,
    digitalSkills: 38,
    affordability: 45,
    infrastructure: 48,
    overallScore: 50,
  },
  {
    country: 'Nicaragua',
    flag: '🇳🇮',
    internetAccess: 38,
    mobileAccess: 72,
    digitalSkills: 35,
    affordability: 42,
    infrastructure: 45,
    overallScore: 46,
  },
];

export function InclusionDigitalPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'access' | 'skills'>('overview');

  const getScoreColor = (score: number) => {
    if (score >= 70) return { text: 'text-green-600', bg: 'bg-green-600', badge: 'bg-green-100 text-green-800' };
    if (score >= 50) return { text: 'text-yellow-600', bg: 'bg-yellow-600', badge: 'bg-yellow-100 text-yellow-800' };
    return { text: 'text-red-600', bg: 'bg-red-600', badge: 'bg-red-100 text-red-800' };
  };

  const getScoreLevel = (score: number) => {
    if (score >= 70) return 'Alto';
    if (score >= 50) return 'Medio';
    return 'Bajo';
  };

  const regionalAverage = inclusionData.reduce((sum, item) => sum + item.overallScore, 0) / inclusionData.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Inclusión Digital Regional</h1>
          </div>
          <p className="text-xl text-cyan-100 max-w-3xl">
            Medición del acceso, uso y apropiación de tecnologías digitales en Centroamérica
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Globe className="h-8 w-8 text-cyan-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Índice Regional</h3>
            <p className="text-3xl font-bold text-gray-900">{regionalAverage.toFixed(1)}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Wifi className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Acceso a Internet</h3>
            <p className="text-3xl font-bold text-gray-900">
              {(inclusionData.reduce((sum, item) => sum + item.internetAccess, 0) / inclusionData.length).toFixed(0)}%
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Smartphone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Acceso Móvil</h3>
            <p className="text-3xl font-bold text-gray-900">
              {(inclusionData.reduce((sum, item) => sum + item.mobileAccess, 0) / inclusionData.length).toFixed(0)}%
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <School className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Habilidades Digitales</h3>
            <p className="text-3xl font-bold text-gray-900">
              {(inclusionData.reduce((sum, item) => sum + item.digitalSkills, 0) / inclusionData.length).toFixed(0)}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Análisis por País</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'overview'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Panorama General
              </button>
              <button
                onClick={() => setViewMode('access')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'access'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Acceso
              </button>
              <button
                onClick={() => setViewMode('skills')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'skills'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Habilidades
              </button>
            </div>
          </div>

          {viewMode === 'overview' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Índice de Inclusión Digital por País
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inclusionData.map((country) => {
                  const colors = getScoreColor(country.overallScore);

                  return (
                    <div
                      key={country.country}
                      className="p-4 rounded-lg border border-gray-200 hover:border-cyan-300 transition-all cursor-pointer"
                      onClick={() => setSelectedCountry(country)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl">{country.flag}</span>
                          <div>
                            <div className="font-semibold text-gray-900">{country.country}</div>
                            <div className="text-xs text-gray-600">
                              Nivel {getScoreLevel(country.overallScore)}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${colors.text}`}>
                            {country.overallScore}
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                        <div
                          className={`${colors.bg} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${country.overallScore}%` }}
                        ></div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <div className="text-gray-600">Internet</div>
                          <div className="font-semibold">{country.internetAccess}%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Móvil</div>
                          <div className="font-semibold">{country.mobileAccess}%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Habilidades</div>
                          <div className="font-semibold">{country.digitalSkills}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'access' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Acceso a Tecnologías Digitales
              </h3>
              {inclusionData.map((country) => (
                <div key={country.country} className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-semibold text-gray-900">{country.country}</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Acceso a Internet</span>
                        <span className="font-semibold">{country.internetAccess}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-cyan-600 h-2 rounded-full"
                          style={{ width: `${country.internetAccess}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Acceso Móvil</span>
                        <span className="font-semibold">{country.mobileAccess}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${country.mobileAccess}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Infraestructura</span>
                        <span className="font-semibold">{country.infrastructure}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${country.infrastructure}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === 'skills' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Habilidades y Alfabetización Digital
              </h3>
              {inclusionData.map((country) => {
                const skillsColors = getScoreColor(country.digitalSkills);

                return (
                  <div key={country.country} className="p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{country.flag}</span>
                        <span className="font-semibold text-gray-900">{country.country}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${skillsColors.badge}`}>
                        {getScoreLevel(country.digitalSkills)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className={`${skillsColors.bg} h-4 rounded-full flex items-center justify-end pr-2`}
                            style={{ width: `${country.digitalSkills}%` }}
                          >
                            <span className="text-white text-xs font-bold">
                              {country.digitalSkills}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right min-w-[100px]">
                        <div className="text-sm text-gray-600">Asequibilidad</div>
                        <div className="text-lg font-bold text-gray-900">{country.affordability}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {selectedCountry && (
          <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{selectedCountry.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCountry.country}</h3>
                </div>
                <p className="text-gray-600">Perfil de Inclusión Digital - 2024</p>
              </div>
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  {selectedCountry.internetAccess}%
                </div>
                <div className="text-xs text-gray-600">Internet</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  {selectedCountry.mobileAccess}%
                </div>
                <div className="text-xs text-gray-600">Móvil</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  {selectedCountry.digitalSkills}%
                </div>
                <div className="text-xs text-gray-600">Habilidades</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  {selectedCountry.affordability}%
                </div>
                <div className="text-xs text-gray-600">Asequibilidad</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">
                  {selectedCountry.infrastructure}%
                </div>
                <div className="text-xs text-gray-600">Infraestructura</div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              <Download className="h-5 w-5" />
              Descargar Perfil Completo
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brechas Digitales</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Brecha Urbano-Rural
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Las áreas rurales tienen en promedio 35% menos acceso a internet que las zonas urbanas
                </p>
                <div className="text-2xl font-bold text-red-600">35%</div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <School className="h-5 w-5 text-orange-600" />
                  Brecha de Habilidades
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Solo 47% de la población tiene habilidades digitales básicas
                </p>
                <div className="text-2xl font-bold text-orange-600">53%</div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-yellow-600" />
                  Brecha Económica
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  El costo de servicios digitales representa más del 5% del ingreso familiar promedio
                </p>
                <div className="text-2xl font-bold text-yellow-600">Crítico</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Iniciativas Regionales</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Conectividad Universal</h4>
                <p className="text-sm text-gray-600">
                  Programa regional para llevar internet de banda ancha a comunidades rurales y remotas
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Alfabetización Digital</h4>
                <p className="text-sm text-gray-600">
                  Capacitación en habilidades digitales básicas para población vulnerable
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">Gobierno Digital</h4>
                <p className="text-sm text-gray-600">
                  Digitalización de servicios públicos para mejorar acceso y transparencia
                </p>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                Ver Todas las Iniciativas
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre el Índice</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            El Índice de Inclusión Digital Regional mide el acceso, uso y apropiación de tecnologías
            digitales considerando infraestructura, asequibilidad, habilidades y uso efectivo. Los datos
            provienen de fuentes oficiales y encuestas regionales.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
            Conocer Metodología
          </button>
        </div>
      </div>
    </div>
  );
}
