/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories.service';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(private readonly categoriesService: CategoriesService) {}

  async execute() {
    const categories = await this.categoriesService.findAll();
    return categories;
  }
}
