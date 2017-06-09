import glamorous from 'glamorous'

const StyledInputHolder = glamorous.div({
  overflow: 'hidden',
  height: '70px',
  background: 'rgba(255, 255, 255, 0)',
  borderRadius: '6px',
  position: 'relative',
  width: '70px',
  transition: 'all 0.3s ease-in-out'
})

StyledInputHolder.displayName = 'StyledInputHolder'

export default StyledInputHolder
