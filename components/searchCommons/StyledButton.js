import glamorous from 'glamorous'

import { colors } from '../../lib/styles/global'

const StyledButton = glamorous.button(
  {
    border: 'none',
    background: `${colors.ternary}`,
    padding: '0px',
    outline: 'none',
    position: 'relative',
    zIndex: 2, // again must be integer NOT string!
    float: 'right',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out'
  },
  ({ open }) => ({
    width: open ? '50px' : '70px',
    height: open ? '50px' : '70px',
    margin: open ? '10px' : null,
    borderRadius: open ? '30px' : '6px'
  })
)

StyledButton.displayName = 'StyledButton'

export default StyledButton
