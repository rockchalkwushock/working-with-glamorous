import glamorous from 'glamorous'

const StyledWrapper = glamorous.div(
  {
    display: 'block',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    height: '70px',
    overflow: 'hidden'
  },
  props => ({
    width: props.open === true ? '450px' : '70px',
    borderRadius: props.open === true ? '50px' : '6px',
    backgroundColor: props.open === true
      ? 'rgba(0,0,0,0.5)'
      : 'rgba(255,255,255,0)',
    transition: props.open === true
      ? 'all 0.5s cubic-bezier(0.000, 0.105, 0.035, 1.570)'
      : 'all 0.3s ease-in-out'
  })
)

StyledWrapper.displayName = 'StyledWrapper'

export default StyledWrapper
