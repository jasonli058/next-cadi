// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: '#4B4B4B',
        secondary: '#ffd9de',
        accented: '#ffc1c6',
        darker_accent: '#ff82d3ff',
      },
      
      // Custom fonts
      fontFamily: {
        body: ['Quicksand', 'sans-serif'],
      },
      
      // Custom background images
      backgroundImage: {
        'welcome': "url('/img/cadi_bg.jpg')",
        'questions': "url('/img/questions_bg.jpg')",
      },
    },
    
    // Custom breakpoints (override default screens)
    screens: {
      'up_until': {'min': '660px'},
      'xs': {'min': '300px', 'max': '766px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'medd': {'min': '748px'},
      'l': {'min': '1024px', 'max': '1278px'},
      'lg': {'min': '1289px', 'max': '2500px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  
  plugins: [],
}