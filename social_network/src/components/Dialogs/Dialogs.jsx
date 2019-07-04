import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
};

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Senya'},
        {id: 3, name: 'Alesya'}
    ];
    let messageDate = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yooo'}
    ];

    let dialogsElements = dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id}/>);

    let messageElements = messageDate.map(elem => <Message message={elem.message} id={elem.id}/>);
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