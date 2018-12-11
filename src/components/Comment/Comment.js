import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
  state = {}

  render() {
    return (

        <div className="Comments">
          <div className="media-left">
            <img src={ this.props.commentIconPath } className="Comments__icon media-object avatar" alt="not loaded" title ={ this.props.titleText || "< stranger >" }/>
          </div>
          <div className="media-body">
            <h6 className="Comments__text">{this.props.commentText}</h6>
          </div>
          <hr className="divider"/>
        </div>
    )
  }
}

export default Comment
