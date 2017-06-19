import { shallow, render, mount } from 'enzyme'

import { StyledClosingSpan } from '../searchCommons'

describe('StyledClosingSpan Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <StyledClosingSpan />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should render animated styling when props.open: true', () => {
    ui = <StyledClosingSpan open />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
