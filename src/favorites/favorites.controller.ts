/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { SaveFavoriteUseCase } from './use_cases/save_favorite';
import { RemoveFavoriteUseCase } from './use_cases/remove_favorite';
import { AuthGuard } from 'src/auth/auth.guard';
import { FindOneFavoriteUseCase } from './use_cases/find_one_favorite';
import { FindAllFavoritesUseCase } from './use_cases/find_all_favorites';

@Controller('favorites')
export class FavoritesController {
  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly saveFavoriteUseCase: SaveFavoriteUseCase,
    private readonly removeFavoriteUseCase: RemoveFavoriteUseCase,
    private readonly findOneFavoriteUseCase: FindOneFavoriteUseCase,
    private readonly findAllFavoritesUseCase: FindAllFavoritesUseCase
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Req() request: Request, @Body() recipeData: any) {
    return this.saveFavoriteUseCase.execute(request, recipeData);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() request: Request) {
    return this.findAllFavoritesUseCase.execute(request);
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Req() request: Request, @Param('id') id: string) {
    return this.findOneFavoriteUseCase.execute(request, id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.removeFavoriteUseCase.execute(id);
  }
}
