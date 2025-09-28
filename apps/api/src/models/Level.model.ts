import { InferSchemaType, Schema, model } from 'mongoose';
import { DifficultyEnum } from './DifficultyEnum.model';

const LevelSchema = new Schema({
  levelId: { type: Schema.Types.ObjectId, alias: '_id' },
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter', required: true },
  levelTitle: { type: String, required: true, maxlength: 100 },
  levelDesc: { type: String, maxlength: 1000 },
  levelDifficulty: {
    type: String,
    enum: Object.values(DifficultyEnum),
    required: true,
  },
  levelWords: { type: Number, min: 0, required: true },
  levelTimeSec: { type: Number, min: 0, required: true },
});

export type LevelType = InferSchemaType<typeof LevelSchema>;
export const Level = model('Level', LevelSchema);
