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
                userId : action.payload
            }
        default :
            return state
    }
}

const loginAC = (data) => ({ type : LOGIN, payload : data }) 

export const loginThunk = (body) => {
    return (dispatch) => {
        SocialAPI.login(body)
            .then((res) => {
                console.log("LOGIN RESPONSE => ", res.data);

                if (res.data.resultCode === 0) {
                    const id = res.data.data.userId;

                    localStorage.setItem("userId", id); 
                    
                    dispatch(loginAC(id));
                }
            })
    }
}


export default authReducer
