import { FETCH_ARTICLES, CREATE_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from './types'

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

export const createArticle = articleData => dispatch => {
  fetch("http://localhost:3000/api/v1/articles", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })
  .then(response => response.json())
  .then(article =>
    dispatch({
      type: CREATE_ARTICLE,
      article
    })
  )
}

export const updateArticle = articleData => dispatch => {
  fetch(`http://localhost:3000/api/v1/articles/${localStorage.getItem('article_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })
  .then(response => response.json())
  .then(article =>
    dispatch({
      type: UPDATE_ARTICLE,
      article
    })
  )
}

export const deleteArticle = articleData => dispatch => {
  fetch(`http://localhost:3000/api/v1/articles/${localStorage.getItem('article_id')}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })
  .then(response => response.json())
  .then(article =>
    dispatch({
      type: DELETE_ARTICLE,
      article
    })
  )
}
