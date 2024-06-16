/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { FindRecipeUseCase } from './find_recipe';


@Injectable()
export class DeleteRecipeUseCase {
  constructor(private readonly recipeService: RecipesService, private readonly findRecipeUseCase: FindRecipeUseCase) {}

  
  async execute(id: string) {
    try {
        const recipe = await this.findRecipeUseCase.execute(id)
        if (!recipe) {
            return {'message': 'recipe not found'}            
        }
        await this.recipeService.remove(Number(id))
        return {'message': 'recipe deleted successfully'}
          
    } catch (error) {
        console.error(error)
        return  {'message': 'Failed to delete the recipe'}
    }
  }
}
