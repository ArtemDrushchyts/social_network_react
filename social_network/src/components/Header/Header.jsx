import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header} >
            <img src="https://bcassetcdn.com/asset/logo/e33c12b4-1128-4129-b31f-2c31cb0878c7/logo?v=4&text=Logo+Text+Here" />

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;