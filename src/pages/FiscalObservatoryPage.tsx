import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Download, BarChart3 } from 'lucide-react';

interface FiscalData {
  country: string;
  flag: string;
  budget: number;
  execution: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}

const fiscalData: FiscalData[] = [
  { country: 'Costa Rica', flag: '🇨🇷', budget: 15000, execution: 13500, q1: 3200, q2: 3400, q3: 3500, q4: 3400 },
  { country: 'Guatemala', flag: '🇬🇹', budget: 12500, execution: 11200, q1: 2800, q2: 2900, q3: 2700, q4: 2800 },
  { country: 'Honduras', flag: '🇭🇳', budget: 8500, execution: 7800, q1: 1900, q2: 2000, q3: 1950, q4: 1950 },
  { country: 'El Salvador', flag: '🇸🇻', budget: 7200, execution: 6800, q1: 1700, q2: 1800, q3: 1650, q4: 1650 },
  { country: 'Nicaragua', flag: '🇳🇮', budget: 6500, execution: 5900, q1: 1500, q2: 1550, q3: 1400, q4: 1450 },
];

export function FiscalObservatoryPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'budget' | 'execution' | 'quarterly'>('budget');

  const getExecutionRate = (budget: number, execution: number) => {
    return Math.round((execution / budget) * 100);
  };

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}M`;
  };

  const getTotalBudget = () => {
    return fiscalData.reduce((sum, item) => sum + item.budget, 0);
  };

  const getTotalExecution = () => {
    return fiscalData.reduce((sum, item) => sum + item.execution, 0);
  };

  const getAverageExecutionRate = () => {
    const total = fiscalData.reduce((sum, item) => sum + getExecutionRate(item.budget, item.execution), 0);
    return Math.round(total / fiscalData.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Observatorio Fiscal Regional
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Seguimiento transparente de presupuestos públicos y su ejecución en Centroamérica
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Presupuesto Total</h3>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(getTotalBudget())}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="h-8 w-8 text-green-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Ejecución Total</h3>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(getTotalExecution())}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="h-8 w-8 text-yellow-600" />
              <TrendingDown className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Tasa Promedio</h3>
            <p className="text-3xl font-bold text-gray-900">{getAverageExecutionRate()}%</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Download className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Países Monitoreados</h3>
            <p className="text-3xl font-bold text-gray-900">{fiscalData.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Vista de Análisis</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('budget')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'budget'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Presupuesto
              </button>
              <button
                onClick={() => setViewMode('execution')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'execution'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Ejecución
              </button>
              <button
                onClick={() => setViewMode('quarterly')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'quarterly'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Trimestral
              </button>
            </div>
          </div>

          {viewMode === 'budget' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Comparación de Presupuestos Asignados 2024
              </h3>
              {fiscalData.map((item) => {
                const maxBudget = Math.max(...fiscalData.map((d) => d.budget));
                const percentage = (item.budget / maxBudget) * 100;
                return (
                  <div
                    key={item.country}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
                    onClick={() => setSelectedCountry(item.country)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.flag}</span>
                        <span className="font-semibold text-gray-900">{item.country}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        {formatCurrency(item.budget)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {viewMode === 'execution' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tasas de Ejecución Presupuestaria
              </h3>
              {fiscalData.map((item) => {
                const rate = getExecutionRate(item.budget, item.execution);
                const colorClasses = rate >= 90
                  ? { text: 'text-green-600', bg: 'bg-green-600' }
                  : rate >= 75
                  ? { text: 'text-yellow-600', bg: 'bg-yellow-600' }
                  : { text: 'text-red-600', bg: 'bg-red-600' };
                return (
                  <div
                    key={item.country}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.flag}</span>
                        <div>
                          <div className="font-semibold text-gray-900">{item.country}</div>
                          <div className="text-sm text-gray-600">
                            {formatCurrency(item.execution)} / {formatCurrency(item.budget)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${colorClasses.text}`}>{rate}%</div>
                        <div className="text-xs text-gray-600">Ejecutado</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${colorClasses.bg} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${rate}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {viewMode === 'quarterly' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Variaciones Trimestrales 2024
              </h3>
              {fiscalData.map((item) => {
                const quarters = [
                  { label: 'Q1', value: item.q1 },
                  { label: 'Q2', value: item.q2 },
                  { label: 'Q3', value: item.q3 },
                  { label: 'Q4', value: item.q4 },
                ];
                const maxQuarterly = Math.max(item.q1, item.q2, item.q3, item.q4);
                return (
                  <div
                    key={item.country}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-semibold text-gray-900">{item.country}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {quarters.map((quarter, index) => {
                        const prevValue = index > 0 ? quarters[index - 1].value : quarter.value;
                        const variation = ((quarter.value - prevValue) / prevValue) * 100;
                        const heightPercent = (quarter.value / maxQuarterly) * 100;
                        return (
                          <div key={quarter.label} className="text-center">
                            <div className="h-32 flex items-end justify-center mb-2">
                              <div
                                className="w-full bg-blue-600 rounded-t transition-all duration-500"
                                style={{ height: `${heightPercent}%` }}
                              ></div>
                            </div>
                            <div className="text-sm font-semibold text-gray-900">
                              {quarter.label}
                            </div>
                            <div className="text-xs text-gray-600">
                              {formatCurrency(quarter.value)}
                            </div>
                            {index > 0 && (
                              <div
                                className={`text-xs font-medium ${
                                  variation >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}
                              >
                                {variation >= 0 ? '+' : ''}
                                {variation.toFixed(1)}%
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visualizaciones Comparativas</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Distribución Regional del Presupuesto
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Costa Rica lidera con el 30% del presupuesto total regional
                </p>
                <div className="space-y-2">
                  {fiscalData.map((item) => {
                    const percentage = (item.budget / getTotalBudget()) * 100;
                    return (
                      <div key={item.country} className="flex items-center gap-2">
                        <span className="text-lg">{item.flag}</span>
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-700">{item.country}</span>
                            <span className="font-semibold">{percentage.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <Download className="h-5 w-5" />
                Descargar Datos Completos
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Análisis de Eficiencia</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Top Performers</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Países con mejor tasa de ejecución presupuestaria
                </p>
                <div className="space-y-2">
                  {[...fiscalData]
                    .sort((a, b) => getExecutionRate(b.budget, b.execution) - getExecutionRate(a.budget, a.execution))
                    .slice(0, 3)
                    .map((item, index) => {
                      const rate = getExecutionRate(item.budget, item.execution);
                      return (
                        <div key={item.country} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                            <span className="text-xl">{item.flag}</span>
                            <span className="text-sm font-medium text-gray-900">
                              {item.country}
                            </span>
                          </div>
                          <span className="text-lg font-bold text-green-600">{rate}%</span>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Recomendaciones</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Mejorar la planificación presupuestaria trimestral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Implementar sistemas de seguimiento en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Fortalecer capacidades institucionales de ejecución</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Actualización de Datos</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Los datos del Observatorio Fiscal se actualizan mensualmente con información oficial
            de las entidades fiscales de cada país. Última actualización: Diciembre 2024
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            <Download className="h-5 w-5" />
            Exportar Informe Completo
          </button>
        </div>
      </div>
    </div>
  );
}
