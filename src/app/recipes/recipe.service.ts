import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('recipe1' , 'This is recipe1' , `http://www.photosforclass.com/download/pixabay-1971552?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83cb60e2df1033ed1584d05fb1d4e97e07ee3d21cac104497f9c870a5e4b4b8_960.jpg&user=Daria-Yakovleva`, [
      new Ingredient('loat', 5),
      new Ingredient('methi', 6)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Another recipe1' , 'This is recipe1' , `http://www.photosforclass.com/download/pixabay-1971552?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83cb60e2df1033ed1584d05fb1d4e97e07ee3d21cac104497f9c870a5e4b4b8_960.jpg&user=Daria-Yakovleva`, [
      new Ingredient('loat11', 5),
      new Ingredient('methi11', 6)
    ]),

  ];

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
