import React, {Component} from 'react';
import './PostList.css';
import Post from '../Post/Post'

class PostList extends Component{
  state = {}

  render() {
    return (
        <>
          <Post title={'First item with random name'} commentsCount={132}/>
          <Post title={'Second item is active'} commentsCount={3}/>
        </>
    )
  }
}

export default PostList
