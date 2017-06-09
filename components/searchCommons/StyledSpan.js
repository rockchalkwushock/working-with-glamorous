import glamorous from 'glamorous'

const StyledSpan = glamorous.span({
  width: '22px',
  height: '22px',
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
  transform: 'rotate(45deg)',
  transition: 'all 0.4s cubic-bezier(0.650, -0.600, 0.240, 1.650)',
  '::before': {
    width: '4px',
    height: '11px',
    left: '9px',
    top: '18px',
    borderRadius: '2px',
    background: '#974BE0'
  },
  '::after': {
    width: '14px',
    height: '14px',
    left: '0px',
    top: '0px',
    borderRadius: '16px',
    background: '4px solid #974BE0'
  }
})

StyledSpan.displayName = 'StyledSpan'

export default StyledSpan
