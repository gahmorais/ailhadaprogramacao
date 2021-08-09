module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};

const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  "brown-100": "#FFEBC9",
  "brown-600": "#753422",
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  unknown: "#68A090",
  shadow: "#353b48",
  "bug-dark": "#6D7815",
  "dark-dark": "#49392F",
  "dragon-dark": "#4924A1",
  "electric-dark": "#A1871F",
  "fairy-dark": "#9B6470",
  "fighting-dark": "#7D1F1A",
  "fire-dark": "#9C531F",
  "flying-dark": "#6D5E9C",
  "ghost-dark": "#493963",
  "grass-dark": "#4E8234",
  "ground-dark": "#927D44",
  "ice-dark": "#638D8D",
  "normal-dark": "#6D6D4E",
  "poison-dark": "#682A68",
  "psychic-dark": "#A13959",
  "rock-dark": "#786824",
  "steel-dark": "#787887",
  "shadow-dark": "#2f3640",
  "unknown-dark": "#44685E",
  "water-dark": "#6890F0",
};

module.exports = {
  theme: {
    colors: colors,
  },
};
