import { FETCH_ARTICLES, CREATE_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from '../actions/types'

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
    case CREATE_ARTICLES:
      return {
        ...state,
        item: action.article
      }
    case UPDATE_ARTICLES:
      return {
        ...state,
        item: action.article
      }
    case DELETE_ARTICLES:
      return {
        ...state
      }
    default:
      return state
  }
}
