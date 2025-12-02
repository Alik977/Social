import axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    headers : {
        'api-key' : '1e6c6c1c-e42b-4f91-b672-7983ab2fe602'
    },
    withCredentials : true
})

const SocialAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    },
    login(body){
        return instance.post('/auth/login', body)
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    changeImg(file){
        const files = new FormData()
        files.append('file', file)
        return instance.put('/profile/photo', files)
    }
}

export {SocialAPI}