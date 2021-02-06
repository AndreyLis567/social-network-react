import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   let state = props.messagesPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = state.messages.map(message => <Message message={message.message} />);
   let newMessageBody = state.newMessageBody;
   let onSendMessageClick = () => { 
      props.sendMessage();
   };
   let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body);
    };
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <textarea value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'></textarea>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;