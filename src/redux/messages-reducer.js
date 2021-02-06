
let initialState = {
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
   ]
};

const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'UPDATE-NEW-MESSAGE-BODY':
         return {
            ...state,
            newMessageBody : action.body
         }
      case 'SEND-MESSAGE':
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }]
         };
         default:
         return state;
   }
}
export const sendMessageCreator = () => {
   return {
      type: 'SEND-MESSAGE'
   }
}
export const updateNewMessageBodyCreator = (body) => {
   return {
      type: 'UPDATE-NEW-MESSAGE-BODY', body: body
   }
}

export default messagesReducer;