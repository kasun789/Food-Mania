import { createReducer, on } from "@ngrx/store";
import { registration, registrationSuccess, registrationFailure } from "../actions/signup.action";

export interface RegistrationState {
    data: any[];
    error: string | null;
    isLoading: boolean;
};

const initialState: RegistrationState ={
    data: [],
    error: null,
    isLoading: false
};

export const signupReducer = createReducer(initialState,
    on(registration, (state) => ({ ...state, isLoading: true })),
    on(registrationSuccess, (state, { response }) => ({ ...state, response, isLoading: false })),
    on(registrationFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
  );