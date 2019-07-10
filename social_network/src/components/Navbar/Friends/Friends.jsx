import React from 'react';
import styles from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={styles.friendsContent}>
            <img src={props.src} className={styles.friendsAvatar}/>
            <NavLink >
                {props.name}
            </NavLink>
        </div>
    )
};

export default Friends;