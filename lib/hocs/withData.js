import { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { getStore } from '../redux'

const getInitialState = reduxStore => reduxStore.getState()

/**
 * @function withData
 * @param {Func} ComposedComponent Higher-Order-Function/Component for applying data to components.
 * @returns {Function} Returns component with access to redux store.
 */
export default ComposedComponent =>
  class WithData extends Component {
    static propTypes = {
      initialState: PropTypes.shape({
        form: PropTypes.object,
        questions: PropTypes.object
      }).isRequired,
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      }).isRequired
    }
    static getInitialProps = async ctx => {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const reduxStore = getStore({})
      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...subProps
      }
      return {
        initialState: getInitialState(reduxStore),
        ...props
      }
    }
    state = {
      store: getStore(this.props.initialState)
    }
    render() {
      return (
        <Provider store={this.state.store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
