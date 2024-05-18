/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{html,js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lime: colors.lime,
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

