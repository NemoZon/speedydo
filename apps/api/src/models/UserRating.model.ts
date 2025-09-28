import { InferSchemaType, Schema, model } from 'mongoose';

const UserRatingSchema = new Schema({
  urId: { type: Schema.Types.ObjectId, alias: '_id' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  urPoints: { type: Number, default: 0 },
});

export type UserRatingType = InferSchemaType<typeof UserRatingSchema>;
export const UserRating = model('UserRating', UserRatingSchema);
