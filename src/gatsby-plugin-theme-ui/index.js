import base from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'

export default {
  ...base,
  // useCustomProperties: true,
  initialColorMode: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
}
