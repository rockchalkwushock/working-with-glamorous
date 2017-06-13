import { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

import {
  Form,
  Input,
  StyledButton,
  StyledClosingSpan,
  StyledInputHolder,
  StyledSpan,
  StyledWrapper
} from './searchCommons'

@reduxForm({ form: 'searchbar' })
class SearchBar extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
  state = { view: false }
  handleOnClick = () => {
    if (this.state.view === true) {
      this.setState({ view: false })
    } else {
      this.setState({ view: true })
    }
  }
  render() {
    const { view } = this.state
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <StyledWrapper>
          <StyledInputHolder open={view}>
            <Field
              component={Input}
              name="query"
              open={view}
              placeholder="Search a topic on StackOverflow"
              type="text"
            />
            <StyledButton onClick={this.handleOnClick} open={view}>
              <StyledSpan open={view} />
            </StyledButton>
          </StyledInputHolder>
          <StyledClosingSpan onClick={this.handleOnClick} open={view} />
        </StyledWrapper>
      </Form>
    )
  }
}

export default SearchBar
