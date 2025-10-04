import { FilterQuery } from 'mongoose';
import { Answer, AnswerType } from '../models/Answer.model';

export class AnswerService {
  static async get(filter?: FilterQuery<AnswerType>): Promise<{ answers: AnswerType[] }> {
    const answers = await Answer.find(filter || {}).lean();
    return { answers };
  }

  static async create(data: Omit<AnswerType, '_id'>): Promise<AnswerType> {
    const doc = await Answer.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<AnswerType>): Promise<AnswerType | null> {
    return await Answer.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Answer.findByIdAndDelete(id);
    return Boolean(res);
  }
}
