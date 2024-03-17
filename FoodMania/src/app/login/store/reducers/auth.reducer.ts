import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";


export interface AuthState {
    token: string;
    email: string;
    password: string;
}

const initialState: AuthState = {
    token: '',
    email: '',
    password: ''
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, { email, password}) =>({
        ...state,
        email: email,
        password: password
    })),
    on(AuthActions.loginSuccess, (state, { token }) => ({...state, token})),
    on(AuthActions.logout, state => ({...state, token: ''}))
)