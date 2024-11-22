import { userActions } from "../reducers/userReducer";


export const logout = () => (dispatch) => {
    dispatch(userActions.setUserInfo());
    localStorage.removeItem("account");
}