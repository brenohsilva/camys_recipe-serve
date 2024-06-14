/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { StepsModule } from './steps/steps.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AvaluationsModule } from './avaluations/avaluations.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, RecipesModule, StepsModule, IngredientsModule, AvaluationsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
