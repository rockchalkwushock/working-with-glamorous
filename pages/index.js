import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuestions, page } from '../lib'
import { SearchBar } from '../components'

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
    return <SearchBar {...this.props} />
  }
}

export default page(connect(null, { getQuestions })(Home))
