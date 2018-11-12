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

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/articlefeed' render={(props) => <Articlefeed articles={this.props.articles} {...props}/>} />
            <Route exact path='/articleform' render={(props) => <Articleform onSubmit={this.createArticle} {...props}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.items
  article: state.article.item
})

export default connect (mapStateToProps, { fetchArticles, createArticle, updateArticle, deleteArticle })(App)
