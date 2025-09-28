import { Test, TestType } from '../models/Test.model';

export class TestService {
  static async get(filter?: Partial<TestType>): Promise<{ tests: TestType[] }> {
    const tests = await Test.find(filter || {});
    return { tests };
  }

  static async create(data: Omit<TestType, '_id'>): Promise<TestType> {
    return await Test.create(data);
  }

  static async update(id: string, update: Partial<TestType>): Promise<TestType | null> {
    return await Test.findByIdAndUpdate(id, update, { new: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Test.findByIdAndDelete(id);
    return !!res;
  }
}
