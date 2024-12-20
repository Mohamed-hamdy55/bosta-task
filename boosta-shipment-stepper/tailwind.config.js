/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens:{
        "2560px":"2560px",
        "1440px":"1440px",
        "1024px":"1024px",
        "768px":"768px",
        "425px":"425px",
        "375px":"375px",
        "320px":"320px"
      },
      boxShadow:{
        'search-input-shadow':"0 2px 4px rgba(29, 41, 57, .05), 0 4px 16px rgba(29, 41, 57, .1)"
      },
      backgroundImage: {
        'footer-bg': "url('https://bosta.co/211acba433dca873bf3c6d79b31d53ed.png')",
      },
      content: {
        'link': 'url("https://bosta.co/ad76ad1eec079a9d5e551350271459df.svg")',
        'link-vertical': 'url("https://bosta.co/bd0b88b2672bc09f0173376f3b7f9de3.svg")',
      },
      zIndex:{
        '5' : 5
      }
    },
  },
  plugins: [],
}

