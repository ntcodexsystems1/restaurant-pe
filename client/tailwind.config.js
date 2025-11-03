/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{

 Primary:"#DFE44F",
      Secondary:"#0FB219"
      },

      fontSize:{

12:"12px",
16:"16px",
18:"18px",
14:"14px",

      },

      height: {


        height:"12%",
        body:"88%"

      }
     
    },
  },
  plugins: [],
}