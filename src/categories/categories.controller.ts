/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { FindAllCategoriesUseCase } from './use_cases/find_all_categories';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly getAllCategories: FindAllCategoriesUseCase) {}

  @Get('')
  findAll() {
    return this.getAllCategories.execute();
  }
}
