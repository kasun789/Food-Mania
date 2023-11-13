import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/City';
import { CityService } from '../services/city/city.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  inputValue: string = '';
  inputValue1: string = '';
  inputValue2: string = '';
  inputValue3: string = '';
  inputValue4: string = '';
  inputValue5: string = '';
  inputValue6: string = '';
  inputValue7: string = '';
  cities:City[] = [];
  constructor(private cityService:CityService){}

  ngOnInit(): void {
      this.cities = this.cityService.getAll();
  }

  isInputValuePresent():boolean{
    return (this.inputValue.trim().length > 0 || this.inputValue1.trim().length > 0 || this.inputValue2.trim().length > 0  || this.inputValue3.trim().length > 0 || this.inputValue4.trim().length > 0 || this.inputValue5.trim().length > 0 || this.inputValue6.trim().length > 0 );
  }
}
