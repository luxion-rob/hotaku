/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts,tsx,html,js}', './index.html'],
  theme: {
    screens: {
      'phone-sm': '420px',
      phone: '767px',
      tablet: '1024px',
      'tablet-lg': '1624px',
      desktop: '1964px',
      'desktop-uhd': '2400px',
    },
    extend: {
      colors: {
        primary: '#4395FB',
        black: {
          dark: '#111',
          light: '#1F1F1F',
          lightest: '#DEEFEF',
        },
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        256: '64rem',
      },
    },
  },
  plugins: [],
}
