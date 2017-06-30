import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getQuestions, page } from '../lib'

import { Container, List, SearchBar, Title } from '../components'

class Home extends Component {
  static propTypes = {
    getQuestions: PropTypes.func.isRequired
  }
  render() {
    const { questions } = this.props.questions
    return (
      <Container parent>
        <Container child>
          <Title />
        </Container>
        <Container child>
          <SearchBar {...this.props} />
        </Container>
        <Container child>
          <List questions={questions} />
        </Container>
      </Container>
    )
  }
}

/**
 * NOTE:
 * Wrap page => connect => Component because Provider is coming from page.
 * page is not built to be used as a decorator or I could:
 *
 *    @page()
 *    @connect(state => ({ questions: state.questions }), { getQuestions })
 *    export default Home extends Component { ... }
 */
export default page(
  connect(state => ({ questions: state.questions }), { getQuestions })(Home)
)
