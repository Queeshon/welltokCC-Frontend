// React imports
import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect, BrowserRouter as Router } from 'react-router-dom'

// Redux imports
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'

// containers
import Articlefeed from './containers/Articlefeed'

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/articlefeed' render={(props) => <Articlefeed articles={this.props.articles} {...props}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.items
})

export default connect (mapStateToProps, { fetchArticles })(App)
