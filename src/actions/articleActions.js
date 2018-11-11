import { FETCH_ARTICLES } from './types'

export const fetchArticles = () => dispatch => {
  fetch("http://localhost:3000/api/v1/articles", {
    headers: {
      "Content-Type": 'application/json',
      'Accept': 'application/json',
    }
  })
  .then(response => response.json())
  .then(articles =>
    dispatch({
      type: FETCH_ARTICLES,
      articles
    })
  )
}
