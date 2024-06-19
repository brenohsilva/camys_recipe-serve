/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';


@Injectable()
export class FindAllRecipesUseCase {
  constructor(private readonly recipeService: RecipesService, private readonly findUserByToken: FindUserByTokenUseCase) {}

  async execute(request: Request,) {
    try {
      const authorizationHeader = request.headers['authorization'];
      const accessToken = JwtToken(authorizationHeader);
      const current_user = await this.findUserByToken.execute(accessToken)
        const recipe = await this.recipeService.findAll(current_user.id)
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
