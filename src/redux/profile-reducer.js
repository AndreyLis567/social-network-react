import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState = {
   posts: [
      { id: 1, message: "Third post", likesCount: 11 },
      { id: 2, message: "Second post", likesCount: 15 },
      { id: 3, message: "First post", likesCount: 11 },
      { id: 4, message: "Hiiiiii", likesCount: 11 },
      { id: 5, message: "Hiiiiiii", likesCount: 11 },
   ],
   newPostText: 'text',
   profile: null,
   status: "",
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText : ''
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
    default :
   return state;
}
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostChangeActionCreator = (text) => 
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => 
   ({ type: SET_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId).then(responce => {
      dispatch(setUserProfile(responce.data));
   });
}

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
   .then(responce => {
      if( responce.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   });
}

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
   .then(responce => {
      dispatch(setStatus(responce.data));
   });
}

export default profileReducer;