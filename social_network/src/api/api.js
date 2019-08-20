import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d478f373-abca-4b0d-91db-96bc1b6c40d6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => response.data)
    },
    getFollow(userID) {
        return instance.post(`follow/${userID}`)
    },
    getUnfollow(userID) {
        return instance.delete(`follow/${userID}`)
    }
};

