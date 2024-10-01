/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';
import { RecipesService } from '../recipes.service';

@Injectable()
export class FindAllUserRecipesUseCase {
  constructor(
    private readonly recipeService: RecipesService,
    private readonly findUserByToken: FindUserByTokenUseCase,
  ) {}

  async execute(request: Request) {
    const authorizationHeader = request.headers['authorization'];
    const accessToken = JwtToken(authorizationHeader);
    const current_user = await this.findUserByToken.execute(accessToken);
    const response = await this.recipeService.findAllUserRecipes(
      current_user.sub,
    );
    if (response) {
      return { recipes: response, status_code: 200 };
    }
    return { message: 'there is no recipe', status: 404 };
  }
}
