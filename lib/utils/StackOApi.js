import axios from 'axios'

import { algorithm } from './algorithm'

// set base url for query
axios.defaults.baseURL = 'http://api.stackexchange.com/2.2/questions'

// api request
const request = query =>
  axios.get(
    `/unanswered?&order=desc&sort=activity&tagged=${query}&site=stackoverflow`
  )

export default class StackOApi {
  state = {
    error: 'Oops something went wrong'
  }
  getUnanswered = async query => {
    try {
      const { data } = await request(query)
      const processedData = algorithm(data)
      return processedData
    } catch (e) {
      return this.state.error
    }
  }
}
