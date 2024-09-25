/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FavoritesService } from '../favorites.service';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';

@Injectable()
export class FindOneFavoriteUseCase {
  constructor(private readonly favoritesService: FavoritesService, private readonly findUserByToken: FindUserByTokenUseCase) {}

  async execute(request: Request, recipeID: string) {
    const authorizationHeader = request.headers['authorization'];
      const accessToken = JwtToken(authorizationHeader);
      const current_user = await this.findUserByToken.execute(accessToken);
    const response = await this.favoritesService.findOne(current_user.sub, Number(recipeID))
    console.log(response)
    if (response) {
        return {id: response.id, status_code: 200}
    }
    return {message: "recipe unfavorited", status: 404};
  }
}
