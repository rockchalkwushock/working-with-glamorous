import { shallow, render, mount } from 'enzyme'

import { StyledSpan } from '../searchCommons'

describe('StyledSpan Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <StyledSpan />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should render animated styling when props.open: true', () => {
    ui = <StyledSpan open />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
