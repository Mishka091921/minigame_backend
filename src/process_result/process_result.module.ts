import { Module } from '@nestjs/common';
import { ProcessResultController } from './process_result.controller';
import { ProcessResultService } from './process_result.service';

@Module({
  controllers: [ProcessResultController],
  providers: [ProcessResultService]
})
export class ProcessResultModule {}
