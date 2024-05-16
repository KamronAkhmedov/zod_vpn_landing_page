/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      primary: '0px 20px 20px -15px #00B2FF',
      'primary-md': '0px 20px 40px -15px #00B2FF',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      black: {
        500: '#4F5665',
        600: '#0B132A',
      },
      primary: {
        200: '#bae6fd',
        400: '#38bdf8',
      },
      green: {
        500: '#2FAB73',
      },
      white: {
        300: '#F8F8F8',
        500: '#fff',
      },
      gray: {
        100: '#EEEFF2',
        400: '#AFB5C0',
        500: '#DDDDDD',
      },
    },
    extend: {
      boxShadow: ['active', 'hover']
    },
  },

  plugins: [],
}