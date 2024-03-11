import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../config/database';

interface UserAttributes {
  id?: number; 
  emailAddress: string;
  passwordHash: string;
  fullName: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number; 
  public emailAddress!: string;
  public passwordHash!: string;
  public fullName!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export { User, UserAttributes };
