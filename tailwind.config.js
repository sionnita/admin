/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes:  [{
      "light": {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        "primary": "#065f46",
        ".btn-primary": {
          "background-color": "#065f46",
          "border-color": "#065f46",
          "--bs-btn-focus-shadow-rgb" : "6, 95, 70",
          "--bs-btn-hover-bg" : "#044f3a",
        },
        ".text-primary":{
          "--bs-primary-rgb":"6, 95, 68",
        },
        ".alert-error":{
          "background-color" : "#f87272"
        },
        ".bg-primary":{
          "--bs-bg-opacity":"#065f46",
          "background-color" : "#065f46",
          "--bs-primary-rgb" : "6, 95, 70"
        },
        ".navbar":{
          "background-color" : "#065f46",
          "padding-right":20,
          "padding-left":20
        },
        ".menu":{
          "background-color" : "#065f46",
        }
      },
    }],
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  
  
}