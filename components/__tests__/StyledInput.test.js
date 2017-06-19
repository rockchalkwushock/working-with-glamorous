import { shallow, render, mount } from 'enzyme'

import { StyledInput } from '../searchCommons'

describe('StyledInput Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <StyledInput />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should render animated styling when props.open: true', () => {
    ui = <StyledInput open />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
