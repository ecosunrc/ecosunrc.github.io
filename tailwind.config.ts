import type { Config } from 'tailwindcss';
import { mtConfig } from "@material-tailwind/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '116': '29rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // Roles semánticos
        body: ['Libre Franklin', 'sans-serif'],
        display: ['Lora', 'serif'],
        subtitle: ['Playfair Display', 'serif'],
        accent: ['Truculenta', 'sans-serif'],
        button: ['Winky Rough', 'sans-serif'],
        ui: ['Libre Franklin', 'sans-serif'],
        alt: ['Mouse Memoirs', 'sans-serif'],

        // Familias crudas por si querés acceso directo también
        geist: ['Geist', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        yeseva: ['Yeseva One', 'serif'],
        lora: ['Lora', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        truculenta: ['Truculenta', 'sans-serif'],
        winkySans: ['Winky Sans', 'sans-serif'],
        winkyRough: ['Winky Rough', 'sans-serif'],
        mouse: ['Mouse Memoirs', 'sans-serif'],
      }
    },
  },
  darkMode: 'class',
  plugins: [
    mtConfig,
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities(
        {
          '.no-spinner::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            'margin': '0',
          },
          '.no-spinner::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            'margin': '0',
          },
          '.no-spinner': {
            '-moz-appearance': 'textfield',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};

export default config;