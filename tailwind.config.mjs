/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#EAF2FF',
        darkHover: '#0E2A4D',
        darkTheme: '#050C17',
        navy: {
          50: '#F0F6FF',
          100: '#DBEAFE',
          300: '#93C5FD',
          500: '#3B82F6',
          700: '#163A6B',
          800: '#0E2A4D',
          900: '#091D35',
          950: '#050C17',
        },
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        while: '4px 4px 0 #fff',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
