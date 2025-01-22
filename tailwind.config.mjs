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
        lightHover: '#FCF4FF',
        darkHover: '#2A004A',
        darkTheme: '#11001F',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
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
