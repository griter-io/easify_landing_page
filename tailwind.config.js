module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html/"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        oval: "44rem",
      },
      width: {
        400: "40rem",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      maxHeight: ["focus"],
    },
  },
  plugins: [],
};
