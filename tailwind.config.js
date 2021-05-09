module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "spotify-300": "#121212",
        "spotify-200": "#181818",
        "spotify-100": "#282828",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      spacing: {
        14: "3.5rem",
        22: "5.5rem",
        200: "50rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
