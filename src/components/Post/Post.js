import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
  state = {}

  render() {
    return (
        <div className="Post">
          <div className="row">
              <div className="col-xs-12">
                <div className="input-group input-group-lg">
                  <span className="Post__title">{this.props.title}</span>
                  <span className="input-group Post__commentsCount">{this.props.commentsCount}</span>
                  <div className="input-group-btn">
                    <button data-text="Add new" type="button" className="btn Post__delete">Delete</button>
                  </div>
                </div>
              </div>
          </div>
          <hr/>
        </div>



    )
  }
}

export default Post
