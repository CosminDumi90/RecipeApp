import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
 
  private recipes: Recipe[] = [
    new Recipe(
      'Crepes',
      'Crepes with fruit',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      [new Ingredient('flour', 10), new Ingredient('eggs', 12)]
    ),
    new Recipe(
      'Fish Burger',
      'Home made fish burger',
      'https://somebodyfeedseb.com/wp-content/uploads/2022/04/2021.03.06-Fish-Burger-2044.jpg',
      [new Ingredient('buns', 15), new Ingredient('fish', 25)]
    ),
  ];
  /**
   *
   */
  constructor(private sls: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShopping(ingredients: Ingredient[]) {
    this.sls.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
