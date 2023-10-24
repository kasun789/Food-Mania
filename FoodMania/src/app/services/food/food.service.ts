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
          name:'Chocolate Ice Cream',
          price:20,
          cookTime:'20:30',
          favorite:true,
          origins:['Ice Cream','Italy'],
          stars:4.7,
          imageUrl:'assets/images/foods/food-8.jpg',
          tags: ['Ice-Cream', 'Desart']
      },
      {
        id:2,
        name:'Pizza',
        price:20,
        cookTime:'20:30',
        favorite:true,
        origins:['Pizza','Italy'],
        stars:4.7,
        imageUrl:'assets/images/foods/food-2.jpg',
        tags: ['Pizza', 'Main Dish']
    },
    {
      id:3,
      name:'Sandwitch',
      price:20,
      cookTime:'20:30',
      favorite:true,
      origins:['Sandwitch','American'],
      stars:4.7,
      imageUrl:'assets/images/foods/food-10.jpg',
      tags: ['Sandwitch', 'Main-Dish']
  },
  {
    id:4,
    name:'Cheese Pasta',
    price:20,
    cookTime:'20:30',
    favorite:true,
    origins:['Cheese Pasta','Italy'],
    stars:4.7,
    imageUrl:'assets/images/foods/food-4.jpg',
    tags: ['cheese-pasta', 'Main-Food']
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
  name:'Salad',
  price:20,
  cookTime:'20:30',
  favorite:true,
  origins:['Salad','Italy'],
  stars:4.7,
  imageUrl:'assets/images/foods/food-7.jpg',
  tags: ['Salad', 'Desart']
},
        
      ]
  }
}
