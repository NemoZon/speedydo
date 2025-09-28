import { Level, LevelType } from '../models/Level.model';

export class LevelService {
  static async get(filter?: Partial<LevelType>): Promise<{ levels: LevelType[] }> {
    const levels = await Level.find(filter || {});
    return { levels };
  }

  static async create(data: Omit<LevelType, '_id'>): Promise<LevelType> {
    return await Level.create(data);
  }

  static async update(id: string, update: Partial<LevelType>): Promise<LevelType | null> {
    return await Level.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Level.findByIdAndDelete(id);
    return !!res;
  }
}
