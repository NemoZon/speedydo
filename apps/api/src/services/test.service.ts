import { FilterQuery } from 'mongoose';
import { Test, TestType } from '../models/Test.model';

export class TestService {
  static async get(filter?: FilterQuery<TestType>): Promise<{ tests: TestType[] }> {
    const tests = await Test.find(filter || {}).lean();
    return { tests };
  }

  static async create(data: Omit<TestType, '_id'>): Promise<TestType> {
    const doc = await Test.create(data);
    return doc.toObject();
  }

  static async update(id: string, update: Partial<TestType>): Promise<TestType | null> {
    return await Test.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await Test.findByIdAndDelete(id);
    return Boolean(res);
  }
}
