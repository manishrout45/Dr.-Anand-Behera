/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1A24',
        'ink-light': '#132A3A',
        bone: '#F3EEE4',
        clinical: '#3E8E8A',
        'clinical-bright': '#5FBDB4',
        marker: '#C99A46',
        alert: '#B5453A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
