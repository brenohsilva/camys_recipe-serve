/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { StepsService } from '../steps.service';
import { CreateStepDto } from '../dto/create-step.dto';



@Injectable()
export class CreateStepUseCase {
  constructor(private readonly stepService: StepsService) {}

  async execute(recipe_id: string, data: any) {
    try {
         const step: CreateStepDto = {
            recipes_id: Number(recipe_id),
            ...data
         }

        const response = await this.stepService.create(step)
        return response
    } catch (error) {
        console.error( "Estamos com problemas", error)
        return {'message':'Failed to create the step'}
    }
  }
}
