/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15PX'
      },
    },
    screens: {
      sm: '640px',
      md: '760px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#1a1c1c',
        secondary: '#5e5e5c',
        accent: {
          DEFAULT: '#3acf1c',
          secondary: '#26bc18',
          tertiary: '#9dcd98',
        },
        grey: '#e9f0f1',
      },
      fontFamily: {
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departments: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../../assets/img/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/img/testimonials/quote-right.svg)',
      },
    },
  },
  plugins: [],
};
