import { FilterQuery } from 'mongoose';
import { SuccessCondition, SuccessConditionType } from '../models/SuccessCondition.model';

export class SuccessConditionService {
  static async get(
    filter?: FilterQuery<SuccessConditionType>,
  ): Promise<{ successConditions: SuccessConditionType[] }> {
    const successConditions = await SuccessCondition.find(filter || {}).lean();
    return { successConditions };
  }

  static async create(data: Omit<SuccessConditionType, '_id'>): Promise<SuccessConditionType> {
    const doc = await SuccessCondition.create(data);
    return doc.toObject();
  }

  static async update(
    id: string,
    update: Partial<SuccessConditionType>,
  ): Promise<SuccessConditionType | null> {
    return await SuccessCondition.findByIdAndUpdate(id, update, { new: true, lean: true });
  }

  static async delete(id: string): Promise<boolean> {
    const res = await SuccessCondition.findByIdAndDelete(id);
    return Boolean(res);
  }
}
