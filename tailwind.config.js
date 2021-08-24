module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
