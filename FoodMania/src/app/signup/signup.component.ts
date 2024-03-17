import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { City } from '../shared/models/City';
import { CityService } from '../services/city/city.service';
import { SubSink } from 'subsink';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UserDetailsVM } from '../shared/models/user.details.vm';
import { Store, select } from '@ngrx/store';
import { registration, registrationSuccess } from '../signup/store/actions/signup.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnChanges, OnDestroy {
  firstName?: string;
  lastName?: string;
  address?: string;
  female?: boolean;
  male?: boolean;
  other?: boolean;
  city?: string;
  email?: string;
  password?: string;
  conformPassword?: string;
  cities: City[] = [];
  private subs = new SubSink();
  userRegistration!: FormGroup;

  get firstNameControl(): AbstractControl {
    return this.userRegistration.get('firstName')!;
  }
  get lastNameControl(): AbstractControl {
    return this.userRegistration.get('lastName')!;
  }
  get addressControl(): AbstractControl {
    return this.userRegistration.get('address')!;
  }
  get femaleControl(): AbstractControl {
    return this.userRegistration.get('female')!;
  }
  get maleControl(): AbstractControl {
    return this.userRegistration.get('male')!;
  }
  get otherControl(): AbstractControl {
    return this.userRegistration.get('other')!;
  }
  get cityControl(): AbstractControl {
    return this.userRegistration.get('city')!;
  }
  get emailControl(): AbstractControl {
    return this.userRegistration.get('email')!;
  }
  get passwordControl(): AbstractControl {
    return this.userRegistration.get('password')!;
  }
  get conformPasswordControl(): AbstractControl {
    return this.userRegistration.get('conformPassword')!;
  }

  constructor(
    private cityService: CityService,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.formSubscription();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('awa');
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  // isInputValuePresent():boolean{
  //   return (this.inputValue.trim().length > 0 || this.inputValue1.trim().length > 0 || this.inputValue2.trim().length > 0  || this.inputValue3.trim().length > 0 || this.inputValue4.trim().length > 0 || this.inputValue5.trim().length > 0 || this.inputValue6.trim().length > 0 );
  // }

  createForm() {
    if (!this.userRegistration) {
      this.userRegistration = this.fb.group({
        firstName: ['' /*[Validation.required] */],
        lastName: ['' /*[Validation.required] */],
        address: ['' /*[Validation.required] */],
        female: ['' /*[Validation.required] */],
        male: ['' /*[Validation.required] */],
        other: ['' /*[Validation.required] */],
        city: ['' /*[Validation.required] */],
        email: ['' /*[Validation.required] */],
        password: ['' /*[Validation.required] */],
        conformPassword: ['' /*[Validation.required] */],
      });
    }
  }

  // get the value from the form when happend the change
  formSubscription(): void {
    this.subs.sink = this.firstNameControl.valueChanges.subscribe(
      (firstName) => {
        if (firstName) {
          this.firstName = firstName;
        }
      }
    );

    this.subs.sink = this.lastNameControl.valueChanges.subscribe((lastName) => {
      if (lastName) {
        this.lastName = lastName;
      }
    });

    this.subs.sink = this.addressControl.valueChanges.subscribe((address) => {
      if (address) {
        this.address = address;
      }
    });

    this.subs.sink = this.maleControl.valueChanges.subscribe((male) => {
      if (male) {
        this.male = male;
      }
    });

    this.subs.sink = this.femaleControl.valueChanges.subscribe((female) => {
      if (female) {
        this.female = female;
      }
    });

    this.subs.sink = this.otherControl.valueChanges.subscribe((other) => {
      if (other) {
        this.other = other;
      }
    });

    this.subs.sink = this.emailControl.valueChanges.subscribe((email) => {
      if (email) {
        this.email = email;
      }
    });

    this.subs.sink = this.passwordControl.valueChanges.subscribe((password) => {
      if (password) {
        this.password = password;
      }
    });

    this.subs.sink = this.conformPasswordControl.valueChanges.subscribe(
      (conformPassword) => {
        if (conformPassword) {
          this.conformPassword = conformPassword;
        }
      }
    );
  }

  storeSubscriptions(): void {
    this.subs.sink = Subscription.EMPTY;
  }

  submitUserData() {
    const user: UserDetailsVM = {
      firstName: this.firstNameControl?.value,
      lastName: this.lastNameControl?.value,
      address: this.addressControl?.value,
      gender: this.maleControl?.value
        ? 'male'
        : this.femaleControl?.value
        ? 'female'
        : 'other',
      city: this.cityControl?.value,
      email: this.emailControl?.value,
      password: this.passwordControl?.value,
      confirmPassword: this.conformPasswordControl?.value,
    };

    this.store.dispatch(registration({ user })); 

    const response = registrationSuccess;
    console.log(response);
    

  }
}
