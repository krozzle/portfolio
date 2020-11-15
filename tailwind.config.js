module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: {
        enjoyToday: '/enjoyToday.jpg',
      },
      outline: {
        vdvPink: '0.5px solid #fa0041',
      },
      minHeight: {
        0: '0%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      colors: {
        vdvPink: '#fa0041',
      },
    },
  },
  variants: { scrollSnapType: ['responsive'] },
  plugins: [require('tailwindcss-scroll-snap')],
};
