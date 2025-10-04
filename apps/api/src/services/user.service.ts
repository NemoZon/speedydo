import bcrypt from 'bcrypt';
import { FilterQuery } from 'mongoose';
import { User, UserType } from '../models/User.model';

export class UserService {
  static async get(
    filter?: FilterQuery<UserType>,
  ): Promise<{ users: Omit<UserType, 'password'>[] }> {
    const users = await User.find(filter || {})
      .select('-password')
      .lean();
    return { users };
  }

  static async update(
    id: string,
    update: Partial<UserType>,
  ): Promise<Omit<UserType, 'password'> | null> {
    const updateData = { ...update };

    if (update.userPassword) {
      updateData.userPassword = await bcrypt.hash(update.userPassword, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true })
      .select('-password')
      .lean();

    return updatedUser;
  }

  // TODO
  // static async delete(id: string): Promise<boolean> {
  //   const res = await User.findByIdAndDelete(id);
  //   return Boolean(res);
  // }
}
