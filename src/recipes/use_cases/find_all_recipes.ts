/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';


@Injectable()
export class FindAllRecipesUseCase {
  constructor(private readonly recipeService: RecipesService, private readonly findUserByToken: FindUserByTokenUseCase) {}

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
