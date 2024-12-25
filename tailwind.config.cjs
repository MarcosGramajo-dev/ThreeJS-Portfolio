const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, white 100%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        "slide-top": "slide-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715)   alternate both"
      },
      keyframes: {
          "slide-top": {
              "0%": {
                  transform: "translateY(0)"
              },
              to: {
                  transform: "translateY(-100px)"
              }
          }
      }
    },
  },
  plugins: [],
});