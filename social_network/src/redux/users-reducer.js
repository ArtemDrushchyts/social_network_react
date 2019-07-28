const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
    //     {id: 1, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: false, fullName: 'Artem', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
    //     {id: 2, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: true, fullName: 'Alesya', status: 'I am a boss too', location: {city: 'Volgograd', country: 'Russia'} },
    //     {id: 3, photoUrl: 'https://vokrug.tv/pic/news/d/3/d/5/d3d530210cd546b48e3b7ca34559adb5.jpg', followed: false, fullName: 'Senya', status: 'I am a cat', location: {city: 'Moscow', country: 'Russia'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;