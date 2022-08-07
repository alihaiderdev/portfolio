/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   // blue: '#1fb6ff',
    //   // purple: '#7e5bef',
    //   // pink: '#ff49db',
    //   // orange: '#ff7849',
    //   // green: '#13ce66',
    //   // yellow: '#ffc82c',
    //   // 'gray-dark': '#273444',
    //   // gray: '#999',
    //   // 'gray-light': '#d3dce6',
    // },

    fontFamily: {
      poppins: ['poppinsBold'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
      },
    },
  },

  plugins: [],
};
