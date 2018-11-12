// React imports
import React, { Component } from 'react'
import Article from '../components/Article'


class Articlefeed extends Component {

  render() {

    const allArticles = this.props.articles.map((article) => {
      return (
        <div key={article.article.id}>
          <Article
            info={article.article}
            deleteArticle={this.props.deleteArticle}
          />
        </div>
      )
    })

    return (
      <div>
        {allArticles}
      </div>
    )
  }

}


export default fetchArticles
