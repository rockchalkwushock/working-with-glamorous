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

  test('should yield true when size prop is passed', () => {
    ui = <Container size />
    expect(ui.props.size).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should yield true when color prop is passed', () => {
    ui = <Container color />
    expect(ui.props.color).toEqual(true)
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})

// describe('Container Component', () => {
//   let actual
//   let component
//   let expected
//   test('should render with no issues', () => {
//     component = renderer.create(<Container />)
//     actual = component.toJSON()
//     expect(actual).toMatchSnapshot()
//   })

//   test('should have minHeight & minWidth', () => {
//     component = renderer.create(<Container size />)
//     actual = component.toJSON()
//     console.log(actual)
//     expected = 'true'
//     expect(actual.props.size).toEqual(true)
//     expect(actual).toMatchSnapshot()
//   })
// })
