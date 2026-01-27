import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { DatasetWithRelations } from '../types/database';

interface UseDatasetsOptions {
  countryId?: string;
  themeId?: string;
  featured?: boolean;
  limit?: number;
}

export function useDatasets(options: UseDatasetsOptions = {}) {
  const [datasets, setDatasets] = useState<DatasetWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchDatasets() {
      try {
        setLoading(true);

        let query = supabase
          .from('datasets')
          .select(`
            *,
            publisher:organizations!datasets_publisher_id_fkey(*)
          `)
          .order('created_at', { ascending: false });

        if (options.limit) {
          query = query.limit(options.limit);
        }

        const { data, error } = await query;

        if (error) throw error;

        let filteredData = data || [];

        if (options.countryId || options.themeId) {
          const datasetIds = filteredData.map(d => d.id);

          if (options.countryId) {
            const { data: countryData } = await supabase
              .from('dataset_countries')
              .select('dataset_id')
              .eq('country_id', options.countryId)
              .in('dataset_id', datasetIds);

            const countryDatasetIds = new Set(countryData?.map(d => d.dataset_id) || []);
            filteredData = filteredData.filter(d => countryDatasetIds.has(d.id));
          }

          if (options.themeId) {
            const { data: themeData } = await supabase
              .from('dataset_themes')
              .select('dataset_id')
              .eq('theme_id', options.themeId)
              .in('dataset_id', datasetIds);

            const themeDatasetIds = new Set(themeData?.map(d => d.dataset_id) || []);
            filteredData = filteredData.filter(d => themeDatasetIds.has(d.id));
          }
        }

        setDatasets(filteredData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatasets();
  }, [options.countryId, options.themeId, options.featured, options.limit]);

  return { datasets, loading, error };
}
