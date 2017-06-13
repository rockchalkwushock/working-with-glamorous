import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  fetchError,
  fetchQuestions,
  FETCH_ERROR,
  FETCH_QUESTIONS,
  getQuestions,
  initialState,
  questionsReducer as reducer
} from '../stackO'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('stackO Module', () => {
  let actual
  let expected

  describe('Reducer', () => {
    let state

    test('should return default state', () => {
      expect.assertions(4)
      actual = reducer((state = initialState), { type: 'unexpected' })
      expected = initialState
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('error', false)
      expect(actual).toHaveProperty('isFetched', false)
      expect(actual).toHaveProperty('questions', [])
    })

    test('should return expected state object for FETCH_ERROR', () => {
      expect.assertions(3)
      actual = reducer((state = initialState), { type: FETCH_ERROR })
      expected = { ...state, error: true, isFetched: true }
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('error', true)
      expect(actual).toHaveProperty('isFetched', true)
    })

    test('should return expected state object for FETCH_QUESTIONS', () => {
      expect.assertions(3)
      actual = reducer((state = initialState), {
        type: FETCH_QUESTIONS,
        payload: []
      })
      expected = { ...state, isFetched: true, questions: [] }
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('isFetched', true)
      expect(actual).toHaveProperty('questions', [])
    })
  })

  describe('Actions', () => {
    const data = {}

    test('should yield FETCH_ERROR & payload', () => {
      actual = fetchError(data)
      expected = { type: FETCH_ERROR, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_ERROR)
      expect(actual).toHaveProperty('payload', data)
    })

    test('should yield FETCH_QUESTIONS & payload', () => {
      actual = fetchQuestions(data)
      expected = { type: FETCH_QUESTIONS, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_QUESTIONS)
      expect(actual).toHaveProperty('payload', data)
    })
  })

  describe('Async Actions', () => {
    let store
    beforeAll(() => {
      store = mockStore()
    })

    test('getQuestions() should yield expected type & payload on success', async () => {
      try {
        actual = await store.dispatch(getQuestions({ query: 'react' }))
        expect.assertions(4)
        expect(actual).toHaveProperty('type', FETCH_QUESTIONS)
        expect(actual.payload).toHaveLength(10)
        expect(actual.payload[0]).toHaveProperty('title')
        expect(actual.payload[0]).toHaveProperty('link')
      } catch (e) {
        throw e
      }
    })
  })
})
