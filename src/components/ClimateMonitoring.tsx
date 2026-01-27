import { useState, useEffect } from 'react';
import {
  Cloud,
  Sprout,
  Trees,
  Zap,
  Truck,
  Trash2,
  AlertTriangle,
  ShieldAlert,
  DollarSign,
  Search,
  TrendingUp,
  Database as DatabaseIcon,
  ChevronRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useCountries } from '../hooks/useCountries';

interface ClimateCategory {
  id: string;
  code: string;
  name: string;
  name_es: string;
  description_es: string;
  icon: string;
  color: string;
  priority_order: number;
}

interface ClimateCountryStats {
  id: string;
  country_id: string;
  climate_category_id: string;
  total_datasets: number;
  high_quality_count: number;
  medium_quality_count: number;
  low_quality_count: number;
  openness_percentage: number;
  avg_quality_score: number;
  identified_gaps: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud className="h-6 w-6" />,
  sprout: <Sprout className="h-6 w-6" />,
  trees: <Trees className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  truck: <Truck className="h-6 w-6" />,
  'trash-2': <Trash2 className="h-6 w-6" />,
  'alert-triangle': <AlertTriangle className="h-6 w-6" />,
  'shield-alert': <ShieldAlert className="h-6 w-6" />,
  'dollar-sign': <DollarSign className="h-6 w-6" />,
};

export function ClimateMonitoring() {
  const { countries } = useCountries();
  const [categories, setCategories] = useState<ClimateCategory[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [countryStats, setCountryStats] = useState<ClimateCountryStats[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClimateData();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      loadCountryStats(selectedCountry);
    }
  }, [selectedCountry]);

  const loadClimateData = async () => {
    try {
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('climate_categories')
        .select('*')
        .order('priority_order');

      if (categoriesError) throw categoriesError;
      setCategories(categoriesData || []);
    } catch (error) {
      console.error('Error loading climate data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCountryStats = async (countryId: string) => {
    try {
      const { data, error } = await supabase
        .from('climate_country_stats')
        .select('*')
        .eq('country_id', countryId);

      if (error) throw error;
      setCountryStats(data || []);
    } catch (error) {
      console.error('Error loading country stats:', error);
    }
  };

  const getQualityColor = (percentage: number) => {
    if (percentage >= 70) return 'text-green-600 bg-green-100';
    if (percentage >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getQualityLabel = (percentage: number) => {
    if (percentage >= 70) return 'Alto';
    if (percentage >= 40) return 'Medio';
    return 'Bajo';
  };

  const filteredCategories = categories.filter((cat) => {
    if (!searchQuery) return true;
    return (
      cat.name_es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description_es?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const selectedCountryData = countries.find((c) => c.id === selectedCountry);
  const regionalTotalDatasets = countryStats.reduce((sum, stat) => sum + stat.total_datasets, 0);
  const regionalAvgOpenness = countryStats.length > 0
    ? countryStats.reduce((sum, stat) => sum + stat.openness_percentage, 0) / countryStats.length
    : 0;

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
          <Trees className="h-4 w-4 mr-2" />
          Especial Clima
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Monitoreando la Acción Climática
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Inventario regional completo de datos climáticos con análisis de apertura, calidad y brechas identificadas por país y categoría
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Mapa Regional</h3>
            <DatabaseIcon className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600 mb-4">Selecciona un país para ver su perfil climático:</p>
          <div className="space-y-2">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedCountry === country.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <span className="text-lg mr-2">{country.flag_emoji}</span>
                <span className="font-medium">{country.name_es}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {selectedCountry ? (
            <>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Perfil Climático: {selectedCountryData?.flag_emoji} {selectedCountryData?.name_es}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      {countryStats.reduce((sum, stat) => sum + stat.total_datasets, 0)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Datasets Climáticos</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      {countryStats.reduce((sum, stat) => sum + stat.high_quality_count, 0)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Alta Calidad</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600">
                      {countryStats.reduce((sum, stat) => sum + stat.medium_quality_count, 0)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Calidad Media</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600">
                      {countryStats.reduce((sum, stat) => sum + stat.low_quality_count, 0)}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Mejora Necesaria</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Calidad por Categoría:</h4>
                  <div className="space-y-2">
                    {countryStats.slice(0, 3).map((stat) => {
                      const category = categories.find((c) => c.id === stat.climate_category_id);
                      if (!category) return null;
                      return (
                        <div key={stat.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="text-gray-600">{iconMap[category.icon]}</div>
                            <span className="font-medium text-gray-900">{category.name_es}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600">{stat.total_datasets} datasets</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getQualityColor(stat.avg_quality_score)}`}>
                              {getQualityLabel(stat.avg_quality_score)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Selecciona un País</h3>
              <p className="text-gray-600">
                Elige un país del mapa para visualizar su perfil climático completo
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Dashboard Regional</h3>
          <TrendingUp className="h-5 w-5 text-green-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">{categories.length}</div>
            <div className="text-sm text-gray-700 font-medium">Categorías Climáticas</div>
            <div className="text-xs text-gray-600 mt-1">Según Guía de Apertura</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">{regionalTotalDatasets}</div>
            <div className="text-sm text-gray-700 font-medium">Datasets Identificados</div>
            <div className="text-xs text-gray-600 mt-1">En toda la región</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">{regionalAvgOpenness.toFixed(0)}%</div>
            <div className="text-sm text-gray-700 font-medium">Apertura Promedio</div>
            <div className="text-xs text-gray-600 mt-1">Nivel regional</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Los 9 Ejes de Datos Climáticos</h3>
          <div className="relative flex-1 max-w-md ml-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Alineados con la Guía de Apertura para Acción Climática. Cada dataset se clasifica en una de estas categorías:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg`} style={{ backgroundColor: category.color + '20', color: category.color }}>
                  {iconMap[category.icon]}
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${selectedCategory === category.id ? 'rotate-90' : ''}`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{category.name_es}</h4>
              <p className="text-xs text-gray-600 line-clamp-2">{category.description_es}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">¿Tienes datos climáticos para compartir?</h3>
        <p className="text-green-50 mb-6 max-w-2xl mx-auto">
          Ayúdanos a completar el inventario regional. Si conoces datasets climáticos que no están incluidos, contáctanos.
        </p>
        <a
          href="/contacto"
          className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
        >
          Contribuir Datos
        </a>
      </div>
    </div>
  );
}
