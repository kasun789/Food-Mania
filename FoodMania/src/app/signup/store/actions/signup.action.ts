import { createAction, props } from '@ngrx/store';
import { UserDetailsVM } from 'src/app/shared/models/user.details.vm';

export const registration = createAction(
  '[Registration] User RegisterUser',
  props<{ user: UserDetailsVM }>()
);

export const registrationSuccess = createAction(
  '[Registration] User Registration Success',
  props<{ response: string }>()
);

export const registrationFailure = createAction(
  '[Registration] User Registration Failure',
  props<{ error: string }>()
);