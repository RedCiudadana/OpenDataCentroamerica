import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Theme } from '../types/database';

const themeIconMap: Record<string, string> = {
  'Anticorrupción': 'assets/iconos/DC_WEB-20.png',
  'Negocios y Economía': 'assets/iconos/DC_WEB-21.png',
  'Medio Ambiente y Clima': 'assets/iconos/DC_WEB-22.png',
  'Género': 'assets/iconos/DC_WEB-23.png',
  'Salud': 'assets/iconos/DC_WEB-23.png',
  'Educación': 'assets/iconos/DC_WEB-24.png',
};

export function getThemeIcon(themeName: string): string {
  return themeIconMap[themeName] || 'assets/iconos/DC_WEB-20.png';
}

export function useThemes() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchThemes() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('themes')
          .select('*')
          .order('priority_order');

        if (error) throw error;
        setThemes(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchThemes();
  }, []);

  return { themes, loading, error };
}
