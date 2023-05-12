module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f54e50',
        'primary-light1': '#ff999a',
        'primary-light2': '#ffe9e9',
        'primary-dark': '#d63335',
        'gray1': '#1e1e1f',
        'gray2': '#414244',
        'gray3': '#8b9199',
        'gray5': '#dde2eb',
        'gray6': '#f5f8fc',
      },
      borderWidth: {
        0.5: '1px'
      },
      boxShadow: {
        light: '0 1px 5px 0 rgb(0 0 0 / 13%), 0 1px 7px 0 rgb(0 0 0 / 10%)',
        ultraLight: '0 1px 5px 0 rgb(0 0 0 / 5%)',
        focus: '0 0 0 2.5px #ff999a'
      },
    },
  },
};
