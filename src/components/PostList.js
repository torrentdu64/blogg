import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    const res = this.props.fetchPosts();
    console.log(res);
  }
  render(){
    return (
      <div>post</div>
      );
  }
}

export default connect(null , { fetchPosts } )(PostList);
