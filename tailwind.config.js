/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        euclidCircular: ['EuclidCircularA', 'sans-serif'],
      },
      colors: {
        // Colores primarios de la paleta
        primary: {
          50: '#f0f4fa',
          100: '#e0e9f4',
          200: '#c1d2ea',
          300: '#81b1e8',
          400: '#5a95e3',
          500: '#7FB0EA',
          600: '#2460d0',
          700: '#1a47a8',
          800: '#122f80',
          900: '#0c1858',
        },
        // Grises de la paleta
        gray: {
          50: '#f7f7fc',
          100: '#f0f4fa',
          150: '#e5e7eb',
          200: '#d3e3f2',
          300: '#c9cdd0',
          400: '#989b9e',
          500: '#5f5f5f',
          600: '#454545',
          700: '#232830',
          800: '#1a1d22',
          900: '#000000',
        },
        // Colores secundarios (del análisis)
        secondary: {
          100: '#b4d8fd',
          300: '#81b1e8',
        },
      },
    },
  },
  plugins: [],
};
