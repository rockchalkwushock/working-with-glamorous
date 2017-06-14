import { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuestions, page } from '../lib'
// import { SearchBar } from '../components'

import SearchBar from '../recomposeSearchBar'

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
    const { questions } = this.props.questions
    return (
      <div>
        <div>
          <SearchBar {...this.props} />
        </div>
        <div>
          <ul>
            {questions.map(q =>
              <li key={Math.random()}>
                <a href={q.link}><h3>{q.title}</h3></a>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default page(
  connect(state => ({ questions: state.questions }), { getQuestions })(Home)
)
