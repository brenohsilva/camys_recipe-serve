/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';

@Injectable()
export class CreateRecipeUseCase {
  constructor(private readonly recipeService: RecipesService, private readonly findUserByToken: FindUserByTokenUseCase) {}

  async execute(request: Request, data: CreateRecipeDto) {
    try {
        const authorizationHeader = request.headers['authorization'];
        const accessToken = JwtToken(authorizationHeader);
        const current_user = await this.findUserByToken.execute(accessToken)
        
        const recipe: CreateRecipeDto = {
            users_id: current_user,
            ...data
        }
        const response = await this.recipeService.create(recipe)
        return response
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to create the recipe'}
    }
  }
}
