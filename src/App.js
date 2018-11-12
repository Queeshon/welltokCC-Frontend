// React imports
import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

// Redux imports
import { connect } from 'react-redux'
import { fetchArticles, createArticle, updateArticle, deleteArticle } from '../actions/articleActions'

//components
import Articleform from './components/Articleform'

// containers
import Articlefeed from './containers/Articlefeed'

import './App.css';



class App extends Component {

  createArticle = (articleData, callback) => {
    this.props.createArticle(articleData)
    callback('/articlefeed')
  }

  updateArticle = (articleData, callback) => {
    this.props.updateArticle(articleData)
    callback("/articlefeed")
  }

  deleteArticle = (callback) => {
    this.props.deleteArticle()
    callback('/articlefeed')
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/articlefeed' render={(props) =>
                <Articlefeed
                  articles={this.props.articles}
                  deleteArticle={this.props.deleteArticle}
                  {...props}
                />}
              />
            <Route exact path='/articleform' render={(props) =>
                <Articleform
                  onSubmit={this.createArticle}
                  {...props}
                />}
            />
          <Route exact path='/updateform' render={(props) =>
                <Updateform
                  onSubmit={this.props.updateArticle}
                  {...props}
                />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.items,
  article: state.article.item,
  updateArticle: state.article.updateItem,
  deleteArticle: state.article.deleteArticle
})

export default connect (mapStateToProps, { fetchArticles, createArticle, updateArticle, deleteArticle })(App)
