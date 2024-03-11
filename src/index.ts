import express from 'express';
import bodyParser from 'body-parser';
import { appConfig } from './config/appConfig';
import authRoutes from './routes/authRoutes';
import companyRoutes from './routes/companyRoutes';
import meetingRoutes from './routes/meetingRoutes';
import { errorHandler } from './middleware/errorHandler';
import { sequelize } from './config/database'; 

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully.');

    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    const app = express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api/auth', authRoutes);
    app.use('/api/companies', companyRoutes);
    app.use('/api/meetings', meetingRoutes);


    app.use(errorHandler);

    app.listen(appConfig.port, () => {
      console.log(`Server running on port ${appConfig.port} in ${appConfig.environment} mode.`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
