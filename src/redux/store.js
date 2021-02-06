import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Third post", likesCount: 11 },
            { id: 2, message: "Second post", likesCount: 15 },
            { id: 3, message: "First post", likesCount: 11 },
            { id: 4, message: "Hiiiiii", likesCount: 11 },
            { id: 5, message: "Hiiiiiii", likesCount: 11 },
         ],
         newPostText: '',
      },
      messagesPage: {
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hiii" },
            { id: 3, message: "Hiiiii" },
            { id: 4, message: "Hiiiiii" },
            { id: 5, message: "Hiiiiiii" },
         ],
         newMessageBody: "",
         dialogs: [
            { id: 1, name: "Lera" },
            { id: 2, name: "Danil" },
            { id: 3, name: "Evgeniy" },
            { id: 4, name: "Alexey" },
            { id: 5, name: "Gleb" },
         ],
      },
      sidebar: {}

   },
   _callSubscriber () {
      console.log('State ch');
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state)

   }
} 


export default store;
window.store = store;