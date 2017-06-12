import { Component } from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper } from './searchCommons'

/**
 * TODO:
 *
 * 1. Render the initial state/style of SearchBar.
 *    - Square div with magnifying glass image.
 * 2. onClick event must change state/style of SearchBar.
 *    - Transition to open SearchBar.
 *    - Visible Exit button.
 * 3. onSubmit event must take in value & revert to initial styles.
 */

class SearchBar extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    view: PropTypes.bool
  }
  render() {
    return <StyledWrapper onClick={this.props.onClick} open={this.props.view} />
  }
}

export default SearchBar
