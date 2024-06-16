/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { PrismaService } from 'src/prisma.service';
import { CreateRecipeUseCase } from './use_cases/create_recipe';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';
import { UpdateRecipeUseCase } from './use_cases/update_recipe';
import { FindAllRecipesUseCase } from './use_cases/find_all_recipes';
import { FindRecipeUseCase } from './use_cases/find_recipe';
import { DeleteRecipeUseCase } from './use_cases/delete_recipe';

@Module({
  controllers: [RecipesController],
  providers: [
    RecipesService,
    PrismaService,
    CreateRecipeUseCase,
    UpdateRecipeUseCase,
    FindAllRecipesUseCase,
    FindRecipeUseCase,
    DeleteRecipeUseCase,
    FindUserByTokenUseCase,
  ],
})
export class RecipesModule {}
