import { shallow, render, mount } from 'enzyme'

import { Container } from '../index'

describe('Container Component', () => {
  let ui
  test('should render to DOM', () => {
    ui = <Container />
    expect(ui.type.displayName).toEqual('StyledContainer')
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when color prop is passed ', () => {
    ui = <Container parent />
    expect(ui.props.parent).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
