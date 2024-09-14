/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        const categoriesResponse = await this.prisma.categories.findMany({})
        return categoriesResponse
      }
}
