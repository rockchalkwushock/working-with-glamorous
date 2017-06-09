import glamorous from 'glamorous'

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
    justifyContent: 'center',
    margin: 'auto'
  },
  ({ color, size }) => ({
    backgroundColor: color ? 'red' : 'black',
    minHeight: size ? '100vh' : null,
    maxWidth: size ? '50em' : null
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
