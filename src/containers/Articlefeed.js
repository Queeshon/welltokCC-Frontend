// React imports
import React, { Component } from 'react'
import Article from '../components/Article'

// Redux imports
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'


class Articlefeed extends Component {

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    console.log(this.props.articles)

    const allArticles = this.props.articles.map((article) => {
      return (
        <div key={article.article.id}>
          <Article
            info={article.article}
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

export default connect (mapStateToProps, { fetchArticles })(Articlefeed)
