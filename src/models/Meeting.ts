import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database';

export const Meeting = sequelize.define('Meeting', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  meetingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  meetingLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  meetingSummary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: { model: 'Companies', key: 'id' },
  },
});
