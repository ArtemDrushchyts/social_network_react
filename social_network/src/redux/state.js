import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'It\'s my first post!', likeCount: 20}
        ]
    },
    messagesPage: {
        messageDate: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yooo'}
        ],
        dialogsData: [
            {id: 1, name: 'Artem', src: 'https://previews.123rf.com/images/solargaria/solargaria1709/solargaria170900008/85425363-user-icon-male-with-beard-icon-hipster-flat-icon-avatar-of-man-with-beard-flat-internet-icon-in-roun.jpg'},
            {id: 2, name: 'Senya', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png'},
            {id: 3, name: 'Alesya', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK'}
        ]
    },
    sitebar: {
       friends: [
           {id: 1, name: 'Lera', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
           {id: 2, name: 'Artem', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
           {id: 3, name: 'Alesya', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' }
       ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};

export default state;