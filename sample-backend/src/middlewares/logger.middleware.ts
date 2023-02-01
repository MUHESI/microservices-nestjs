import { Request, Response } from 'express';

export const logger = (req: Request, res: Response, next) => {
  console.log('logger>>', req.ip);
  next();
};
