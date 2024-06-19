/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';


@Injectable()
export class FindCompletedRecipeUseCase {
  constructor(private readonly recipeService: RecipesService) {}

  async execute(id: string) {
    try {
        const data = await this.recipeService.findCompletedRecipe(Number(id))

        return data
    } catch (error) {
        console.error(error)
        return 'Failed to find the recipe'
    }
  }
}
