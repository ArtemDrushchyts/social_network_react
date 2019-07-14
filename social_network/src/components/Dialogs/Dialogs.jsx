import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id} src={elem.src}/>);

    let messageElements = props.messagesPage.messageDate.map(elem => <Message message={elem.message} id={elem.id}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let message = newMessage.current.value;
        props.dispatch(updateNewMessageActionCreator(message));
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <textarea ref={newMessage}
                          onChange={onMessageChange}
                          value={props.messagesPage.newMessageText} />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;