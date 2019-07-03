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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Artem' id='1'/>
                <DialogItem name='Senya' id='2'/>
                <DialogItem name='Alesya' id='3'/>
            </div>
            <div className={styles.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yooo'/>
            </div>
        </div>
    )
};

export default Dialogs;