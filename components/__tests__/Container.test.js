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
    ui = <Container color />
    expect(ui.props.color).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when results prop is passed', () => {
    ui = <Container results />
    expect(ui.props.results).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when width prop is passed', () => {
    ui = <Container width />
    expect(ui.props.width).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when height prop is passed', () => {
    ui = <Container height />
    expect(ui.props.height).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when algin prop is passed', () => {
    ui = <Container align />
    expect(ui.props.align).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
