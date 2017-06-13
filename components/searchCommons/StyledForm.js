import glamorous from 'glamorous'

const StyledForm = glamorous.form({
  display: 'block',
  marginTop: '0em'
})

StyledForm.displayName = 'StyledForm'

const Form = props => <StyledForm {...props} />

export { StyledForm }
export default Form
