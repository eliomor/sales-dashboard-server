import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database';

export const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  industrySector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  annualRevenue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});
