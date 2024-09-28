/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { SaveFavoriteUseCase } from './use_cases/save_favorite';
import { RemoveFavoriteUseCase } from './use_cases/remove_favorite';
import { PrismaService } from 'src/prisma.service';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';
import { FindOneFavoriteUseCase } from './use_cases/find_one_favorite';
import { FindAllFavoritesUseCase } from './use_cases/find_all_favorites';

@Module({
  controllers: [FavoritesController],
  providers: [
    FavoritesService,
    SaveFavoriteUseCase,
    RemoveFavoriteUseCase,
    PrismaService,
    FindUserByTokenUseCase,
    FindOneFavoriteUseCase,
    FindAllFavoritesUseCase,
  ],
})
export class FavoritesModule {}
