import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { registerFailure, registerStart, registerSuccess } from "./registerRedux"

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const register = async(dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
}