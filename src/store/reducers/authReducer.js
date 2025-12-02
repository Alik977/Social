import { SocialAPI } from "../../api/api"

const LOGIN = 'LOGIN'

const initState = {
    userId : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                userId : action.paylaod
            }
        default :
            return state
    }
}

const loginAC = (data) => ({type : LOGIN, paylaod : data})


export const loginThunk = (body) => {
    return (dispatch) => {
        SocialAPI.login(body)
            .then((res) => {
                dispatch(loginAC(res.data.data.userId))
           
            })
    }
}
export default authReducer