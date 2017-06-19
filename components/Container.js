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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  ({ parent }) => ({
    backgroundColor: parent ? `${colors.secondary}` : null,
    flex: parent ? null : '1 1 auto',
    margin: parent ? 'auto' : '0',
    maxWidth: parent ? '50em' : null,
    minHeight: parent ? '100vh' : null
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
