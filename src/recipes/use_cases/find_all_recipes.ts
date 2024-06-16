/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';


@Injectable()
export class FindAllRecipesUseCase {
  constructor(private readonly recipeService: RecipesService) {}

  async execute() {
    try {
        const recipe = await this.recipeService.findAll()
        if (recipe.length === 0) {
            return {"message": "There is no recipes for this user"}
            
        }
        return recipe
    } catch (error) {
        console.error(error)
        return 'Failed to find recipes'
    }
  }
}
