import { Answer, AnswerType } from '../models/Answer.model';

export class AnswerService {
  static async get(filter?: Partial<AnswerType>): Promise<{ answers: AnswerType[] }> {
    const answers = await Answer.find(filter || {});
    return { answers };
  }

  static async create(data: Omit<AnswerType, '_id'>): Promise<AnswerType> {
    return await Answer.create(data);
  }

  static async update(id: string, update: Partial<AnswerType>): Promise<AnswerType | null> {
    return await Answer.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Answer.findByIdAndDelete(id);
    return !!res;
  }
}
