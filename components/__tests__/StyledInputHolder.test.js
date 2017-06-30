import { shallow, render, mount } from 'enzyme'

import { StyledInputHolder } from '../searchCommons'

describe('StyledInputHolder Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <StyledInputHolder />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should render animated styling when props.open: true', () => {
    ui = <StyledInputHolder open />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
