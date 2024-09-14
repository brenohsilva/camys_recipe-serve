/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RecipesService } from '../recipes.service';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { JwtToken } from 'src/utils/token';
import { FindUserByTokenUseCase } from 'src/users/use_cases/find_user_by_token';
import { PrismaService } from 'src/prisma.service';
import { CreateSelectedCategoriesUseCase } from 'src/categories/use_cases/create_selected_categories';

@Injectable()
export class CreateRecipeUseCase {
  constructor(
    private prisma: PrismaService,
    private readonly recipeService: RecipesService,
    private readonly findUserByToken: FindUserByTokenUseCase,
    private readonly selectedCategoriesUseCase: CreateSelectedCategoriesUseCase,
  ) {}

  async execute(request: Request, data: any) {
    try {
      const authorizationHeader = request.headers['authorization'];
      const accessToken = JwtToken(authorizationHeader);
      const current_user = await this.findUserByToken.execute(accessToken);

      const recipe: CreateRecipeDto = {
        users_id: current_user.sub,
        name: data.name,
        image: data.urlImage,
        description: data.description,
        type: Number(data.type),
        time: Number(data.time),
        portions: Number(data.portion),
      };

      const ingredientsData = data.ingredients;
      const stepsData = data.ingredients;
      const selectedCategoriesData = data.selectedCategories;

      const selectedCategoriesId = await this.selectedCategoriesUseCase.execute(
        selectedCategoriesData,
      );

      const result = await this.prisma.$transaction(async (prisma) =>{
        
        const createRecipe = await this.recipeService.create(recipe);

        const setIngredients = await ingredientsData.map((ingredient) =>{
          return  prisma.ingredients.create({
            data: {
              recipes_id: createRecipe.id,
              name: ingredient.name,
              type: ingredient.type
            }
          })
        })

        const setSteps = stepsData.map((step) => {
          return prisma.steps.create({
            data: {
              recipes_id: createRecipe.id,
              step: step.name,
              type: step.type
            }
          })
        })

        const setSelectedCategories = await selectedCategoriesId.map((categoryId: number)=>{
          return prisma.categories_selected.create({
            data: {
              recipes_id: createRecipe.id,
              categories_id: categoryId
            }
          })
        })

        await Promise.all([
          ...setIngredients,
          ...setSteps,
          ...setSelectedCategories
        ])
      })
      
      return  { message: 'recipe created successfully', status: '200' };;
    } catch (error) {
      console.error('Estamos com problemas', error);
      return { message: 'Failed to create the recipe', status: '404' };
    }
  }
}
