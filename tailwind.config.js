/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        telugu: {
          saffron: {
            DEFAULT: '#E66B19',
            dark: '#C2510B',
            light: '#FF8A3D'
          },
          maroon: {
            DEFAULT: '#7A1C1C',
            dark: '#4A0E0E',
            light: '#9E2A2A'
          },
          gold: {
            DEFAULT: '#E5A93C',
            bright: '#F5C242',
            dark: '#B88219'
          },
          brown: {
            DEFAULT: '#2B160C',
            light: '#422416',
            wood: '#5C331E'
          },
          clay: {
            DEFAULT: '#B85338',
            dark: '#8C3820'
          },
          leaf: {
            DEFAULT: '#245428',
            bright: '#388E3C',
            light: '#4CAF50'
          },
          cream: {
            DEFAULT: '#FDFBF7',
            card: '#FFF8F0',
            dark: '#F3E8D8'
          }
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'thoranam-pattern': "radial-gradient(circle, #E66B19 20%, transparent 20%)",
        'wood-texture': "linear-gradient(135deg, rgba(43, 22, 12, 0.95) 0%, rgba(66, 36, 22, 0.95) 100%)",
        'festive-gradient': "linear-gradient(to right, #4A0E0E, #7A1C1C, #C2510B, #245428)",
      },
      boxShadow: {
        'festive': '0 10px 30px -5px rgba(230, 107, 25, 0.3)',
        'wood': '0 10px 25px -5px rgba(43, 22, 12, 0.5)',
        'gold': '0 0 20px rgba(229, 169, 60, 0.4)',
      }
    },
  },
  plugins: [],
}
