import { Types } from 'mongoose';
import { SuccessCondition } from '../../models/SuccessCondition.model';
import { SuccessConditionService } from '../../services/successCondition.service';

jest.mock('../../models/SuccessCondition.model', () => ({
  SuccessCondition: {
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  },
}));

describe('SuccessConditionService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    it('must return the list of success conditions', async () => {
      const mockData = [{ _id: new Types.ObjectId(), scGold: 10, scSilver: 7, scBronze: 5 }];
      (SuccessCondition.find as jest.Mock).mockReturnValue({
        lean: jest.fn().mockResolvedValue(mockData),
      });

      const result = await SuccessConditionService.get();

      expect(SuccessCondition.find).toHaveBeenCalledWith({});
      expect(result).toEqual({ successConditions: mockData });
    });

    it('should use the filter if it is transferred', async () => {
      const filter = { scGold: 10 };
      const mockData = [
        { _id: new Types.ObjectId(), scGold: filter.scGold, scSilver: 8, scBronze: 6 },
      ];
      (SuccessCondition.find as jest.Mock).mockReturnValue({
        lean: jest.fn().mockResolvedValue(mockData),
      });

      const result = await SuccessConditionService.get(filter);

      expect(SuccessCondition.find).toHaveBeenCalledWith(filter);
      expect(result.successConditions).toEqual(mockData);
    });
  });

  describe('create', () => {
    it('must create a document and return it', async () => {
      const input = { scGold: 12, scSilver: 9, scBronze: 6 };
      const createdId = new Types.ObjectId();
      const mockDoc = {
        _id: createdId,
        ...input,
        toObject: () => ({ _id: createdId, ...input }),
      };
      (SuccessCondition.create as jest.Mock).mockResolvedValue(mockDoc);

      const result = await SuccessConditionService.create(input);

      expect(SuccessCondition.create).toHaveBeenCalledWith(input);
      expect(result).toEqual({ _id: createdId, ...input });
    });
  });

  describe('update', () => {
    it('must update the document and return the new', async () => {
      const id = new Types.ObjectId().toHexString();
      const update = { scGold: 15 };
      const mockResult = { _id: id, scGold: update.scGold, scSilver: 10, scBronze: 8 };

      (SuccessCondition.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockResult);

      const result = await SuccessConditionService.update(id, update);

      expect(SuccessCondition.findByIdAndUpdate).toHaveBeenCalledWith(id, update, {
        new: true,
        lean: true,
      });
      expect(result).toEqual(mockResult);
    });
  });

  describe('delete', () => {
    it('must return TRUE if the document is deleted', async () => {
      const id = new Types.ObjectId().toHexString();
      (SuccessCondition.findByIdAndDelete as jest.Mock).mockResolvedValue({ _id: id });

      const result = await SuccessConditionService.delete(id);

      expect(SuccessCondition.findByIdAndDelete).toHaveBeenCalledWith(id);
      expect(result).toBe(true);
    });

    it('should return FALSE if the document is not found', async () => {
      (SuccessCondition.findByIdAndDelete as jest.Mock).mockResolvedValue(null);

      const result = await SuccessConditionService.delete(new Types.ObjectId().toHexString());

      expect(result).toBe(false);
    });
  });
});
