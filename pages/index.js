import { Component } from 'react'
import { withLayout } from '../lib'
import { SearchBar } from '../components'

/**
 * NOTE:
 *
 * At the moment this setup works fine for passing props to the children.
 * As long as I check the value of state my _onClick will toggle the changing
 * view of my SearchBar.
 */

export class TestPage extends Component {
  state = { view: false }
  _onClick = () => {
    if (this.state.view === true) {
      this.setState({ view: false })
    } else {
      this.setState({ view: true })
    }
  }
  render() {
    return <SearchBar onClick={this._onClick} view={this.state.view} />
  }
}

export default withLayout(TestPage)
