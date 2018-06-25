import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('recipe1' , 'This is recipe1' , ``, [
      new Ingredient('loat', 5),
      new Ingredient('methi', 6)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another recipe1' , 'This is recipe1' , ``, [
      new Ingredient('loat11', 5),
      new Ingredient('methi11', 6)
    ]),

  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);

  }
}
