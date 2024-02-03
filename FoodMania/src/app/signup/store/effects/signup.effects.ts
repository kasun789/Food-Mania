import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { userService } from 'src/app/services/user.service';
import {
  registration,
  registrationFailure,
  registrationSuccess,
} from '../../store/actions/signup.action';
import { of } from 'rxjs';

// Import the login action

@Injectable()
export class SignupEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registration), // Use the login action instead of SignupAction.login
      mergeMap((action) =>
        this.userService.registerUser(action.user).pipe(
          map((response) => registrationSuccess({ response })) // Dispatch a new action with the loaded cities
        )
      ),
      catchError((error) => of(registrationFailure({ error })))
    )
  );

  constructor(private actions$: Actions, private userService: userService) {}
}
