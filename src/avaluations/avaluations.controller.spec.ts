import { Test, TestingModule } from '@nestjs/testing';
import { AvaluationsController } from './avaluations.controller';
import { AvaluationsService } from './avaluations.service';

describe('AvaluationsController', () => {
  let controller: AvaluationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaluationsController],
      providers: [AvaluationsService],
    }).compile();

    controller = module.get<AvaluationsController>(AvaluationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
