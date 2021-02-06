import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostChangeActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = updateNewPostChangeActionCreator(text);
         dispatch(action);
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;