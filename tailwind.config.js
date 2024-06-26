/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        'mpo-accent': '#cc4000',
        'mpo-bg-dark': '#151313',
        'mpo-semidark': '#2a2a2a',
        'mpo-stem-green': '#80711d',
        'mpo-whimsical': '#7C732a'
      },
      fontFamily: {
        'mpo-title': ['DM Serif Text', ...defaultTheme.fontFamily.serif],
        'mpo-body': ['', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
