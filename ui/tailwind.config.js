module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1859F9',
        'font-color': '#1F1930',
        'input-active': '#5F5950'
      },
      borderWidth: {
        0.5: '1px'
      },
      boxShadow: {
        light: '0 1px 5px 0 rgb(0 0 0 / 13%), 0 1px 7px 0 rgb(0 0 0 / 10%)',
        ultraLight: '0 1px 5px 0 rgb(0 0 0 / 5%)',
        focus: '0 0 0 2.5px #ff999a'
      },
      maxWidth: {
        'app': '768px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
};
