import { compose, withHandlers, withState } from 'recompose'

import {
  Form,
  Input,
  StyledButton,
  StyledClosingSpan,
  StyledInputHolder,
  StyledSpan,
  StyledWrapper
} from './searchCommons'

/**
 * getQuestions comes from Parent
 * handleSubmit comes from reduxForm
 *
 * QUESTION: Can I compose reduxForm with the other HOC's???
 *
 * 1. Make SearchBar a functional component.
 * 2. Apply HOC wrapper.
 * 3. First apply withState()
 * 4. Second apply withHandlers()
 * 5. Third apply withPropsOnChange NOTE might not need this
 * 6. reduxForm????? NOTE Maybe first HOC???
 */

const enhance = compose(
  withState('view', 'toggle', false), // need to have a way to toggle the state of the search bar from open to close & back.
  withState('value', 'updateValue', ''), // need to have a way to get the value from input & update it.
  withHandlers({
    handleOnChange: props => e => {
      props.updateValue(e.target.value)
    },
    handleOnClick: props => () => {
      props.toggle(!props.view)
    },
    handleOnSubmit: props => e => {
      e.preventDefault()
      props.getQuestions(props.value) // Send value to actionCreator.
      props.toggle(!props.view) // close the search bar.
      props.updateValue('') // clear the input.
    }
  })
)

const SearchBar = ({
  handleOnChange,
  handleOnClick,
  handleOnSubmit,
  value,
  view
}) =>
  <Form onSubmit={handleOnSubmit}>
    <StyledWrapper>
      <StyledInputHolder open={view}>
        <Input
          onChange={handleOnChange}
          open={view}
          placeholder="Search a topic on StackOverflow"
          type="text"
          value={value}
        />
        <StyledButton type="button" onClick={handleOnClick} open={view}>
          <StyledSpan open={view} />
        </StyledButton>
      </StyledInputHolder>
      <StyledClosingSpan onClick={handleOnClick} open={view} />
    </StyledWrapper>
  </Form>

export default enhance(SearchBar)
