/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { StepsModule } from './steps/steps.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AvaluationsModule } from './avaluations/avaluations.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, RecipesModule, StepsModule, IngredientsModule, AvaluationsModule, AuthModule, CategoriesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
