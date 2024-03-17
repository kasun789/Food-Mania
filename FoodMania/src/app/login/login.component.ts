import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { login } from './store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
  private subs = new SubSink();

  get emailController():AbstractControl {
    return this.loginForm.get('email')!;
  }

  get passwordController(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {
    this.createForm();
    this.formSubscription();
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  constructor(private fb: FormBuilder, private store: Store) {}

  createForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  formSubscription(): void {
    this.subs.sink = this.emailController.valueChanges.subscribe(
      (email) =>{
        email = email;
      }
    );

    this.subs.sink = this.passwordController.valueChanges.subscribe(
      (password) =>{
        password = password;
      }
    )
  }

  submit(): void{
    if(this.loginForm.valid){
      this.store.dispatch(login({email: this.email,password: this.password}))
    }
    else{
      console.log("Internal error occured");
    }
  }
}
