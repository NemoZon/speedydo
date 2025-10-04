import { Types } from 'mongoose';
import { UserRating } from '../../models/UserRating.model';
import { UserRatingService } from '../../services/userRating.service';

jest.mock('../../models/UserRating.model', () => ({
  UserRating: {
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  },
}));

describe.skip('UserRatingService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    it('must return the list of ratings', async () => {
      const mockData = [{ _id: new Types.ObjectId(), user: new Types.ObjectId(), urPoints: 5 }];
      (UserRating.find as jest.Mock).mockReturnValue({
        lean: jest.fn().mockResolvedValue(mockData),
      });

      const result = await UserRatingService.get();

      expect(UserRating.find).toHaveBeenCalledWith({});
      expect(result).toEqual({ usersRating: mockData });
    });

    it('should use the filter if it is transferred', async () => {
      const userId = new Types.ObjectId();
      const filter = { user: userId };
      const mockData = [{ _id: new Types.ObjectId(), user: userId, urPoints: 4 }];
      (UserRating.find as jest.Mock).mockReturnValue({
        lean: jest.fn().mockResolvedValue(mockData),
      });

      const result = await UserRatingService.get(filter);

      expect(UserRating.find).toHaveBeenCalledWith(filter);
      expect(result.usersRating).toEqual(mockData);
    });
  });

  describe('create', () => {
    it('must create a document and return it', async () => {
      const input = { user: new Types.ObjectId(), urPoints: 5 };
      const createdId = new Types.ObjectId();
      const mockDoc = {
        _id: createdId,
        ...input,
        toObject: () => ({ _id: createdId, ...input }),
      };
      (UserRating.create as jest.Mock).mockResolvedValue(mockDoc);

      const result = await UserRatingService.create(input);

      expect(UserRating.create).toHaveBeenCalledWith(input);
      expect(result).toEqual({ _id: createdId, ...input });
    });
  });

  describe('update', () => {
    it('must update the document and return the new', async () => {
      const id = new Types.ObjectId();
      const userId = new Types.ObjectId();
      const update = { urPoints: 4 };
      const mockResult = { _id: id, user: userId, urPoints: 4 };

      (UserRating.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockResult);

      const result = await UserRatingService.update(id.toHexString(), update);

      expect(UserRating.findByIdAndUpdate).toHaveBeenCalledWith(id.toHexString(), update, {
        new: true,
        lean: true,
      });
      expect(result).toEqual(mockResult);
    });
  });

  describe('delete', () => {
    it('must return True if the document is deleted', async () => {
      const id = '1';
      (UserRating.findByIdAndDelete as jest.Mock).mockResolvedValue({ _id: id });

      const result = await UserRatingService.delete(id);

      expect(UserRating.findByIdAndDelete).toHaveBeenCalledWith(id);
      expect(result).toBe(true);
    });

    it('should return FALSE if the document is not found', async () => {
      (UserRating.findByIdAndDelete as jest.Mock).mockResolvedValue(null);

      const result = await UserRatingService.delete('123');

      expect(result).toBe(false);
    });
  });
});
