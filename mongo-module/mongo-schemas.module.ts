import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoResult,MongoResultSchema } from 'schema/mongo-result.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoResult.name, schema: MongoResultSchema },
    ], 'minigame_result_connection'),
  ],
  exports: [MongooseModule],
})
export class MongoSchemasModule {}
