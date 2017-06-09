import { Component } from 'react'

import {
  Input,
  StyledButton,
  StyledForm,
  StyledInputHolder,
  StyledSpan,
  StyledWrapper
} from './searchCommons'

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
  state = {}
  render() {
    return (
      <StyledForm>
        <StyledWrapper>
          <StyledInputHolder>
            <Input type="text" placeholder="Type text here" />
            <StyledButton>
              <StyledSpan />
            </StyledButton>
          </StyledInputHolder>
        </StyledWrapper>
      </StyledForm>
    )
  }
}

export default SearchBar
