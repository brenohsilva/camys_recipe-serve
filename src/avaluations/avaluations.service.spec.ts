import { Test, TestingModule } from '@nestjs/testing';
import { AvaluationsService } from './avaluations.service';

describe('AvaluationsService', () => {
  let service: AvaluationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaluationsService],
    }).compile();

    service = module.get<AvaluationsService>(AvaluationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
