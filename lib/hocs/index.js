import { compose } from 'redux'
import withData from './withData'
import withLayout from './withLayout'

const page = compose(withData, withLayout)

export { page }
