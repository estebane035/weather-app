module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "principal": "#100E1D",
        "secondary": "#1E213A",
        "alter-gray": "#6E707A",
      },
      backgroundImage: {
        'heavy-cloud': "url('./../public/assets/img/HeavyCloud.png')",
      },
    },
  },
  plugins: [],
}