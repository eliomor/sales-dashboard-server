import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { appConfig } from '../config/appConfig';

interface AuthRequest extends Request {
  user?: any; 
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed. No token provided.' });
    }
    const decoded = jwt.verify(token, appConfig.jwtSecret);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed. Invalid or expired token.' });
  }
};
