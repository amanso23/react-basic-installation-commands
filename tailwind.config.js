/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      colors: {
        'gray-750': '#2D3748',
        'dark-blue': '#18212f',
        'darker-blue': '#111827',
        'gray-blue': '#4b5563',
      },
      keyframes: {
        'spin-react': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-react': 'spin-react 6s linear infinite',
      },
    },
  },
  plugins: [],
}

