import express from 'express';
import { createCompany, deleteCompany, getAllCompanies, updateCompany } from '../controllers/companyController';
import { authMiddleware } from '../middleware/authMiddleware'; 
const router = express.Router();

router.get('/', authMiddleware, getAllCompanies);
router.post('/', authMiddleware, createCompany);
router.put('/:id', authMiddleware, updateCompany);
router.delete('/:id', authMiddleware, deleteCompany);

export default router;
