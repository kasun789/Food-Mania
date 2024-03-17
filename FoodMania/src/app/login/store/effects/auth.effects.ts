import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions'
import { mergeMap, map, tap } from "rxjs/operators";
import { AuthService } from "../../../services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthEffects{
    // login$ = createEffect(() => this.actions$.pipe(
    //     ofType(AuthActions.login),
    //     tap(({ token }) => localStorage.setItem('token', token))
    // ), {dispatch: false});

    // logout$ = createEffect(() => this.actions$.pipe(
    //     ofType(AuthActions.logout),
    //     tap(() => localStorage.removeItem('token'))
    // ), {dispatch: false});

    login$ = createEffect(() => 
    this.actions$.pipe(
        ofType(AuthActions.login),
        tap(() => console.log("coming auth action")),
        mergeMap((action: { email: string, password: string}): Observable<Action> => 
            this.authService.authentication(action.email,action.password)
            .pipe(
                tap(() => console.log(action.email,action.password)),
                tap((token : string) => console.log('token', token)),
                map((token: string) => AuthActions.loginSuccess({ token }))
            )
    )));

    constructor(private actions$ : Actions, private authService : AuthService){}
}