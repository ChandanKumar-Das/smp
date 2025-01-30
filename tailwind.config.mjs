/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      spacing: {
        '100px': '100px',
      },
      margin: {
        '100px': '100px',
      },
      colors: {
        'custom-dark-blue': '#011833',
      },
      backgroundImage: {
        'socs-bg': "linear-gradient(rgba(255, 82, 84, 0.9), rgba(255, 82, 84, 0.9)), url('https://safarimarketingpro.com/images/socs-bg.jpg')",
        'socs-bg1': "linear-gradient(to right, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.01)), url('https://safarimarketingpro.com/images/socs-bg1.jpg')",
        'socs-bg2': "linear-gradient(rgba(1, 24, 51, 0.75), rgba(1, 24, 51, 0.75)), url('https://safarimarketingpro.com/images/gfsedmv-bg.jpg')",
        'lets-talk': "url('https://safarimarketingpro.com/images/lets-talk-img.png')",
        'custom-bg': "linear-gradient(to right, #0057ffd6 40%, #4679c587 80%, rgb(70 121 197 / 33%) 100%), url('https://safarimarketingpro.com/images/about-us-banner.jpg')",
      },
    },
  },
  plugins: [],
};
