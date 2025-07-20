/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: '#FDFEFE',
        background: '#F0F2F4',
        selling: '#BEE8FD',
        admin: '#F3DEFA',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}

