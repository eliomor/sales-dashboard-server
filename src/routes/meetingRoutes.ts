import express from 'express';
import { createMeeting, deleteMeeting, getAllMeetings, updateMeeting } from '../controllers/meetingController';
import { authMiddleware } from '../middleware/authMiddleware'; 
const router = express.Router();

router.get('/', authMiddleware, getAllMeetings);
router.post('/', authMiddleware, createMeeting);
router.put('/:id', authMiddleware, updateMeeting);
router.delete('/:id', authMiddleware, deleteMeeting);

export default router;
