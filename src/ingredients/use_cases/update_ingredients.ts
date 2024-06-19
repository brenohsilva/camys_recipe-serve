/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IngredientsService } from '../ingredients.service';
import { UpdateIngredientDto } from '../dto/update-ingredient.dto';



@Injectable()
export class UpdateIngredientUseCase {
  constructor(private readonly ingredientService: IngredientsService) {}

  async execute(ingredient_id: string, data: UpdateIngredientDto) {
    try {
        const response = await this.ingredientService.update(Number(ingredient_id), data)
        return response
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to update the ingredient'}
    }
  }
}
