import glamorous from 'glamorous'

import { colors } from '../../lib/styles/global'

const StyledSpan = glamorous.span(
  {
    width: '22px',
    height: '22px',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.650, -0.600, 0.240, 1.650)',
    '::before': {
      width: '4px',
      height: '11px',
      left: '9px',
      top: '18px',
      borderRadius: '2px',
      backgroundColor: `${colors.emphasis}`,
      position: 'absolute',
      content: '""'
    },
    '::after': {
      width: '14px',
      height: '14px',
      left: '0px',
      top: '0px',
      borderRadius: '16px',
      border: `4px solid ${colors.emphasis}`,
      position: 'absolute',
      content: '""'
    }
  },
  ({ open }) => ({
    transform: open ? 'rotate(-45deg)' : 'rotate(45deg)'
  })
)

StyledSpan.displayName = 'StyledSpan'

export default StyledSpan
