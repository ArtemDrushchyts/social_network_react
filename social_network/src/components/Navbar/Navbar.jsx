import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let friendsData = props.state.map(elem => <Friends name={elem.name} src={elem.src}/>);
    return (
        <div className={styles.nav}>
            <nav >
                <div className={styles.item}>
                    <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <div className={styles.friendsWrapper}>
                {friendsData}
            </div>

        </div>
    )
};

export default Navbar;