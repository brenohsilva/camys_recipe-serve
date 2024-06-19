/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { CreateStepUseCase } from './use_cases/create_step';
import { FindAllStepsUseCase } from './use_cases/find_all_step';
import { FindStepUseCase } from './use_cases/find_step';
import { UpdateStepUseCase } from './use_cases/update_step';
import { DeleteStepUseCase } from './use_cases/delete_step';

@Controller('recipes')
export class StepsController {
  constructor(private readonly stepsService: StepsService,
    private readonly createSteps: CreateStepUseCase,
    private readonly findAllSteps: FindAllStepsUseCase,
    private readonly findOneStep: FindStepUseCase,
    private readonly updateStep: UpdateStepUseCase,
    private readonly deleteStep: DeleteStepUseCase
  ) {}

  @Post(':recipe_id/steps')
  create(
    @Param('recipe_id') recipe_id: string,
    @Body() createStepDto: CreateStepDto) {
    return this.createSteps.execute(recipe_id, createStepDto);
  }

  @Get(':recipe_id/steps')
  findAll(
    @Param('recipe_id') recipe_id: string,
  ) {
    return this.findAllSteps.execute(recipe_id);
  }

  @Get(':recipe_id/steps/:id')
  findOne(
    @Param('recipe_id') recipe_id: string,
    @Param('id') id: string) {
    return this.findOneStep.execute(id);
  }

  @Put(':recipe_id/steps/:id')
  update(
    @Param('recipe_id') recipe_id: string,
    @Param('id') id: string, 
    @Body() updateStepDto: UpdateStepDto) {
    return this.updateStep.execute(id, updateStepDto);
  }

  @Delete(':recipe_id/steps/:id')
  remove(
    @Param('recipe_id') recipe_id: string,
    @Param('id') id: string) {
    return this.deleteStep.execute(id);
  }
}
