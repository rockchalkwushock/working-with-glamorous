import glamorous from 'glamorous'

const StyledWrapper = glamorous.div({
  display: 'block',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%'
})

StyledWrapper.displayName = 'StyledWrapper'

export default StyledWrapper
