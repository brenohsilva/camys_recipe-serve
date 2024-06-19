/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FindStepUseCase } from './find_step';
import { StepsService } from '../steps.service';


@Injectable()
export class DeleteStepUseCase {
  constructor(private readonly stepService: StepsService, private readonly findStepUseCase: FindStepUseCase) {}

  
  async execute(id: string) {
    try {
        const step = this.findStepUseCase.execute(id)
        if (!step) {
            return {'message': 'step not found'}            
        }
        await this.stepService.remove(Number(id))
        return {'message': 'step deleted successfully'}
          
    } catch (error) {
        console.error(error)
        return  {'message': 'Failed to delete the step'}
    }
  }
}
