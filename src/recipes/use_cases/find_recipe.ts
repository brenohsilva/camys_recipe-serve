/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';


@Injectable()
export class FindRecipeUseCase {
  constructor(private readonly recipeService: RecipesService) {}

  async execute(id: string) {
    try {
     
        const recipe = await this.recipeService.findOne(Number(id))
        return recipe
    } catch (error) {
        console.error(error)
        return {message:'Failed to find the recipe', status_code: 400}
    }
  }
}
