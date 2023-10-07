import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():Food[]{
      return [
        {
          id:1,
          name:'Chocolot Ice Cream',
          price:20,
          cookTime:'20:30',
          favorite:true,
          origins:['Ice Cream','Italy'],
          stars:4.7,
          imageUrl:'assets/images/foods/food-1.jpg',
          tags: ['Ice-Cream', 'Desart']
      },
      {
        id:2,
        name:'Chocolot Ice Cream',
        price:20,
        cookTime:'20:30',
        favorite:true,
        origins:['Ice Cream','Italy'],
        stars:4.7,
        imageUrl:'assets/images/foods/food-2.jpg',
        tags: ['Ice-Cream', 'Desart']
    },
    {
      id:3,
      name:'Chocolot Ice Cream',
      price:20,
      cookTime:'20:30',
      favorite:true,
      origins:['Ice Cream','Italy'],
      stars:4.7,
      imageUrl:'assets/images/foods/food-3.jpg',
      tags: ['Ice-Cream', 'Desart']
  },
  {
    id:4,
    name:'Chocolot Ice Cream',
    price:20,
    cookTime:'20:30',
    favorite:true,
    origins:['Ice Cream','Italy'],
    stars:4.7,
    imageUrl:'assets/images/foods/food-4.jpg',
    tags: ['Ice-Cream', 'Desart']
},
{
  id:5,
  name:'Chocolot Ice Cream',
  price:20,
  cookTime:'20:30',
  favorite:true,
  origins:['Ice Cream','Italy'],
  stars:4.7,
  imageUrl:'assets/images/foods/food-5.jpg',
  tags: ['Ice-Cream', 'Desart']
},
{
  id:6,
  name:'Chocolot Ice Cream',
  price:20,
  cookTime:'20:30',
  favorite:true,
  origins:['Ice Cream','Italy'],
  stars:4.7,
  imageUrl:'assets/images/foods/food-6.jpg',
  tags: ['Ice-Cream', 'Desart']
},
        
      ]
  }
}
