/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Req, Put, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeUseCase } from './use_cases/create_recipe';
import { UpdateRecipeUseCase } from './use_cases/update_recipe';
import { FindAllRecipesUseCase } from './use_cases/find_all_recipes';
import { FindRecipeUseCase } from './use_cases/find_recipe';
import { AuthGuard } from 'src/auth/auth.guard';
import { FindCompletedRecipeUseCase } from './use_cases/find_completed_recipe';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService, private readonly createRecipe: CreateRecipeUseCase, private readonly updateRecipe: UpdateRecipeUseCase, private readonly findAllRecipes: FindAllRecipesUseCase, private readonly findOneRecipe: FindRecipeUseCase, private readonly findCompletedRecipe: FindCompletedRecipeUseCase) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  create(@Body() recipe: any, @Req() request: Request) {
    return this.createRecipe.execute(request, recipe);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.updateRecipe.execute(id, updateRecipeDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() request: Request) {
    return this.findAllRecipes.execute(request);
  }
  
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneRecipe.execute(id);
  }

  // @UseGuards(AuthGuard)
  @Get(':id/completed')
  findCompleted(@Param('id') id: string) {
    return this.findCompletedRecipe.execute(id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
