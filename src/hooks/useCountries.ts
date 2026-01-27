import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Country } from '../types/database';

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('countries')
          .select('*')
          .order('name_es');

        if (error) throw error;
        setCountries(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return { countries, loading, error };
}
