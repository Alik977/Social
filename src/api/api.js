import axios from "axios";

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    headers : {
        'api-key' : '9aa0b4c6-f06d-4926-b711-ae10585d4fc4'
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