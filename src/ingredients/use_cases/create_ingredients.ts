/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IngredientsService } from '../ingredients.service';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';


@Injectable()
export class CreateIngredientUseCase {
  constructor(private readonly ingredientService: IngredientsService) {}

  async execute(recipe_id: string, data: any) {
    try {
         const ingredient: CreateIngredientDto = {
            recipes_id: Number(recipe_id),
            ...data
         }

        const response = await this.ingredientService.create(ingredient)
        return response
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to create the ingredient'}
    }
  }
}
