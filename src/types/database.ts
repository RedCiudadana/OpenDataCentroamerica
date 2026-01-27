export interface Country {
  id: string;
  code: string;
  name: string;
  name_es: string;
  flag_emoji: string | null;
  region: string | null;
  created_at: string;
  updated_at: string;
}

export interface Theme {
  id: string;
  code: string;
  name: string;
  name_es: string;
  description: string | null;
  description_es: string | null;
  color: string | null;
  icon: string | null;
  priority_order: number | null;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: string;
  name: string;
  name_es: string | null;
  slug: string;
  description: string | null;
  description_es: string | null;
  country_id: string;
  website: string | null;
  email: string | null;
  org_type: string | null;
  created_at: string;
  updated_at: string;
}

export interface Dataset {
  id: string;
  title: string;
  title_es: string;
  slug: string;
  description: string;
  description_es: string;
  publisher_id: string;
  license: string | null;
  temporal_start: string | null;
  temporal_end: string | null;
  update_frequency: string | null;
  quality_rating: string | null;
  formats: string[] | null;
  geographic_coverage: string | null;
  keywords: string[] | null;
  source_url: string | null;
  api_endpoint: string | null;
  documentation_url: string | null;
  ethical_guidelines: string | null;
  limitations: string | null;
  created_at: string;
  updated_at: string;
}

export interface Story {
  id: string;
  title: string;
  title_es: string;
  slug: string;
  content: string;
  content_es: string;
  organization_id: string | null;
  featured_image_url: string | null;
  datasets_used: string[] | null;
  impact_metric: string | null;
  theme_id: string | null;
  country_id: string | null;
  published: boolean | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Innovation {
  id: string;
  title: string;
  title_es: string;
  slug: string;
  description: string;
  description_es: string;
  organization_id: string | null;
  country_id: string | null;
  theme_id: string | null;
  status: string | null;
  repository_url: string | null;
  demo_url: string | null;
  featured_image_url: string | null;
  datasets_used: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface DatasetWithRelations extends Dataset {
  publisher?: Organization;
  countries?: Country[];
  themes?: Theme[];
}

export interface StoryWithRelations extends Story {
  organization?: Organization;
  country?: Country;
  theme?: Theme;
}

export interface InnovationWithRelations extends Innovation {
  organization?: Organization;
  country?: Country;
  theme?: Theme;
}
