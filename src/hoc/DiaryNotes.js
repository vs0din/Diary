import React from 'react';
import './DiaryNotes.css';
import PostAdd from '../containers/PostAdd/PostAdd'
import PostList from '../components/PostsList/PostList'
import CommentsList from '../components/CommentsList/CommentsList'
import CommentAdd from "../containers/CommentAdd/CommentAdd";

const DiaryNotes = () => {
  return (
      <div className="DiaryNotes">
        <div className="row">
          <div className="col-md-6">
            <div className="items-group">
              <PostAdd/>
              <PostList/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="items-group">
              <CommentsList postTitle={ '\'Second item is active\'' }/>
              <CommentAdd/>
            </div>
          </div>

        </div>
      </div>
  )

};

export default DiaryNotes
