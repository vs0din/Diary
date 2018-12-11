import React, {Component} from 'react';
import './CommentAdd.css';

class CommentAdd extends Component {
  render() {
    return (
        <div className="row">
          <div className="CommentAdd__head">

            <div className="col-xs-12">
              <h2 className="CommentAdd__title">Items</h2>
              <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="Type here name..."/>
                <span className="input-group-btn" style={{ width: '15px' }}></span>
                <div className="input-group-btn">
                  <button id="btnNew" data-text="Add new" type="button" className="btn CommentAdd__new-post">Add new</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CommentAdd
