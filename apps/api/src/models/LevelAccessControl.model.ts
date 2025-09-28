import { InferSchemaType, Schema, model } from 'mongoose';

const LevelAccessControlSchema = new Schema({
  levacId: { type: Schema.Types.ObjectId, alias: '_id' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
});

export type LevelAccessControlType = InferSchemaType<typeof LevelAccessControlSchema>;
export const LevelAccessControl = model('LevelAccessControl', LevelAccessControlSchema);
