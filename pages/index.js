import { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuestions, page } from '../lib'
// import { SearchBar } from '../components'
import { Form } from '../components/searchCommons'

import SearchBar from '../recomposeSearchBar'

@reduxForm({ form: 'searchbar' })
class Home extends Component {
  static propTypes = {
    getQuestions: PropTypes.func.isRequired,
    initialState: PropTypes.shape({
      form: PropTypes.object,
      questions: PropTypes.object
    }).isRequired,
    url: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }
  componentDidMount() {
    console.log('CDM: index')
  }
  componentWillReceiveProps() {
    console.log('CWRP: index')
  }
  componentWillUpdate() {
    console.log('CWU: index')
  }
  componentDidUpdate() {
    console.log('CDU: index')
  }
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.props.getQuestions)}>
        <SearchBar {...this.props} />
      </Form>
    )
  }
}

export default page(connect(null, { getQuestions })(Home))
