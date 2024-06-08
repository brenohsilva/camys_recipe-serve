import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { StepsModule } from './steps/steps.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AvaluationsModule } from './avaluations/avaluations.module';

@Module({
  imports: [UsersModule, RecipesModule, StepsModule, IngredientsModule, AvaluationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
