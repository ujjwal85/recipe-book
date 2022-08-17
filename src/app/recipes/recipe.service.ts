
import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model'
export class RecipeService{
    RecipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('chicken','This is simply a test','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cold-spiced-chicken-recipe-1557951578.jpg?crop=1xw:1xh;center,top&resize=980:*'),
        new Recipe('litti chokha ','This is simply a test','https://www.secondrecipe.com/wp-content/uploads/2021/01/bihari-litti-chokha-720x563.jpg'),
        new Recipe('paneer chilli ','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Y6_79IMEh633JZzoA4xoSAqSJ30st2eZ_A&usqp=CAU')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}