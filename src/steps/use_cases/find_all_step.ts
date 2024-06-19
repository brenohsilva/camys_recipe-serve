/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StepsService } from '../steps.service';




@Injectable()
export class FindAllStepsUseCase {
  constructor(private readonly stepService: StepsService) {}

  async execute(recipe_id: string) {
    try {
        const step = await this.stepService.findAll(Number(recipe_id))
        if (step.length === 0) {
            return {"message": "There is no steps for this Recipe"}
            
        }
        return step
    } catch (error) {
        console.error(error)
        return 'Failed to find steps'
    }
  }
}
