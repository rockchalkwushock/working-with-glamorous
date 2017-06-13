import { page } from '../lib'
import { SearchBar } from '../components'

/**
 * NOTE:
 *
 * At the moment this setup works fine for passing props to the children.
 * As long as I check the value of state my _onClick will toggle the changing
 * view of my SearchBar.
 */

export default page(props => <SearchBar {...props} />)
