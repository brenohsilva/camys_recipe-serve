/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { CreateIngredientUseCase } from './use_cases/create_ingredients';
import { FindAllIngredientssUseCase } from './use_cases/find_all_ingredients';
import { FindIngredientUseCase } from './use_cases/find_ingredient';
import { UpdateIngredientUseCase } from './use_cases/update_ingredients';
import { DeleteIngredientUseCase } from './use_cases/delete_ingredients';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('recipes')
export class IngredientsController {
  constructor(
    private readonly createIngredients: CreateIngredientUseCase,
    private readonly findAllIngredients: FindAllIngredientssUseCase,
    private readonly findOneIngredient: FindIngredientUseCase,
    private readonly updateIngredient: UpdateIngredientUseCase,
    private readonly deleteIngredient: DeleteIngredientUseCase,
  ) {}

  @UseGuards(AuthGuard)
  @Post(':recipe_id/ingredients')
  create(
    @Param('recipe_id') recipe_id: string,
    @Body() createIngredientDto: CreateIngredientDto,
  ) {
    return this.createIngredients.execute(recipe_id, createIngredientDto);
  }

  @UseGuards(AuthGuard)
  @Get(':recipe_id/ingredients')
  findAll(@Param('recipe_id') recipe_id: string) {
    return this.findAllIngredients.execute(recipe_id);
  }

  @UseGuards(AuthGuard)
  @Get(':recipe_id/ingredients/:id')
  findOne(@Param('recipe_id') recipe_id: string, @Param('id') id: string) {
    return this.findOneIngredient.execute(id);
  }

  @UseGuards(AuthGuard)
  @Put(':recipe_id/ingredients/:id')
  update(
    @Param('recipe_id') recipe_id: string,
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return this.updateIngredient.execute(id, updateIngredientDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':recipe_id/ingredients/:id')
  remove(
    @Param('recipe_id') recipe_id: string,
    @Param('id') id: string) {
    return this.deleteIngredient.execute(id);
  }
}
