import { FilterQuery } from 'mongoose';
import { Level, LevelType } from '../models/Level.model';

export class LevelService {
  static async get(filter?: FilterQuery<LevelType>): Promise<{ levels: LevelType[] }> {
    const levels = await Level.find(filter || {}).lean();
    return { levels };
  }

  static async create(data: Omit<LevelType, '_id'>): Promise<LevelType> {
    const doc = await Level.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<LevelType>): Promise<LevelType | null> {
    return await Level.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Level.findByIdAndDelete(id);
    return Boolean(res);
  }
}
