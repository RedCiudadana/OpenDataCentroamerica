/*
  # Create Productos Tables for Regional Data Platform

  1. New Tables
    - `fiscal_data`
      - `id` (uuid, primary key)
      - `country_id` (uuid, foreign key to countries)
      - `year` (integer)
      - `budget` (numeric)
      - `execution` (numeric)
      - `q1_execution` (numeric)
      - `q2_execution` (numeric)
      - `q3_execution` (numeric)
      - `q4_execution` (numeric)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `contracting_red_flags`
      - `id` (uuid, primary key)
      - `institution_name` (text)
      - `country_id` (uuid, foreign key to countries)
      - `category` (text)
      - `total_contracts` (integer)
      - `red_flags_count` (integer)
      - `risk_score` (integer)
      - `flag_types` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `parity_data`
      - `id` (uuid, primary key)
      - `country_id` (uuid, foreign key to countries)
      - `year` (integer)
      - `parliament_percentage` (numeric)
      - `executive_percentage` (numeric)
      - `judicial_percentage` (numeric)
      - `local_percentage` (numeric)
      - `private_percentage` (numeric)
      - `education_percentage` (numeric)
      - `overall_score` (numeric)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated users to insert/update data
*/

-- Create fiscal_data table
CREATE TABLE IF NOT EXISTS fiscal_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  year integer NOT NULL,
  budget numeric NOT NULL DEFAULT 0,
  execution numeric NOT NULL DEFAULT 0,
  q1_execution numeric DEFAULT 0,
  q2_execution numeric DEFAULT 0,
  q3_execution numeric DEFAULT 0,
  q4_execution numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE fiscal_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view fiscal data"
  ON fiscal_data
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert fiscal data"
  ON fiscal_data
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update fiscal data"
  ON fiscal_data
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create contracting_red_flags table
CREATE TABLE IF NOT EXISTS contracting_red_flags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_name text NOT NULL,
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  category text NOT NULL DEFAULT '',
  total_contracts integer NOT NULL DEFAULT 0,
  red_flags_count integer NOT NULL DEFAULT 0,
  risk_score integer NOT NULL DEFAULT 0,
  flag_types jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contracting_red_flags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view contracting red flags"
  ON contracting_red_flags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert contracting data"
  ON contracting_red_flags
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update contracting data"
  ON contracting_red_flags
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create parity_data table
CREATE TABLE IF NOT EXISTS parity_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id uuid REFERENCES countries(id) ON DELETE CASCADE,
  year integer NOT NULL,
  parliament_percentage numeric NOT NULL DEFAULT 0,
  executive_percentage numeric NOT NULL DEFAULT 0,
  judicial_percentage numeric NOT NULL DEFAULT 0,
  local_percentage numeric NOT NULL DEFAULT 0,
  private_percentage numeric NOT NULL DEFAULT 0,
  education_percentage numeric NOT NULL DEFAULT 0,
  overall_score numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE parity_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view parity data"
  ON parity_data
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert parity data"
  ON parity_data
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update parity data"
  ON parity_data
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_fiscal_data_country ON fiscal_data(country_id);
CREATE INDEX IF NOT EXISTS idx_fiscal_data_year ON fiscal_data(year);
CREATE INDEX IF NOT EXISTS idx_contracting_country ON contracting_red_flags(country_id);
CREATE INDEX IF NOT EXISTS idx_parity_data_country ON parity_data(country_id);
CREATE INDEX IF NOT EXISTS idx_parity_data_year ON parity_data(year);
