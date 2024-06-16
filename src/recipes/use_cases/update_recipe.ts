/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { FindRecipeUseCase } from './find_recipe';


@Injectable()
export class UpdateRecipeUseCase {
  constructor(private readonly recipeService: RecipesService, private readonly findRecipeUseCase: FindRecipeUseCase) {}

  async execute(id: string, data: UpdateRecipeDto) {
    try {
        const recipe = await this.findRecipeUseCase.execute(id)
        if (!recipe) {
            return {'message': 'recipe not found'}            
        }
        await this.recipeService.update(Number(id), data)
        return {'message': 'Recipe updated successfully'}
        
    } catch (error) {
        console.error(error)
        return {'message': 'Failed to update the recipe'}
    }
  }
}
