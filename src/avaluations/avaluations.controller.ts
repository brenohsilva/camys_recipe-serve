import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaluationsService } from './avaluations.service';
import { CreateAvaluationDto } from './dto/create-avaluation.dto';
import { UpdateAvaluationDto } from './dto/update-avaluation.dto';

@Controller('avaluations')
export class AvaluationsController {
  constructor(private readonly avaluationsService: AvaluationsService) {}

  @Post()
  create(@Body() createAvaluationDto: CreateAvaluationDto) {
    return this.avaluationsService.create(createAvaluationDto);
  }

  @Get()
  findAll() {
    return this.avaluationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaluationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaluationDto: UpdateAvaluationDto) {
    return this.avaluationsService.update(+id, updateAvaluationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaluationsService.remove(+id);
  }
}
