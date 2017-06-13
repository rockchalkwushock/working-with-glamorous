import glamorous from 'glamorous'

const StyledInput = glamorous.input(
  {
    display: 'inline-block',
    width: '100%',
    height: '50px',
    padding: '0px 70px 0px 20px',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'transparent',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    fontFamily: '"Open Sans", Arial, Verdana',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#fff',
    transition: 'all 0.3s cubic-bezier(0.000, 0.105, 0.035, 1.570)',
    transitionDelay: '0.3s'
  },
  ({ open }) => ({
    opacity: open ? 1 : 0,
    transform: open ? 'translate(0, 10px)' : 'translate(0, 60px)'
  })
)

StyledInput.displayName = 'StyledInput'

const Input = props => <StyledInput {...props} {...props.input} />

export { StyledInput }
export default Input
