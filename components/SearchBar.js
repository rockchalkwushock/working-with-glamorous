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
    getQuestions: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
  state = { view: false }
  componentDidMount() {
    console.log('CDM: SearchBar')
  }
  componentWillReceiveProps() {
    console.log('CWRP: SearchBar')
  }
  componentWillUpdate() {
    console.log('CWU: SearchBar')
  }
  componentDidUpdate() {
    console.log('CDU: SearchBar')
  }
  handleOnClick = () => {
    if (this.state.view === true) {
      this.setState({ view: false })
    } else {
      this.setState({ view: true })
    }
  }
  render() {
    const { view } = this.state
    const { getQuestions, handleSubmit } = this.props
    return (
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
