/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1A2E",
          50: "#0D1F37",
          100: "#0F2540",
          200: "#122D4D",
          300: "#15365A",
          400: "#1A4070",
          500: "#0B1A2E",
          600: "#091522",
          700: "#060F18",
          800: "#040A10",
          900: "#020508",
        },
        accent: {
          DEFAULT: "#D4A843",
          light: "#E4C06A",
          dark: "#B8902E",
          50: "#FBF5E6",
          100: "#F5E8C4",
          200: "#EDDA9E",
          300: "#E4C06A",
          400: "#D4A843",
          500: "#B8902E",
        },
        navy: {
          DEFAULT: "#0B1A2E",
          light: "#132844",
          lighter: "#1A3558",
          card: "#0F2240",
          surface: "#0D1E38",
          border: "#1C3A5C",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A8B8CC",
          muted: "#6B7F99",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'section': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-sm': ['1.75rem', { lineHeight: '1.25' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
