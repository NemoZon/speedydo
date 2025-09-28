import { NextFunction, Response, Request } from 'express';
import { API_KEY } from '../consts/settings';

export function apiKey(req: Request, res: Response, next: NextFunction) {
  try {
    const key = req.headers['x-api-key'];
    if (key && key === API_KEY) {
      next();
    } else {
      throw new Error(`Key ${key} is invalid or undefined`);
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: `Api Key is required : ${error}` });
  }
}
