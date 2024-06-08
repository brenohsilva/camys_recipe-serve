import { Injectable } from '@nestjs/common';
import { CreateAvaluationDto } from './dto/create-avaluation.dto';
import { UpdateAvaluationDto } from './dto/update-avaluation.dto';

@Injectable()
export class AvaluationsService {
  create(createAvaluationDto: CreateAvaluationDto) {
    return 'This action adds a new avaluation';
  }

  findAll() {
    return `This action returns all avaluations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaluation`;
  }

  update(id: number, updateAvaluationDto: UpdateAvaluationDto) {
    return `This action updates a #${id} avaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaluation`;
  }
}
