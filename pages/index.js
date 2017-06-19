import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuestions, page } from '../lib'

import { Container, List, SearchBar, Title } from '../components'

// import SearchBar from '../recomposeSearchBar'

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
  render() {
    const { questions } = this.props.questions
    return (
      <Container>
        <Container align height>
          <Title />
        </Container>
        <SearchBar {...this.props} />
        <Container height results>
          <List questions={questions} />
        </Container>
      </Container>
    )
  }
}

export default page(
  connect(state => ({ questions: state.questions }), { getQuestions })(Home)
)
