/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {

      colors: {
        primaryTitle: '#05ABEE',
       secondarybutton:"#FAB341",
       price:"#8EC640",
       bodycolor:"#858585",
        white:"#FFFFFF"   ,
        form:"#8EC640",
        gray:"#F5F5F5",
        placeholder:"#DADADA",
      },
    },
  },
  plugins: [],
}

