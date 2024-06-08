import { Module } from '@nestjs/common';
import { AvaluationsService } from './avaluations.service';
import { AvaluationsController } from './avaluations.controller';

@Module({
  controllers: [AvaluationsController],
  providers: [AvaluationsService],
})
export class AvaluationsModule {}
