/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsController } from './steps.controller';
import { PrismaService } from 'src/prisma.service';
import { CreateStepUseCase } from './use_cases/create_step';
import { UpdateStepUseCase } from './use_cases/update_step';
import { DeleteStepUseCase } from './use_cases/delete_step';
import { FindStepUseCase } from './use_cases/find_step';
import { FindAllStepsUseCase } from './use_cases/find_all_step';

@Module({
  controllers: [StepsController],
  providers: [StepsService, PrismaService,
    CreateStepUseCase, UpdateStepUseCase, DeleteStepUseCase, FindStepUseCase, FindAllStepsUseCase
  ],
})
export class StepsModule {}
