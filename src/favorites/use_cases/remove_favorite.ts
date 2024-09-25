/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FavoritesService } from '../favorites.service';

@Injectable()
export class RemoveFavoriteUseCase {
  constructor(private readonly favoritesService: FavoritesService) {}

  async execute(id: string) {
    console.log(id)
    const response = await this.favoritesService.remove(Number(id))
    if (response) {
        return {message: "remove favorite successfully", status: 200}
    }
    return {message: "somenthing went wrong", status: 500};
  }
}
