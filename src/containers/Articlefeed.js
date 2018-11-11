// React imports
import React, { Component } from 'react'
import Article from './components/Article'

// Redux imports
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'


class Articlefeed extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {

    const allArticles = this.props.articles.map((article) => {
      return (
        <div key={article.article.id}>
          <Article
            title={article.article.title}
            description={article.article.description}
            id={article.article.id}
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

const mapStateToProps = state => ({
  articles: state.articles.items
})

export default Articlefeed
