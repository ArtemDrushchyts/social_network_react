import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My post
          <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?" likeCount="15" />
                <Post message="It's my first post!" likeCount="20" />
            </div>
        </div>
    )
}

export default MyPosts;