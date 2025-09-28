import { Question, QuestionType } from '../models/Question.model';

export class QuestionService {
  static async get(filter?: Partial<QuestionType>): Promise<{ questions: QuestionType[] }> {
    const questions = await Question.find(filter || {});
    return { questions };
  }

  static async create(data: Omit<QuestionType, '_id'>): Promise<QuestionType> {
    return await Question.create(data);
  }

  static async update(id: string, update: Partial<QuestionType>): Promise<QuestionType | null> {
    return await Question.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Question.findByIdAndDelete(id);
    return !!res;
  }
}
