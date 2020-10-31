module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./_layouts/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        7: '1.75rem',
      },
      backgroundColor: {
        'blueish-gray': '#f5f7fa',
        primary: '#f16563',
        'dark-translucent': 'rgba(0,0,0,.1)',
        'gray-50': '#fafafa',
      },
      borderColor: {
        primary: '#f16563dd',
      },
      lineHeight: {
        'super-loose': '3.42rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
