import { Test, TestingModule } from '@nestjs/testing';
import { ProcessResultController } from './process_result.controller';

describe('ProcessResultController', () => {
  let controller: ProcessResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessResultController],
    }).compile();

    controller = module.get<ProcessResultController>(ProcessResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
