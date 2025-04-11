module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts,js}"], // Ajuste selon ton projet
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'), // Ajoute le plugin ici
  ],
};

