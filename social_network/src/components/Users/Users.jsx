import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: false, fullName: 'Artem', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
            {id: 2, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: true, fullName: 'Alesya', status: 'I am a boss too', location: {city: 'Volgograd', country: 'Russia'} },
            {id: 3, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: false, fullName: 'Senya', status: 'I am a cat', location: {city: 'Moscow', country: 'Russia'} }
        ])
    }


    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
};

export default Users;