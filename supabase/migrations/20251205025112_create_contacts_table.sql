/*
  # Create contacts table
  
  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `nombre_completo` (text) - Full name of the person contacting
      - `correo_electronico` (text) - Email address
      - `asunto` (text) - Subject or reason for contact
      - `mensaje` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when the contact was submitted
      - `status` (text) - Status of the contact (new, in_progress, resolved)
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anyone to insert contact submissions
    - Add policy for authenticated admin users to read all contacts (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre_completo text NOT NULL,
  correo_electronico text NOT NULL,
  asunto text NOT NULL,
  mensaje text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);