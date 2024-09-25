/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}
  async create(createFavoriteDto: CreateFavoriteDto): Promise<any> {
    try {
      const response = await this.prisma.favories.create({
        data: createFavoriteDto
      })
      return response.id;
    } catch (error) {
      console.error("something went wrong", error)
      return false
    }
  }

  async findAll(users_id: number) {
    try {
      const response = await this.prisma.favories.findMany({
        where: {
          users_id
        }
      })
      return response
    } catch (error) {
      console.error("something went wrong", error)
      return false
    }
  }

async findOne(users_id: number, recipes_id: number) {
  try {
    const response = await this.prisma.favories.findFirst({
      where: {
        users_id: users_id,
        AND: {
          recipes_id: recipes_id
        }
      }
    })

    return response;
    
  } catch (error) {
    console.error("something went wrong", error)
      return false
  }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.favories.delete({
        where: {
          id
        }
      })
      return response
    } catch (error) {
      console.error("something went wrong", error)
      return false
    }
  }
}
