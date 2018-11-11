import { FETCH_ARTICLES } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.articles
      }
    default:
      return state
  }
}
