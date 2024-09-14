/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories.service';

@Injectable()
export class CreateSelectedCategoriesUseCase {
  constructor(private readonly categoriesService: CategoriesService) {}

  async execute(selectedCategoriesData: any) {
    const categories = await this.categoriesService.findAll();
    const selectedCategories = categories.filter((category) =>
      selectedCategoriesData.includes(category.name),
    );
    const selectedCateogiesIds = selectedCategories.map(
      (category) => category.id,
    );
  
    return selectedCateogiesIds;
  }
}
