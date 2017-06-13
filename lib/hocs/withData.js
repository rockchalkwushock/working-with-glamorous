import { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { store } from '../redux'

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
      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...subProps
      }
      return {
        initialState: { ...store.getState() },
        ...props
      }
    }
    render() {
      return (
        <Provider store={store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
