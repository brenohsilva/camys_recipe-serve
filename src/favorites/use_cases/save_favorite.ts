/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FavoritesService } from '../favorites.service';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';

@Injectable()
export class SaveFavoriteUseCase {
  constructor(private readonly favoritesService: FavoritesService, private readonly findUserByToken: FindUserByTokenUseCase) {}

  async execute(request: Request, recipeData: any) {
    const authorizationHeader = request.headers['authorization'];
      const accessToken = JwtToken(authorizationHeader);
      const current_user = await this.findUserByToken.execute(accessToken);
    const data = {
        users_id: current_user.sub,
        recipes_id: Number(recipeData.recipes_id)
    }
    const response = await this.favoritesService.create(data)
    if (response) {
        return {id: response, status_code: 200}
    }
    return {message: "somenthing went wrong", status: 500};
  }
}
