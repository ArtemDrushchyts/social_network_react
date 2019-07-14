const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It\'s my first post!', likeCount: 20}
            ],
            newPostText: 'Artem'
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
            ],
            newMessageText: ''
        },
        sitebar: {
            friends: [
                {id: 1, name: 'Lera', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
                {id: 2, name: 'Artem', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' },
                {id: 3, name: 'Alesya', src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' }
            ]
        }
    },
    _callSubscriber()  {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // { type: 'ADD-POST'}
        if(action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 3,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messageDate.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type : ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );
export const updateNewMessageActionCreator = (message)=> ( {type: UPDATE_NEW_MESSAGE_TEXT, messageText: message} );
export default store;
window.store = store;