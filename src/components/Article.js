// React imports
import React, { Component } from 'react'

class Article extends Component {

  state = {
    isClicked: false
  }

  handleClick = (event) => {
    event.preventDefault()

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleDescription = () => {
    if (this.state.isClicked) {
      return (
        <div>
          <p>this.props.info.description</p>
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
        <h3 onClick={this.handleClick}>
          {article.title} ({article.author})
        </h3>
        {this.handleDescription()}
      </div>
    )
  }

}

export default Article
