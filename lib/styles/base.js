import { colors, fonts } from './global'

export default () => `
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-family: ${fonts.primary};
    font-size: 1.25em;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }
`
