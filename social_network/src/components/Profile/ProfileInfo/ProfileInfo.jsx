import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className={styles.descriptionBlock}>
                <h3>{props.profile.fullName}</h3>
                <img src={props.profile.photos.large}/>
                <p>Обо мне: {props.profile.aboutMe}</p>
                <p>В поиске работы: {props.profile.lookingForAJob === true ? 'Да' : 'Нет'} </p>
                <p>Описание: {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
};

export default ProfileInfo;