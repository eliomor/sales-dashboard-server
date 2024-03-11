import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {processError} from '../utils/processError';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Register request received:', req.body); 
    const { emailAddress, password, fullName } = req.body;
    const existingUser = await User.findOne({ where: { emailAddress } });
    console.log('Existing user:', existingUser); 
    if (existingUser) {
      return res.status(400).json({ message: 'Email address already in use.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword); 
    const user = await User.create({ emailAddress, passwordHash: hashedPassword, fullName });
    console.log('User registered successfully:', user); 
    res.status(201).json({ message: "User registered successfully", userId: user.id });
  } catch (error: any) {
    console.error('Error registering user:', error); 
    next(processError('register', 'user', error));
  }
};



export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { emailAddress, password } = req.body;
    const user = await User.findOne({ where: { emailAddress } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: 'Invalid email address or password.' });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login successful", token, userId: user.id });
  } catch (error) {
    next(error);
  }
};
