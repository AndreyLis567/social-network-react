import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageCreator())
      }
   }
}

export default compose (
   connect (mapStateToProps, mapDispatchToProps),
   withAuthRedirect)
   (Dialogs);