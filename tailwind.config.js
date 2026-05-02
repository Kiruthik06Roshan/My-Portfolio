/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        card: '#111827',
        accent: '#3B82F6',
        textPrimary: '#E5E7EB',
        textSecondary: '#9CA3AF',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(2, 6, 23, 0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
