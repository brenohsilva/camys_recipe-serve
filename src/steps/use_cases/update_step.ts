/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StepsService } from '../steps.service';
import { UpdateStepDto } from '../dto/update-step.dto';




@Injectable()
export class UpdateStepUseCase {
  constructor(private readonly stepService: StepsService) {}

  async execute(step_id: string, data: UpdateStepDto) {
    try {
        const response = await this.stepService.update(Number(step_id), data)
        return response
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to update the step'}
    }
  }
}
