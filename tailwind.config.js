/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveHorizontally: {
          '0%': { transform: 'translateX(0)' },
          '50%':{ transform: 'translateX(20px)' },
          '50%':{ transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveHorizontally: 'moveHorizontally 3s linear infinite',
      },
    },
  },
  plugins: [],
};
