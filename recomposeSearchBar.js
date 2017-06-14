import { compose, withHandlers, withState } from 'recompose'
import { Field, reduxForm } from 'redux-form'

import {
  Form,
  Input,
  StyledButton,
  StyledClosingSpan,
  StyledInputHolder,
  StyledSpan,
  StyledWrapper
} from './components/searchCommons'

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
  reduxForm({ form: 'searchbar' }),
  withState('view', 'toggle', false),
  withHandlers({
    handleOnClick: props => () => {
      console.log(props)
      props.toggle(!props.view)
    }
  })
)

const SearchBar = ({ getQuestions, handleOnClick, handleSubmit, view }) =>
  <Form onSubmit={handleSubmit(getQuestions)}>
    <StyledWrapper>
      <StyledInputHolder open={view}>
        <Field
          component={Input}
          name="query"
          open={view}
          placeholder="Search a topic on StackOverflow"
          type="text"
        />
        <StyledButton type="button" onClick={handleOnClick} open={view}>
          <StyledSpan open={view} />
        </StyledButton>
      </StyledInputHolder>
      <StyledClosingSpan onClick={handleOnClick} open={view} />
    </StyledWrapper>
  </Form>

export default enhance(SearchBar)
