import React from 'react';
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <img src={props.src} className={styles.avatarIcon}/>
            <NavLink to={`/dialogs/${props.id}`} className={styles.avatarLink}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;