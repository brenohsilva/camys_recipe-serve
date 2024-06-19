/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IngredientsService } from '../ingredients.service';



@Injectable()
export class FindAllIngredientssUseCase {
  constructor(private readonly ingredientService: IngredientsService) {}

  async execute(recipe_id: string) {
    try {
        const ingredient = await this.ingredientService.findAll(Number(recipe_id))
        if (ingredient.length === 0) {
            return {"message": "There is no ingredients for this Recipe"}
            
        }
        return ingredient
    } catch (error) {
        console.error(error)
        return 'Failed to find ingredients'
    }
  }
}
