import { FilterQuery } from 'mongoose';
import { Question, QuestionType } from '../models/Question.model';

export class QuestionService {
  static async get(filter?: FilterQuery<QuestionType>): Promise<{ questions: QuestionType[] }> {
    const questions = await Question.find(filter || {}).lean();
    return { questions };
  }

  static async create(data: Omit<QuestionType, '_id'>): Promise<QuestionType> {
    const doc = await Question.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<QuestionType>): Promise<QuestionType | null> {
    return await Question.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Question.findByIdAndDelete(id);
    return Boolean(res);
  }
}
