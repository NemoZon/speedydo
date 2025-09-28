import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  try {
    const method = req.method;
    const url = req.url;
    console.log(`${method} - ${url}`);
  } catch (error) {
    console.log(error);
  } finally {
    next();
  }
}
