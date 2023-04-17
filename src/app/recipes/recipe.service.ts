import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe1",
      "A test description1.",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("Bread", 2),
        new Ingredient("Tomato", 4),
      ]
      ),
    new Recipe("A Test Recipe2",
      "A test description2.",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Salad", 10),
        new Ingredient("Penne", 20),
        new Ingredient("Onions", 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  get_recipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientstoShoppinglist(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
