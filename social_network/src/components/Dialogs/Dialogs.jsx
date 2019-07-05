import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialog.map(elem => <DialogItem name={elem.name} id={elem.id}/>);

    let messageElements = props.message.map(elem => <Message message={elem.message} id={elem.id}/>);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;