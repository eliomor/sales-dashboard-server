import { Request, Response, NextFunction } from 'express';
import { Company } from '../models/Company';
import { processError } from '../utils/processError';

export const getAllCompanies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    next(processError('retrieve', 'companies', error));
  }
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    next(processError('create', 'company', error));
  }
};

export const updateCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const [updated] = await Company.update(req.body, { where: { id } });
    if (updated) {
      const updatedCompany = await Company.findByPk(id);
      res.json(updatedCompany);
    } else {
      throw new Error('Company not found');
    }
  } catch (error) {
    next(processError('update', 'company', error));
  }
};

export const deleteCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await Company.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Company not found');
    }
  } catch (error) {
    next(processError('delete', 'company', error));
  }
};
