import { shallow, render, mount } from 'enzyme'

import { TestPage } from '../'

describe('TestPage', () => {
  let ui
  test('should render to DOM', () => {
    ui = <TestPage />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should have initial state: false', () => {
    ui = shallow(<TestPage />)
    expect(ui.state('view')).toEqual(false)
  })

  test('should have state: true after onClick event', () => {
    ui = shallow(<TestPage />)
    expect(ui.state('view')).toEqual(false)
    ui.instance()._onClick() // this is so awesome, enzyme === super boss!!!
    expect(ui.state('view')).toEqual(true)
  })

  test('should revert to initial state upon second onClick event', () => {
    ui = shallow(<TestPage />)
    expect(ui.state('view')).toEqual(false)
    ui.instance()._onClick()
    expect(ui.state('view')).toEqual(true)
    ui.instance()._onClick()
    expect(ui.state('view')).toEqual(false)
  })
})
