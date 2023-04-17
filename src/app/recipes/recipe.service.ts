import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe1", "A test description1.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("A Test Recipe2", "A test description2.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("A Test Recipe3", "A test description3.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("A Test Recipe4", "A test description4.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("A Test Recipe5", "A test description5.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("A Test Recipe6", "A test description6.", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];
  get_recipes(): Recipe[] {
    return this.recipes.slice();
  }

  constructor() { }
}
