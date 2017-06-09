import { shallow, render, mount } from 'enzyme'

import { SearchBar } from '../index'
import {
  Input,
  StyledButton,
  StyledForm,
  StyledInputHolder,
  StyledSpan,
  StyledWrapper
} from '../searchCommons'

describe('SearchBar Component', () => {
  let ui

  test('should render to the DOM', () => {
    ui = (
      <StyledForm>
        <StyledWrapper>
          <StyledInputHolder>
            <Input type="text" placeholder="Input Text Here" />
            <StyledButton>
              <StyledSpan />
            </StyledButton>
          </StyledInputHolder>
        </StyledWrapper>
      </StyledForm>
    )
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should behave...', () => {
    ui = <SearchBar />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
