import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  score: number;
  flag: string;
  path: string;
  center: { x: number; y: number };
}

const countries: Country[] = [
  {
    id: 'GT',
    name: 'Guatemala',
    score: 85,
    flag: '🇬🇹',
    path: 'M150,180 L170,150 L190,140 L210,150 L220,170 L210,200 L190,210 L170,200 L150,180 Z',
    center: { x: 185, y: 175 }
  },
  {
    id: 'HN',
    name: 'Honduras',
    score: 75,
    flag: '🇭🇳',
    path: 'M220,170 L250,160 L280,165 L290,180 L280,195 L250,200 L230,190 L220,170 Z',
    center: { x: 255, y: 180 }
  },
  {
    id: 'SV',
    name: 'El Salvador',
    score: 70,
    flag: '🇸🇻',
    path: 'M170,200 L190,210 L210,200 L210,220 L190,230 L170,220 L170,200 Z',
    center: { x: 190, y: 215 }
  },
  {
    id: 'NI',
    name: 'Nicaragua',
    score: 65,
    flag: '🇳🇮',
    path: 'M230,190 L250,200 L280,195 L290,210 L280,240 L260,250 L240,240 L230,220 L230,190 Z',
    center: { x: 260, y: 220 }
  },
  {
    id: 'CR',
    name: 'Costa Rica',
    score: 80,
    flag: '🇨🇷',
    path: 'M240,240 L260,250 L280,240 L270,260 L250,270 L230,260 L240,240 Z',
    center: { x: 255, y: 255 }
  }
];

interface RegionalMapProps {
  selectedCategory?: string;
}

export function RegionalMap({ selectedCategory }: RegionalMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 70) return '#3b82f6';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excelente';
    if (score >= 70) return 'Bueno';
    if (score >= 60) return 'Regular';
    return 'Necesita Mejora';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Mapa Regional de Datos Abiertos
        </h2>
        <p className="text-gray-600">
          {selectedCategory
            ? `Evaluación de ${selectedCategory}`
            : 'Haz clic en un país para ver detalles'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <svg
            viewBox="0 0 450 400"
            className="w-full h-auto"
            style={{ maxHeight: '500px' }}
          >
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
              </filter>
            </defs>

            {countries.map((country) => (
              <g key={country.id}>
                <path
                  d={country.path}
                  fill={getScoreColor(country.score)}
                  stroke="#fff"
                  strokeWidth="2"
                  opacity={
                    hoveredCountry === country.id || selectedCountry === country.id
                      ? 1
                      : hoveredCountry
                      ? 0.4
                      : 0.8
                  }
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => setSelectedCountry(country.id)}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: hoveredCountry === country.id ? 'url(#shadow)' : 'none',
                    transform:
                      hoveredCountry === country.id ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: `${country.center.x}px ${country.center.y}px`,
                  }}
                />

                <text
                  x={country.center.x}
                  y={country.center.y - 5}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white pointer-events-none"
                  style={{ userSelect: 'none' }}
                >
                  {country.flag}
                </text>
                <text
                  x={country.center.x}
                  y={country.center.y + 10}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white pointer-events-none"
                  style={{ userSelect: 'none' }}
                >
                  {country.score}
                </text>
              </g>
            ))}
          </svg>

          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#10b981' }}></div>
              <span className="text-sm text-gray-600">80-100: Excelente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3b82f6' }}></div>
              <span className="text-sm text-gray-600">70-79: Bueno</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#f59e0b' }}></div>
              <span className="text-sm text-gray-600">60-69: Regular</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ef4444' }}></div>
              <span className="text-sm text-gray-600">&lt;60: Necesita Mejora</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ranking Regional</h3>
            <div className="space-y-3">
              {[...countries]
                .sort((a, b) => b.score - a.score)
                .map((country, index) => (
                  <div
                    key={country.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedCountry === country.id
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : 'bg-white border border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedCountry(country.id)}
                    onMouseEnter={() => setHoveredCountry(country.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium text-gray-900">{country.name}</span>
                      </div>
                      <span className="font-bold text-lg" style={{ color: getScoreColor(country.score) }}>
                        {country.score}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${country.score}%`,
                          backgroundColor: getScoreColor(country.score),
                        }}
                      ></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                      {getScoreLabel(country.score)}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {selectedCountry && (
            <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">
                  {countries.find((c) => c.id === selectedCountry)?.flag}
                </span>
                <h4 className="font-bold text-gray-900">
                  {countries.find((c) => c.id === selectedCountry)?.name}
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Puntaje general: {countries.find((c) => c.id === selectedCountry)?.score}/100
              </p>
              <button
                onClick={() => setSelectedCountry(null)}
                className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Limpiar selección
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
