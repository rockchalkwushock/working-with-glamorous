import { shallow, render, mount } from 'enzyme'

import { List } from '../resultsCommons'

const data = [
  { link: 'a', title: 'a' },
  { link: 'b', title: 'b' },
  { link: 'c', title: 'c' }
]

describe('List Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <List questions={data} />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
