import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaluationDto } from './create-avaluation.dto';

export class UpdateAvaluationDto extends PartialType(CreateAvaluationDto) {}
