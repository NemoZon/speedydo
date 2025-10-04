import { FilterQuery } from 'mongoose';
import { Chapter, ChapterType } from '../models/Chapter.model';

export class ChapterService {
  static async get(filter?: FilterQuery<ChapterType>): Promise<{ chapters: ChapterType[] }> {
    const chapters = await Chapter.find(filter || {}).lean();
    return { chapters };
  }

  static async create(data: Omit<ChapterType, '_id'>): Promise<ChapterType> {
    const doc = await Chapter.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<ChapterType>): Promise<ChapterType | null> {
    return await Chapter.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Chapter.findByIdAndDelete(id);
    return Boolean(res);
  }
}
