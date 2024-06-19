/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IngredientsService } from '../ingredients.service';


@Injectable()
export class FindIngredientUseCase {
  constructor(private readonly ingredientService: IngredientsService) {}

  async execute(id: string) {
    try {
        const ingredient = await this.ingredientService.findOne(Number(id))
        return ingredient
    } catch (error) {
        console.error(error)
        return 'Failed to find the ingredient'
    }
  }
}
