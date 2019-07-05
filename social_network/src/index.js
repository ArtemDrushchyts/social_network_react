import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postData = [
    {id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 1, message: 'It\'s my first post!', likeCount: 20}
];
let dialogsData = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Senya'},
    {id: 3, name: 'Alesya'}
];
let messageDate = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yooo'}
];

ReactDOM.render(<App posts={postData} dialog={dialogsData} message={messageDate} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
