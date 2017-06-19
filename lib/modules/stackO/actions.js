import StackOApi from '../../utils/StackOApi'

const api = new StackOApi()

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchQuestions = data => ({
  type: FETCH_QUESTIONS,
  payload: data
})

export const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data
})

export const getQuestions = query => async dispatch => {
  console.log(query)
  try {
    const data = await api.getUnanswered(query)
    return dispatch(fetchQuestions(data))
  } catch (e) {
    /**
     * REVIEW
     * FIXME
     * I can't get the search to fail so this is never used.
     * Either StackO is boss mode on its search requests or
     * I'm not smart enough to make something fail...I make things
     * fail it's what I do best :confused:
     */
    return dispatch(fetchError(e))
  }
}
