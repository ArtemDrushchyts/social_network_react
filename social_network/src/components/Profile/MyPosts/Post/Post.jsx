import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/12/avatar-sequel.jpg?itok=B-LrB8Rq' />
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;