import { FilterQuery } from 'mongoose';
import { UserRating, UserRatingType } from '../models/UserRating.model';
export class UserRatingService {
  static async get(
    filter?: FilterQuery<UserRatingType>,
  ): Promise<{ usersRating: UserRatingType[] }> {
    const usersRating = await UserRating.find(filter || {}).lean();
    return { usersRating };
  }

  static async create(data: Omit<UserRatingType, '_id'>): Promise<UserRatingType> {
    const doc = await UserRating.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<UserRatingType>): Promise<UserRatingType | null> {
    return await UserRating.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await UserRating.findByIdAndDelete(id);
    return Boolean(res);
  }
}
