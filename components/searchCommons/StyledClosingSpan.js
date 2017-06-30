import glamorous from 'glamorous'

import { colors } from '../../lib/styles/global'

const StyledClosingSpan = glamorous.span(
  {
    position: 'absolute',
    zIndex: 1,
    top: '24px',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    '::before': {
      width: '5px',
      height: '25px',
      left: '10px',
      top: '0px',
      position: 'absolute',
      content: '""',
      backgroundColor: `${colors.ternary}`,
      borderRadius: '2px'
    },
    '::after': {
      width: '25px',
      height: '5px',
      left: '0px',
      top: '10px',
      position: 'absolute',
      content: '""',
      backgroundColor: `${colors.ternary}`,
      borderRadius: '2px'
    }
  },
  ({ open }) => ({
    right: open ? '-50px' : '20px',
    transform: open ? 'rotate(45deg)' : 'rotate(-180deg)',
    transition: open
      ? 'all 0.6s cubic-bezier(0.000, 0.105, 0.035, 1.570)'
      : 'all 0.3s cubic-bezier(0.285, -0.450, 0.935, 0.110)',
    transitionDelay: open ? '0.5s' : '0.2s'
  })
)

StyledClosingSpan.displayName = 'StyledClosingSpan'

export default StyledClosingSpan
