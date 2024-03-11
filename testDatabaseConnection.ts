// testDatabaseConnection.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST!,
    dialect: 'mysql', // Change this according to your database dialect
    logging: false // Disable logging SQL queries for simplicity
  }
);

// Function to test database connection
async function testDatabaseConnection() {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close Sequelize connection
    await sequelize.close();
    console.log('Database connection has been closed.');
  }
}

// Call the function to test the connection
testDatabaseConnection();
