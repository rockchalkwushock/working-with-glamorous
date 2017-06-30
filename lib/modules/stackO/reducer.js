import { FETCH_ERROR, FETCH_QUESTIONS } from './actions'

export const initialState = {
  error: false,
  isFetched: false,
  questions: []
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_ERROR:
      return {
        ...state,
        error: true,
        isFetched: true
      }
    case FETCH_QUESTIONS:
      return {
        ...state,
        isFetched: true,
        questions: payload
      }
    default:
      return state
  }
}
