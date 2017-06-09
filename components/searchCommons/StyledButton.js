import glamorous from 'glamorous'

const StyledButton = glamorous.button({
  width: '70px',
  height: '70px',
  border: 'none',
  borderRadius: '6px',
  background: '#fff',
  padding: '0px',
  outline: 'none',
  position: 'relative',
  zIndex: 2, // again must be integer NOT string!
  float: 'right',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out'
})

StyledButton.displayName = 'StyledButton'

export default StyledButton
