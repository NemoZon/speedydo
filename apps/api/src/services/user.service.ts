import { User, UserType } from '../models/User.model';

export class UserService {
  static async get(filter?: Partial<UserType>): Promise<{ users: UserType[] }> {
    // TODO hide password
    const users = await User.find(filter || {});
    return { users };
  }

  static async create(data: Omit<UserType, '_id'>): Promise<UserType> {
    // TODO: to hash password
    return await User.create(data);
  }

  static async update(id: string, update: Partial<UserType>): Promise<UserType | null> {
    return await User.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await User.findByIdAndDelete(id);
    return !!res;
  }
}
