/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {

    const recipeResponse = this.prisma.recipes.create({
      data: createRecipeDto
    })

    return recipeResponse;
  }
  
  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipeResponse = this.prisma.recipes.update({
      where: {
        id
      },
      data: updateRecipeDto
    })

    return recipeResponse
  }

  remove(id: number) {
    try {
      this.prisma.recipes.delete({
        where: {
          id
        }
      })

      return {"message": "recipe deleted successfully"}
      
    } catch (error) {
      console.error(error)
      return {"message": "failed to delete successfully"}
    }
  }

  findAll(id: number) {
    const recipeResponse = this.prisma.recipes.findMany({
      where: {
        users_id: id
      }
    })
    return recipeResponse;
  }

  findOne(id: number) {
    const recipeResponse = this.prisma.recipes.findFirst({
      where: {
        id
      }
    })
    return recipeResponse;
  }

}
