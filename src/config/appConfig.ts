import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  port: process.env.PORT || '3000',
  environment: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
};
