import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e27',
          card: '#1a1f3a',
          lighter: '#252c42',
        },
        primary: {
          blue: '#2563EB',
          cyan: '#06B6D4',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontSize: {
        'heading-lg': '3.5rem',
        'heading-md': '2.25rem',
        'heading-sm': '1.5rem',
        'body-lg': '1.125rem',
        'body-md': '1rem',
        'body-sm': '0.875rem',
      },
      spacing: {
        section: '7.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
