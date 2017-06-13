import glamorous from 'glamorous'

const StyledInputHolder = glamorous.div(
  {
    display: 'block',
    overflow: 'hidden',
    height: '70px',
    position: 'relative'
  },
  ({ open }) => ({
    width: open ? '450px' : '70px',
    borderRadius: open ? '50px' : '6px',
    backgroundColor: open === true ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0)',
    transition: open === true
      ? 'all 0.5s cubic-bezier(0.000, 0.105, 0.035, 1.570)'
      : 'all 0.3s ease-in-out'
  })
)

StyledInputHolder.displayName = 'StyledInputHolder'

export default StyledInputHolder
