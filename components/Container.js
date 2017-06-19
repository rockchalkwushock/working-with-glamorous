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
  props => ({
    backgroundColor: props.color ? `${colors.x}` : `${colors.ternary}`,
    minHeight: props.height ? null : '100vh',
    maxWidth: props.width ? '25em' : '50em',
    textAlign: props.align ? 'center' : 'left'
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
