import { useState } from 'react';
import { Users, TrendingUp, AlertCircle, Download, BarChart3, Target } from 'lucide-react';

interface CountryParity {
  country: string;
  flag: string;
  parliament: number;
  executive: number;
  judicial: number;
  local: number;
  private: number;
  education: number;
  overall: number;
}

interface Sector {
  name: string;
  women: number;
  men: number;
  gap: number;
}

const parityData: CountryParity[] = [
  {
    country: 'Costa Rica',
    flag: '🇨🇷',
    parliament: 47,
    executive: 52,
    judicial: 45,
    local: 38,
    private: 35,
    education: 58,
    overall: 46,
  },
  {
    country: 'Nicaragua',
    flag: '🇳🇮',
    parliament: 48,
    executive: 46,
    judicial: 43,
    local: 42,
    private: 32,
    education: 55,
    overall: 44,
  },
  {
    country: 'El Salvador',
    flag: '🇸🇻',
    parliament: 31,
    executive: 38,
    judicial: 35,
    local: 28,
    private: 29,
    education: 52,
    overall: 36,
  },
  {
    country: 'Honduras',
    flag: '🇭🇳',
    parliament: 28,
    executive: 35,
    judicial: 32,
    local: 25,
    private: 27,
    education: 48,
    overall: 33,
  },
  {
    country: 'Guatemala',
    flag: '🇬🇹',
    parliament: 19,
    executive: 28,
    judicial: 25,
    local: 18,
    private: 24,
    education: 45,
    overall: 27,
  },
];

const sectors: Sector[] = [
  { name: 'Parlamento', women: 35, men: 65, gap: 30 },
  { name: 'Poder Ejecutivo', women: 40, men: 60, gap: 20 },
  { name: 'Poder Judicial', women: 36, men: 64, gap: 28 },
  { name: 'Gobiernos Locales', women: 30, men: 70, gap: 40 },
  { name: 'Sector Privado', women: 29, men: 71, gap: 42 },
  { name: 'Educación Superior', women: 52, men: 48, gap: -4 },
];

export function ParityStudyPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryParity | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'sectors' | 'gaps'>('overview');

  const getParityColorClass = (percentage: number) => {
    if (percentage >= 45) return 'text-green-600 bg-green-600';
    if (percentage >= 35) return 'text-yellow-600 bg-yellow-600';
    return 'text-red-600 bg-red-600';
  };

  const getParityLevel = (percentage: number) => {
    if (percentage >= 45) return 'Avanzado';
    if (percentage >= 35) return 'Intermedio';
    if (percentage >= 25) return 'Inicial';
    return 'Crítico';
  };

  const regionalAverage =
    parityData.reduce((sum, item) => sum + item.overall, 0) / parityData.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Estudio Regional de Paridad</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Análisis de la representación de género en espacios de poder y toma de decisiones en
            Centroamérica
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Target className="h-8 w-8 text-purple-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Paridad Regional</h3>
            <p className="text-3xl font-bold text-gray-900">{regionalAverage.toFixed(1)}%</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Países Evaluados</h3>
            <p className="text-3xl font-bold text-gray-900">{parityData.length}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Sectores Analizados</h3>
            <p className="text-3xl font-bold text-gray-900">{sectors.length}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Brecha Promedio</h3>
            <p className="text-3xl font-bold text-gray-900">
              {(50 - regionalAverage).toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Vista de Análisis</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('overview')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'overview'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Panorama General
              </button>
              <button
                onClick={() => setViewMode('sectors')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'sectors'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Por Sector
              </button>
              <button
                onClick={() => setViewMode('gaps')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'gaps'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Brechas de Acceso
              </button>
            </div>
          </div>

          {viewMode === 'overview' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Fichas Nacionales de Paridad
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {parityData.map((country) => {
                  const colorClasses = getParityColorClass(country.overall);
                  const textColorClass = colorClasses.split(' ')[0];
                  const bgColorClass = colorClasses.split(' ')[1];

                  return (
                    <div
                      key={country.country}
                      className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-all cursor-pointer"
                      onClick={() => setSelectedCountry(country)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl">{country.flag}</span>
                          <div>
                            <div className="font-semibold text-gray-900">{country.country}</div>
                            <div className="text-xs text-gray-600">
                              {getParityLevel(country.overall)}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${textColorClass}`}>
                            {country.overall}%
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                        <div
                          className={`${bgColorClass} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${country.overall}%` }}
                        ></div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <div className="text-gray-600">Parlamento</div>
                          <div className="font-semibold">{country.parliament}%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Ejecutivo</div>
                          <div className="font-semibold">{country.executive}%</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Judicial</div>
                          <div className="font-semibold">{country.judicial}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'sectors' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Representación por Sector
              </h3>
              <div className="space-y-6">
                {sectors.map((sector) => {
                  const gapClass =
                    Math.abs(sector.gap) <= 10
                      ? 'bg-green-100 text-green-800'
                      : Math.abs(sector.gap) <= 30
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800';

                  return (
                    <div key={sector.name} className="p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{sector.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${gapClass}`}>
                          Brecha: {Math.abs(sector.gap)}%
                        </span>
                      </div>

                      <div className="flex gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Mujeres</span>
                            <span className="font-semibold text-pink-600">{sector.women}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-6">
                            <div
                              className="bg-pink-600 h-6 rounded-full flex items-center justify-end pr-2"
                              style={{ width: `${sector.women}%` }}
                            >
                              <span className="text-white text-xs font-bold">{sector.women}%</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Hombres</span>
                            <span className="font-semibold text-blue-600">{sector.men}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-6">
                            <div
                              className="bg-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                              style={{ width: `${sector.men}%` }}
                            >
                              <span className="text-white text-xs font-bold">{sector.men}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative pt-2">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-500"></div>
                        <div className="text-center text-xs text-gray-500">Paridad ideal: 50%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'gaps' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Brechas de Acceso al Poder
              </h3>
              <div className="space-y-4">
                {parityData.map((country) => {
                  const gaps = [
                    { name: 'Parlamento', value: 50 - country.parliament },
                    { name: 'Ejecutivo', value: 50 - country.executive },
                    { name: 'Judicial', value: 50 - country.judicial },
                    { name: 'Local', value: 50 - country.local },
                    { name: 'Privado', value: 50 - country.private },
                  ];
                  const avgGap = gaps.reduce((sum, g) => sum + g.value, 0) / gaps.length;

                  return (
                    <div
                      key={country.country}
                      className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <span className="font-semibold text-gray-900">{country.country}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Brecha Promedio</div>
                          <div className="text-xl font-bold text-red-600">
                            {avgGap.toFixed(1)}%
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {gaps.map((gap) => (
                          <div key={gap.name} className="text-center">
                            <div className="mb-1">
                              <div
                                className="mx-auto rounded-full bg-red-100 flex items-center justify-center"
                                style={{
                                  width: `${Math.min(gap.value * 1.5, 80)}px`,
                                  height: `${Math.min(gap.value * 1.5, 80)}px`,
                                }}
                              >
                                <span className="text-lg font-bold text-red-600">
                                  {gap.value.toFixed(0)}%
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">{gap.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {selectedCountry && (
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{selectedCountry.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCountry.country}</h3>
                </div>
                <p className="text-gray-600">Ficha Nacional de Paridad - Datos 2024</p>
              </div>
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.parliament}%
                </div>
                <div className="text-xs text-gray-600">Parlamento</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.executive}%
                </div>
                <div className="text-xs text-gray-600">Ejecutivo</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.judicial}%
                </div>
                <div className="text-xs text-gray-600">Judicial</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.local}%
                </div>
                <div className="text-xs text-gray-600">Local</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.private}%
                </div>
                <div className="text-xs text-gray-600">Privado</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {selectedCountry.education}%
                </div>
                <div className="text-xs text-gray-600">Educación</div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              <Download className="h-5 w-5" />
              Descargar Ficha Nacional Completa
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Visualización del Poder Regional
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-3">Poder Legislativo</h4>
                <div className="space-y-2">
                  {parityData.map((country) => (
                    <div key={country.country} className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-700">{country.country}</span>
                          <span className="font-semibold">{country.parliament}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${country.parliament}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">Poder Ejecutivo</h4>
                <div className="space-y-2">
                  {parityData.map((country) => (
                    <div key={country.country} className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-700">{country.country}</span>
                          <span className="font-semibold">{country.executive}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${country.executive}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recomendaciones</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Objetivos Regionales
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Alcanzar 50% de representación en todos los poderes del Estado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>
                      Implementar cuotas vinculantes en partidos políticos y sector privado
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>
                      Fortalecer capacidades de liderazgo y participación política de mujeres
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  Áreas Críticas
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Gobiernos locales: Mayor brecha regional (promedio 30%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Sector privado: Necesita intervención urgente (promedio 29%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Desigualdad entre países: Brecha de 27 puntos entre extremos</span>
                  </li>
                </ul>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                <Download className="h-5 w-5" />
                Descargar Estudio Completo
              </button>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre este Estudio</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            El Estudio Regional de Paridad analiza la representación de mujeres en espacios de
            poder y toma de decisiones en Centroamérica, utilizando datos oficiales y metodologías
            internacionales. Los datos se actualizan anualmente.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Conocer Metodología
          </button>
        </div>
      </div>
    </div>
  );
}
