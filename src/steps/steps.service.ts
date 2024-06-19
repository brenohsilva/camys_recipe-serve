/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StepsService {
  constructor(private prisma: PrismaService) {}
  create(createStepDto: CreateStepDto) {
    const stepResponse = this.prisma.steps.create({
      data: createStepDto
    })
    return stepResponse;
  }

  findAll(id: number) {
    const stepResponse = this.prisma.steps.findMany({
      where: {
        recipes_id: id
      }
    })
    return stepResponse
  }

  findOne(id: number) {
    const stepResponse = this.prisma.steps.findUnique({
      where: {
        id
      }
    })
    return stepResponse;
  }

  update(id: number, updateStepDto: UpdateStepDto) {
    const stepResponse = this.prisma.steps.update({
      where: {id},
      data: updateStepDto
    })
    return stepResponse;
  }

  remove(id: number) {
    const stepResponse = this.prisma.steps.delete({
      where: {id}
    })
    return stepResponse;
  }
}
