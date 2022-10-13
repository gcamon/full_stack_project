import axios from 'axios';
import { loginFailure, loginStart, loginSuccess, logOut } from './AuthActions';

export const loginRequest = async (user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await axios.post('auth/login',user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const logoutRequest = (dispatch) => {
    dispatch(logOut())
}