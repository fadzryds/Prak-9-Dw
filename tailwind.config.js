const {plugin} = require("postcss");

module.exports = {
    content: ["./src/**/*"],
    darkmode: 'class',
    theme: {
        extend: {
          colors: {
            primary: '#1E40AF', // Warna biru khusus
            secondary: '#FBBF24', // Warna kuning khusus
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
        },
      },
    plugins: [],
}