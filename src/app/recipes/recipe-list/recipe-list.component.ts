import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
