module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      outline: {
        vdvPink: '0.5px solid #fa0041',
      },
      fontFamily: {
        playfair: ['Playfair Display'],
        nunito: ['Nunito'],
        poppins: ['Poppins'],
      },
      minHeight: {
        0: '0%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        vdvPink: '#fa0041',
      },
      spacing: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  variants: { scrollSnapType: ['responsive'] },
  plugins: [require('tailwindcss-scroll-snap')],
};
