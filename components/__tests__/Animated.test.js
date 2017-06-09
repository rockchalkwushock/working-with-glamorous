import { shallow, render, mount } from 'enzyme'

import { AnimatedDiv } from '../index'

describe('AnimatedDiv Component', () => {
  let ui

  test('should render to DOM', () => {
    ui = <AnimatedDiv />
    expect(ui.type.displayName).toEqual('AnimatedDiv')
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
