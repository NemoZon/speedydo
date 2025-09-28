import { Chapter, ChapterType } from '../models/Chapter.model';

export class ChapterService {
  static async get(filter?: Partial<ChapterType>): Promise<{ chapters: ChapterType[] }> {
    const chapters = await Chapter.find(filter || {});
    return { chapters };
  }

  static async create(data: Omit<ChapterType, '_id'>): Promise<ChapterType> {
    return await Chapter.create(data);
  }

  static async update(id: string, update: Partial<ChapterType>): Promise<ChapterType | null> {
    return await Chapter.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Chapter.findByIdAndDelete(id);
    return !!res;
  }
}
