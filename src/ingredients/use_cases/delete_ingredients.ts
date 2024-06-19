/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IngredientsService } from '../ingredients.service';
import { FindIngredientUseCase } from './find_ingredient';

@Injectable()
export class DeleteIngredientUseCase {
  constructor(private readonly ingredientService: IngredientsService, private readonly findIngredientUseCase: FindIngredientUseCase) {}

  
  async execute(id: string) {
    try {
        const ingredient = this.findIngredientUseCase.execute(id)
        if (!ingredient) {
            return {'message': 'ingredient not found'}            
        }
        await this.ingredientService.remove(Number(id))
        return {'message': 'ingredient deleted successfully'}
          
    } catch (error) {
        console.error(error)
        return  {'message': 'Failed to delete the ingredient'}
    }
  }
}
