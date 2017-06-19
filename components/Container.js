import glamorous from 'glamorous'

import { colors } from '../lib/styles/global'

/**
 * @summary
 * This will be the base container used in the application.
 * It excepts (2) user defined props: color & size.
 * By passing these we can dynamically change what our
 * glamorous styled div is doing.
 */
const StyledContainer = glamorous.div(
  {
    display: 'block',
    margin: 'auto'
  },
  ({ color, height, width }) => ({
    backgroundColor: color ? `${colors.x}` : `${colors.ternary}`,
    minHeight: height ? '25vh' : '100vh',
    maxWidth: width ? '25em' : '50em'
  })
)

/**
 * Use the glamorous-displayname plugin to name
 * our glamorous components in the React-DevTools.
 *
 * NOTE: Set for development ONLY!
 */
StyledContainer.displayName = 'StyledContainer'

export default StyledContainer
