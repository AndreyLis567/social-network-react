import {authApi} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
   userid: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth:true,
         }
      default:
         return state;
   }
}

export const setAuthUserData = (userid, email, login) =>({type: SET_USER_DATA, data: {userid,email, login}});
export const getAuthUserData = () => (dispatch) => {
   authApi.me()
         .then(responce => {
            if (responce.data.resultCode ===0) {
               let {id, email, login} = responce.data.data;
               dispatch(setAuthUserData(id, email, login));
            }
         });
}

export default authReducer;