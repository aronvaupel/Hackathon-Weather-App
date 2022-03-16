module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        sunny: "url('/sunny.webp')",
        cloudy: "url('/cloudy.webp')",
        rainy: "url('/rainy.webp')",
        snowy: "url('/snowy.webp')",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
