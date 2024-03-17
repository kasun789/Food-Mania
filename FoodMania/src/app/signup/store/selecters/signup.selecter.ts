import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RegistrationState } from "../reducers/signup.reducer";
import { state } from "@angular/animations";

export const selectRegistrationState = createFeatureSelector<RegistrationState>("data")

export const selectData = createSelector(
   selectRegistrationState,
   (state : RegistrationState) => state.data
);

export const selectLoading = createSelector(
    selectRegistrationState,
    (state : RegistrationState) => state.isLoading
);

export const selectError = createSelector(
    selectRegistrationState,
    (state : RegistrationState) => state.error
);