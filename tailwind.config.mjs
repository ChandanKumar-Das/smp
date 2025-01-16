/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '100px': '100px',
      },
      margin: {
        '100px': '100px',
      },
      backgroundImage: {
        'socs-bg': "linear-gradient(rgba(255, 82, 84, 0.9), rgba(255, 82, 84, 0.9)), url('https:safarimarketingpro.com/images/socs-bg.jpg')",
        'socs-bg1': "linear-gradient(to right, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.01)), url('https://safarimarketingpro.com/images/socs-bg1.jpg')",
      },
    },
  },
  plugins: [],
};
