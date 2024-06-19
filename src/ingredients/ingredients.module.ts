/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { PrismaService } from 'src/prisma.service';
import { CreateIngredientUseCase } from './use_cases/create_ingredients';
import { UpdateIngredientUseCase } from './use_cases/update_ingredients';
import { DeleteIngredientUseCase } from './use_cases/delete_ingredients';
import { FindIngredientUseCase } from './use_cases/find_ingredient';
import { FindAllIngredientssUseCase } from './use_cases/find_all_ingredients';

@Module({
  controllers: [IngredientsController],
  providers: [
    IngredientsService,
    PrismaService,
    CreateIngredientUseCase,
    UpdateIngredientUseCase,
    DeleteIngredientUseCase,
    FindIngredientUseCase,
    FindAllIngredientssUseCase,
  ],
})
export class IngredientsModule {}
