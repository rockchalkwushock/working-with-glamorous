import glamorous from 'glamorous'

const StyledInput = glamorous.input({
  width: '100%',
  height: '50px',
  padding: '0 70 0 20',
  opacity: 0, // Must be written as an integer, not string.
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'transparent',
  boxSizing: 'border-box',
  border: 'none',
  outline: 'none',
  fontFamily: '"Open Sans", Arial, Verdana',
  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '20px',
  color: '#fff',
  transform: 'translate(0, 60px)',
  transition: 'all 0.3s cubic-bezier(0.000, 0.105, 0.035, 1.570)',
  transitionDelay: '0.3s'
})

StyledInput.displayName = 'StyledInput'

const Input = props => <StyledInput {...props} />

export { StyledInput }
export default Input
