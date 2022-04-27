module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {},
    screens: {
      'sm': '460px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      'bg':'1440'
    }
  },
  plugins: [],
}
