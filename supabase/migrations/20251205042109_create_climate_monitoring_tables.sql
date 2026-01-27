/*
  # Create Climate Monitoring System Tables

  ## Overview
  This migration creates a comprehensive climate action monitoring system for tracking climate-related datasets across Central America.

  ## New Tables

  ### 1. `climate_categories`
  Stores the 9 climate data axes based on the Climate Action Openness Guide:
  - `id` (uuid, primary key)
  - `code` (text, unique) - Short code for the category
  - `name` (text) - English name
  - `name_es` (text) - Spanish name
  - `description_es` (text) - Spanish description
  - `icon` (text) - Icon identifier
  - `color` (text) - Display color
  - `priority_order` (integer) - Display order

  ### 2. `climate_datasets`
  Links datasets to climate categories and tracks quality metrics:
  - `id` (uuid, primary key)
  - `dataset_id` (uuid, foreign key to datasets)
  - `country_id` (uuid, foreign key to countries)
  - `climate_category_id` (uuid, foreign key to climate_categories)
  - `quality_score` (integer) - Quality rating 0-100
  - `openness_level` (text) - 'high', 'medium', 'low'
  - `sector` (text) - Specific sector within category
  - `utility_rating` (text) - Usefulness assessment
  - `has_api` (boolean) - Has API access
  - `last_updated` (date) - Last dataset update
  - `update_frequency` (text) - Update cadence

  ### 3. `climate_country_stats`
  Aggregated statistics by country and category:
  - `id` (uuid, primary key)
  - `country_id` (uuid, foreign key to countries)
  - `climate_category_id` (uuid, foreign key to climate_categories)
  - `total_datasets` (integer) - Total datasets in category
  - `high_quality_count` (integer) - Number of high-quality datasets
  - `medium_quality_count` (integer) - Number of medium-quality datasets
  - `low_quality_count` (integer) - Number of low-quality datasets
  - `openness_percentage` (numeric) - Percentage of open datasets
  - `avg_quality_score` (numeric) - Average quality score
  - `identified_gaps` (text[]) - List of data gaps
  - `last_calculated` (timestamptz) - Last stats calculation

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (data is meant to be public)
  - Restrict write access to authenticated users only
*/

-- Create climate_categories table
CREATE TABLE IF NOT EXISTS climate_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  name text NOT NULL,
  name_es text NOT NULL,
  description_es text,
  icon text,
  color text DEFAULT '#3B82F6',
  priority_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create climate_datasets table
CREATE TABLE IF NOT EXISTS climate_datasets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  dataset_id uuid REFERENCES datasets(id) ON DELETE CASCADE,
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  climate_category_id uuid REFERENCES climate_categories(id) ON DELETE CASCADE,
  quality_score integer DEFAULT 0 CHECK (quality_score >= 0 AND quality_score <= 100),
  openness_level text DEFAULT 'medium' CHECK (openness_level IN ('high', 'medium', 'low')),
  sector text,
  utility_rating text,
  has_api boolean DEFAULT false,
  last_updated date,
  update_frequency text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(dataset_id, country_id, climate_category_id)
);

-- Create climate_country_stats table
CREATE TABLE IF NOT EXISTS climate_country_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  climate_category_id uuid REFERENCES climate_categories(id) ON DELETE CASCADE,
  total_datasets integer DEFAULT 0,
  high_quality_count integer DEFAULT 0,
  medium_quality_count integer DEFAULT 0,
  low_quality_count integer DEFAULT 0,
  openness_percentage numeric DEFAULT 0,
  avg_quality_score numeric DEFAULT 0,
  identified_gaps text[] DEFAULT ARRAY[]::text[],
  last_calculated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(country_id, climate_category_id)
);

-- Enable RLS
ALTER TABLE climate_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE climate_datasets ENABLE ROW LEVEL SECURITY;
ALTER TABLE climate_country_stats ENABLE ROW LEVEL SECURITY;

-- Policies for climate_categories (public read)
CREATE POLICY "Anyone can view climate categories"
  ON climate_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert climate categories"
  ON climate_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update climate categories"
  ON climate_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for climate_datasets (public read)
CREATE POLICY "Anyone can view climate datasets"
  ON climate_datasets FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert climate datasets"
  ON climate_datasets FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update climate datasets"
  ON climate_datasets FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for climate_country_stats (public read)
CREATE POLICY "Anyone can view climate country stats"
  ON climate_country_stats FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert climate country stats"
  ON climate_country_stats FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update climate country stats"
  ON climate_country_stats FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert the 9 climate data axes
INSERT INTO climate_categories (code, name, name_es, description_es, icon, color, priority_order) VALUES
  ('ghg_emissions', 'GHG Emissions', 'Emisiones de GEI', 'Inventarios nacionales de gases de efecto invernadero y datos de emisiones por sector', 'cloud', '#EF4444', 1),
  ('agriculture', 'Agriculture', 'Agricultura', 'Datos sobre prácticas agrícolas, uso de fertilizantes, ganadería y emisiones del sector', 'sprout', '#10B981', 2),
  ('land_use', 'Land Use / LULUCF', 'Uso del Suelo / UTCUTS', 'Cambios en uso de suelo, deforestación, reforestación y captura de carbono', 'trees', '#059669', 3),
  ('energy', 'Energy', 'Energía', 'Generación, consumo, eficiencia energética y transición a energías renovables', 'zap', '#F59E0B', 4),
  ('transport', 'Transport', 'Transporte', 'Datos de movilidad, parque vehicular, emisiones del transporte y movilidad sostenible', 'truck', '#8B5CF6', 5),
  ('waste', 'Waste', 'Residuos', 'Gestión de residuos sólidos, reciclaje, emisiones de metano y economía circular', 'trash-2', '#6B7280', 6),
  ('risks_disasters', 'Risks and Disasters', 'Riesgos y Desastres', 'Vulnerabilidad climática, eventos extremos, sistemas de alerta temprana y adaptación', 'alert-triangle', '#DC2626', 7),
  ('vulnerability', 'Climate Vulnerability', 'Vulnerabilidad Climática', 'Indicadores de vulnerabilidad, capacidad adaptativa y resiliencia climática', 'shield-alert', '#EA580C', 8),
  ('climate_finance', 'Climate Finance', 'Finanzas Climáticas', 'Presupuestos climáticos, inversiones en mitigación y adaptación, flujos financieros', 'dollar-sign', '#0891B2', 9)
ON CONFLICT (code) DO NOTHING;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_climate_datasets_country ON climate_datasets(country_id);
CREATE INDEX IF NOT EXISTS idx_climate_datasets_category ON climate_datasets(climate_category_id);
CREATE INDEX IF NOT EXISTS idx_climate_datasets_openness ON climate_datasets(openness_level);
CREATE INDEX IF NOT EXISTS idx_climate_country_stats_country ON climate_country_stats(country_id);
CREATE INDEX IF NOT EXISTS idx_climate_country_stats_category ON climate_country_stats(climate_category_id);
