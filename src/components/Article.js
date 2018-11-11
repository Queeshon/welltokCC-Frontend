// React imports
import React, { Component } from 'react'

class Article extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }

}

export default Article
