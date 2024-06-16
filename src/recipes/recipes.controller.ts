/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Req, Put } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeUseCase } from './use_cases/create_recipe';
import { UpdateRecipeUseCase } from './use_cases/update_recipe';
import { FindAllRecipesUseCase } from './use_cases/find_all_recipes';
import { FindRecipeUseCase } from './use_cases/find_recipe';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService, private readonly createRecipe: CreateRecipeUseCase, private readonly updateRecipe: UpdateRecipeUseCase, private readonly findAllRecipes: FindAllRecipesUseCase, private readonly findOneRecipe: FindRecipeUseCase) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto, @Req() request: Request) {
    return this.createRecipe.execute(request, createRecipeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.updateRecipe.execute(id, updateRecipeDto);
  }

  @Get()
  findAll() {
    return this.findAllRecipes.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneRecipe.execute(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
