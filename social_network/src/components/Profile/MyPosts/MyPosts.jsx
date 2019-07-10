import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };


    return (
        <div className={styles.postsBlock}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;