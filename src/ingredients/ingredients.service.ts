/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  create(createIngredientDto: CreateIngredientDto) {

    const ingredientsResponse =  this.prisma.ingredients.create({
      data: createIngredientDto
    })
    return ingredientsResponse;
  }

  findAll(id: number) {
    const ingredientsResponse = this.prisma.ingredients.findMany(
      {
        where: {
          recipes_id: id
        }
      }
    )
    return ingredientsResponse;
  }

  findOne(id: number) {
    const ingredientsResponse = this.prisma.ingredients.findUnique({
      where: {
        id
      }
    })
    return ingredientsResponse
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const ingredientsResponse = this.prisma.ingredients.update({
      where: {id},
      data: updateIngredientDto
    })
    return ingredientsResponse;
  }

  remove(id: number) {
    const ingredientsResponse = this.prisma.ingredients.delete({
      where: {id}
    })
    return ingredientsResponse;
  }
}
