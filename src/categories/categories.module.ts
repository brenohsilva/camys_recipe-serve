/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/prisma.service';
import { FindAllCategoriesUseCase } from './use_cases/find_all_categories';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, FindAllCategoriesUseCase  ],
})
export class CategoriesModule {}
