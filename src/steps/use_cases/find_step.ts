/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StepsService } from '../steps.service';



@Injectable()
export class FindStepUseCase {
  constructor(private readonly stepService: StepsService) {}

  async execute(id: string) {
    try {
        const step = await this.stepService.findOne(Number(id))
        return step
    } catch (error) {
        console.error(error)
        return 'Failed to find the step'
    }
  }
}
