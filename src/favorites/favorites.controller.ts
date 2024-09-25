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

@Controller('favorites')
export class FavoritesController {
  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly saveFavoriteUseCase: SaveFavoriteUseCase,
    private readonly removeFavoriteUseCase: RemoveFavoriteUseCase,
    private readonly findOneFavoriteUseCase: FindOneFavoriteUseCase
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Req() request: Request, @Body() recipeData: any) {
    return this.saveFavoriteUseCase.execute(request, recipeData);
  }

  // @Get()
  // findAll() {
  //   return this.favoritesService.findAll();
  // }

  @Get(':id')
  findOne(@Req() request: Request, @Param('id') id: string) {
    return this.findOneFavoriteUseCase.execute(request, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.removeFavoriteUseCase.execute(id);
  }
}
