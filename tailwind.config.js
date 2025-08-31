/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
          fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
          },
          animation: {
            marquee: 'marquee 50s linear infinite',
            fadeInDown: 'fadeInDown 2s ease-out forwards',
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-200%)' },
            },
            fadeInDown: {
              '0%': { opacity: '0', transform: 'translateY(-20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
          }
        },
        variants: {
        extend: {
          animation: ['hover', 'focus'],
        }
      },
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
      {
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
      },
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
          fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
          },
          animation: {
            marquee: 'marquee 50s linear infinite',
            fadeInDown: 'fadeInDown 2s ease-out forwards',
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-200%)' },
            },
            fadeInDown: {
              '0%': { opacity: '0', transform: 'translateY(-20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
          }
        },
        variants: {
        extend: {
          animation: ['hover', 'focus'],
        }
      },
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
      {
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
      },
  ],
}