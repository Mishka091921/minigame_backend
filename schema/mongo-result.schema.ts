import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MongoResultDocument = MongoResult & Document;

@Schema({ timestamps: true }) // adds createdAt and updatedAt automatically
export class MongoResult {
  @Prop()
  game_name: string;

  @Prop()
  result: string;

  @Prop()
  round_id: string;

  @Prop()
  date: string; // or Date, depending on what you want
}

export const MongoResultSchema = SchemaFactory.createForClass(MongoResult);
