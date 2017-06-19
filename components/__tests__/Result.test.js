import { shallow, render, mount } from 'enzyme'

import { Result } from '../resultsCommons'

describe('Result Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <Result />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
