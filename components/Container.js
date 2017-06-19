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
    bottom: props.results ? '0' : null,
    left: props.results ? '25%' : null,
    maxWidth: props.width ? '25em' : '50em',
    minHeight: props.height ? '25vh' : '100vh',
    position: props.results ? 'absolute' : null,
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
