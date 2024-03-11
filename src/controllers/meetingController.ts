import { Request, Response, NextFunction } from 'express';
import { Meeting } from '../models/Meeting';
import { processError } from '../utils/processError';

export const getAllMeetings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings);
  } catch (error) {
    next(processError('retrieve', 'meetings', error));
  }
};

export const createMeeting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const meeting = await Meeting.create(req.body);
    res.status(201).json(meeting);
  } catch (error) {
    next(processError('create', 'meeting', error));
  }
};

export const updateMeeting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const [updated] = await Meeting.update(req.body, { where: { id } });
    if (updated) {
      const updatedMeeting = await Meeting.findByPk(id);
      res.json(updatedMeeting);
    } else {
      throw new Error('Meeting not found');
    }
  } catch (error) {
    next(processError('update', 'meeting', error));
  }
};

export const deleteMeeting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await Meeting.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('Meeting not found');
    }
  } catch (error) {
    next(processError('delete', 'meeting', error));
  }
};
