const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText
            };
            state.messageDate.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );
export const updateNewMessageActionCreator = (message)=> ( {type: UPDATE_NEW_MESSAGE_TEXT, messageText: message} );

export default dialogReducer;