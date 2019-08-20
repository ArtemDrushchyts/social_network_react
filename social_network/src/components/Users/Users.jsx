import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/User.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>
                            {p}</span>
            })}
        </div>

        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                usersAPI.getUnfollow(user.id)
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.unfollow(user.id);
                                        }
                                    });

                            }}>Unfollow</button> :
                            <button onClick={() => {
                                usersAPI.getFollow(user.id)
                                    .then(response => {
                                        debugger;
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id);
                                        }
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;