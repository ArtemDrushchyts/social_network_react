import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialog.map(elem => <DialogItem name={elem.name} id={elem.id} src={elem.src}/>);

    let messageElements = props.message.map(elem => <Message message={elem.message} id={elem.id}/>);

    let newMessage = React.createRef();
    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    };
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;