//React imports
import React, { Component } from 'react'

class Articleform extends Component {

  state = {
    title: localStorage.getItem("title"),
    description: localStorage.getItem("description"),
    author: localStorage.getItem("author")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const article = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author
    }

    localStorage.removeItem("name")
    localStorage.removeItem("description")
    localStorage.removeItem("author")

    this.props.onSubmit(article, this.props.history.push)
  }

  render () {
    return (
      <div className="login-container">
        <div className="post">
          <form onSubmit={this.handleSubmit}>

            <label>Title</label>
            <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange}/><br/>

            <label>Description</label>
            <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/><br/>

            <label>Author</label>
            <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.handleChange}/><br/>

            <input type="submit" value="Create Article"/>

            <NavLink activeClassName="active" to="/articlefeed">
              <button>Post</button>
            </NavLink>
          </form>
        </div>
      </div>
    )
  }

}
