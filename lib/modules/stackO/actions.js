import axios from 'axios'

import { algorithm } from './algorithm'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const FETCH_ERROR = 'FETCH_ERROR'

// set base url for query
axios.defaults.baseURL = 'http://api.stackexchange.com/2.2/questions'
// api request
const request = query =>
  axios.get(
    `/unanswered?&order=desc&sort=activity&tagged=${query}&site=stackoverflow`
  )

export const fetchQuestions = data => ({
  type: FETCH_QUESTIONS,
  payload: data
})

export const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data
})

export const getQuestions = ({ query }) => async dispatch => {
  try {
    const { data } = await request(query)
    const processedData = algorithm(data)
    return dispatch(fetchQuestions(processedData))
  } catch (e) {
    return dispatch(fetchError(e))
  }
}
