import { shallow, render, mount } from 'enzyme'

import { Title } from '../'

describe('Title Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <Title />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
