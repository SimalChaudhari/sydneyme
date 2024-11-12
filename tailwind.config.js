/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        firasans: ['Fira Sans'],
      },
      // Add custom class for webContainer
      spacing: {
        '1200': '1200px',  // Adds custom spacing to be used for max-width
      },
      // Custom utilities to handle `.webContainer`
      // You can use this in your HTML for custom width and behavior
      maxWidth: {
        'webContainer': '1200px', // Custom max-width for the class
      },
      colors: {
        'custome-red': '#dc3545',  
        'custome-form-text': '#475569',  
        'custome-p-color': '#9C9CA3',  
        'custome-orange': '#CFA476',  
        'custome-footer-p': '#cfa476',  
        'custome-brown': '#663333',  
        'custome-dark-brown': '#280303',  
        'custome-black': '#232323',  
        'custome-white': '#f5f5f5',  
        'custome-blue-dark': '#15015E',  
        'custome-blue-brite': '#0A4AA6',  
        'custome-blue': '#007bff',  
        'custome-yellow': '#f0ad4e',   
        'custome-gray': '#686868',  
        'custome-icon-x': '#219ff9',
        'custome-icon-fb': '#187DFF',
        'custome-icon-in': '#F70102',
      },
    },
  },
  plugins: [],
}
