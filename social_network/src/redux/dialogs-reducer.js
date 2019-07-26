const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.messageDate = [...state.messageDate];
            stateCopy.messageDate.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.messageText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );
export const updateNewMessageActionCreator = (message)=> ( {type: UPDATE_NEW_MESSAGE_TEXT, messageText: message} );

export default dialogReducer;