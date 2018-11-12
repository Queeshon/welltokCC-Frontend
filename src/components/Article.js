// React imports
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Article extends Component {

  state = {
    isClicked: false
  }

  handleClick = (event) => {
    event.preventDefault()

    localStorage.setItem("name", event.target.title)
    localStorage.setItem("description", event.target.id)
    localStorage.setItem("author", event.target.name)

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleDescription = () => {
    if (this.state.isClicked) {
      return (
        <div>
          <p>this.props.info.description</p>
          <NavLink activeClassName="active" to="/updateform">
            <button>Update</button>
          </NavLink>
          <NavLink activeClassName="active" to="/articleform">
            <button onClick={this.props.deleteArticle(this.props.info.id)}>Delete</button>
          </NavLink>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

  render() {

    const article = this.props.info

    return (
      <div>
        <h3 onClick={this.handleClick} title={article.title} id={article.description} name={article.author} >
          {article.title} ({article.author})
        </h3>
        {this.handleDescription()}
      </div>
    )
  }

}

export default Article
