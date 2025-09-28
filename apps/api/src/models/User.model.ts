import { InferSchemaType, Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    alias: '_id',
  },
  userEmail: { type: String, required: true, unique: true },
  userFirstname: { type: String, required: true },
  userLastname: { type: String },
  userNickname: { type: String, required: true, unique: true },
  userBirthday: { type: Date, required: true },
  userPassword: { type: String, required: true, minlength: 44 },
  userStreak: { type: Number, default: 0 },
});

export type UserType = InferSchemaType<typeof UserSchema>;
export const User = model('User', UserSchema);
