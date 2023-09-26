/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
              'blue-primary': '#0F172A',
              'lightb': '#7477FF',
              'blue-secondary': '#1E293B'
             },
      fontFamily: {
              display: ['Poppins', 'cursive'],
              inter: ['Inter', 'sans-serif'],
              'PTSans': ['primary', 'sans'],
              }, 
               
    },
  },
  plugins: [],
}

