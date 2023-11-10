import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/City';
import { CityService } from '../services/city/city.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  cities:City[] = [];
  constructor(private cityService:CityService){}

  ngOnInit(): void {
      this.cities = this.cityService.getAll();
  }
}
