import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageActionCreator(message));
    };

    return (
        <Dialogs addMessage={addMessage}
                 messagesPage={state}
                 updateNewMessage={onMessageChange} />
    )
};

export default DialogsContainer;