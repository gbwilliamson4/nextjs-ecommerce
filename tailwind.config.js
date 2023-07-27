/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  plugins: [require("daisyui")],
  daisyui: {
      themes: [
        {
          mytheme: {          
            "primary": "#6670c9",                      
            "secondary": "#a1f4cf",                      
            "accent": "#ed537c",                      
            "neutral": "#1c262b",                      
            "base-100": "#253e4b",                      
            "info": "#4c90f6",                      
            "success": "#27ce88",                      
            "warning": "#f0bb6a",     
            "error": "#f62334",
            body: {
              "background-color": "e3e6e6"
            },
          },
        },
      ],
    },
}
