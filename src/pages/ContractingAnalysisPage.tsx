import { useState } from 'react';
import { AlertTriangle, Shield, Download, Building2, TrendingUp, FileText, Search } from 'lucide-react';

interface Institution {
  id: string;
  name: string;
  country: string;
  flag: string;
  totalContracts: number;
  redFlags: number;
  riskScore: number;
  category: string;
}

interface RedFlag {
  type: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  count: number;
}

const institutions: Institution[] = [
  {
    id: '1',
    name: 'Ministerio de Obras Públicas',
    country: 'Costa Rica',
    flag: '🇨🇷',
    totalContracts: 245,
    redFlags: 23,
    riskScore: 35,
    category: 'Infraestructura',
  },
  {
    id: '2',
    name: 'Instituto de Salud Pública',
    country: 'Guatemala',
    flag: '🇬🇹',
    totalContracts: 189,
    redFlags: 18,
    riskScore: 28,
    category: 'Salud',
  },
  {
    id: '3',
    name: 'Secretaría de Educación',
    country: 'Honduras',
    flag: '🇭🇳',
    totalContracts: 156,
    redFlags: 31,
    riskScore: 52,
    category: 'Educación',
  },
  {
    id: '4',
    name: 'Ministerio de Defensa',
    country: 'El Salvador',
    flag: '🇸🇻',
    totalContracts: 98,
    redFlags: 12,
    riskScore: 22,
    category: 'Seguridad',
  },
  {
    id: '5',
    name: 'Instituto Nacional de Fomento',
    country: 'Nicaragua',
    flag: '🇳🇮',
    totalContracts: 134,
    redFlags: 28,
    riskScore: 45,
    category: 'Desarrollo',
  },
];

const redFlagTypes: RedFlag[] = [
  {
    type: 'Proceso único oferente',
    description: 'Procesos de contratación con un solo participante',
    severity: 'high',
    count: 45,
  },
  {
    type: 'Plazos excesivamente cortos',
    description: 'Tiempo insuficiente para preparar ofertas',
    severity: 'high',
    count: 38,
  },
  {
    type: 'Modificaciones contractuales mayores al 30%',
    description: 'Cambios significativos en el contrato original',
    severity: 'medium',
    count: 52,
  },
  {
    type: 'Adjudicación directa sin justificación',
    description: 'Contratos asignados sin proceso competitivo',
    severity: 'high',
    count: 31,
  },
  {
    type: 'Especificaciones técnicas restrictivas',
    description: 'Requisitos que limitan la competencia',
    severity: 'medium',
    count: 28,
  },
  {
    type: 'Contratos fraccionados',
    description: 'División artificial para evitar procesos formales',
    severity: 'low',
    count: 19,
  },
];

export function ContractingAnalysisPage() {
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getRiskColor = (score: number) => {
    if (score >= 50) return 'red';
    if (score >= 30) return 'yellow';
    return 'green';
  };

  const getRiskLabel = (score: number) => {
    if (score >= 50) return 'Alto';
    if (score >= 30) return 'Medio';
    return 'Bajo';
  };

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'low':
        return 'green';
    }
  };

  const filteredInstitutions = institutions.filter((inst) => {
    const matchesCountry = filterCountry === 'all' || inst.country === filterCountry;
    const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const countries = ['all', 'Costa Rica', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua'];

  const totalRedFlags = redFlagTypes.reduce((sum, flag) => sum + flag.count, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Análisis de Banderas Rojas en Contratación Abierta
            </h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Identificación de señales de riesgo en procesos de contratación pública según
            metodología OCP (Open Contracting Partnership)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <TrendingUp className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Banderas Rojas</h3>
            <p className="text-3xl font-bold text-gray-900">{totalRedFlags}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Instituciones</h3>
            <p className="text-3xl font-bold text-gray-900">{institutions.length}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Contratos Analizados</h3>
            <p className="text-3xl font-bold text-gray-900">
              {institutions.reduce((sum, inst) => sum + inst.totalContracts, 0)}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Tasa de Riesgo</h3>
            <p className="text-3xl font-bold text-gray-900">12.3%</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Metodología OCP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Recolección de Datos
              </h3>
              <p className="text-sm text-gray-600">
                Análisis automatizado de procesos de contratación usando estándares OCDS (Open
                Contracting Data Standard)
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Detección de Patrones
              </h3>
              <p className="text-sm text-gray-600">
                Identificación de señales de riesgo mediante algoritmos que detectan anomalías y
                patrones sospechosos
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Clasificación de Riesgo
              </h3>
              <p className="text-sm text-gray-600">
                Evaluación y priorización de banderas rojas según su severidad y probabilidad de
                indicar irregularidades
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Banderas Rojas</h2>
          <div className="space-y-3">
            {redFlagTypes.map((flag) => {
              const severityClasses = flag.severity === 'high'
                ? { icon: 'text-red-600', badge: 'bg-red-100 text-red-800' }
                : flag.severity === 'medium'
                ? { icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' }
                : { icon: 'text-green-600', badge: 'bg-green-100 text-green-800' };

              return (
                <div
                  key={flag.type}
                  className="p-4 rounded-lg border border-gray-200 hover:border-red-300 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className={`h-5 w-5 ${severityClasses.icon}`} />
                        <h3 className="font-semibold text-gray-900">{flag.type}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${severityClasses.badge}`}>
                          {flag.severity === 'high'
                            ? 'Alta'
                            : flag.severity === 'medium'
                            ? 'Media'
                            : 'Baja'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{flag.description}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-gray-900">{flag.count}</div>
                      <div className="text-xs text-gray-600">casos</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Señales por Institución</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
              <Download className="h-4 w-4" />
              Descargar Dataset
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar institución..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">Todos los países</option>
              {countries
                .filter((c) => c !== 'all')
                .map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Institución
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    País
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Contratos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Banderas Rojas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Índice de Riesgo
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInstitutions.map((inst) => {
                  const riskColorClasses = inst.riskScore >= 50
                    ? { text: 'text-red-600', bg: 'bg-red-600' }
                    : inst.riskScore >= 30
                    ? { text: 'text-yellow-600', bg: 'bg-yellow-600' }
                    : { text: 'text-green-600', bg: 'bg-green-600' };

                  return (
                    <tr
                      key={inst.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedInstitution(inst)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{inst.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{inst.flag}</span>
                          <span className="text-sm text-gray-600">{inst.country}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {inst.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{inst.totalContracts}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-red-600">{inst.redFlags}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 max-w-xs">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`${riskColorClasses.bg} h-2 rounded-full`}
                                style={{ width: `${inst.riskScore}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className={`text-sm font-bold ${riskColorClasses.text}`}>
                            {inst.riskScore}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {selectedInstitution && (
          <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {selectedInstitution.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedInstitution.flag} {selectedInstitution.country} •{' '}
                  {selectedInstitution.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedInstitution(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Contratos Totales</div>
                <div className="text-2xl font-bold text-gray-900">
                  {selectedInstitution.totalContracts}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Banderas Rojas</div>
                <div className="text-2xl font-bold text-red-600">
                  {selectedInstitution.redFlags}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Nivel de Riesgo</div>
                <div
                  className={`text-2xl font-bold ${
                    selectedInstitution.riskScore >= 50
                      ? 'text-red-600'
                      : selectedInstitution.riskScore >= 30
                      ? 'text-yellow-600'
                      : 'text-green-600'
                  }`}
                >
                  {getRiskLabel(selectedInstitution.riskScore)}
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
              <Download className="h-5 w-5" />
              Descargar Análisis Detallado
            </button>
          </div>
        )}

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre la Metodología Open Contracting
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Este análisis utiliza los estándares y metodologías del Open Contracting Partnership
            (OCP) para identificar riesgos en procesos de contratación pública. Los datos se
            actualizan mensualmente y están disponibles en formato OCDS.
          </p>
          <a
            href="https://www.open-contracting.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Conocer más sobre OCP
          </a>
        </div>
      </div>
    </div>
  );
}
