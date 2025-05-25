import { Test, TestingModule } from '@nestjs/testing';
import { ChargingService } from './charging.service';

describe('ChargingService', () => {
  let service: ChargingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargingService],
    }).compile();

    service = module.get<ChargingService>(ChargingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
