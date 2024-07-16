import express, { Request, Response } from 'express';
import { FileReaderService } from '../services/FileReaderService';
const router = express.Router();

router.post('/read', async (req: Request, res: Response) => {
    return res.json(await FileReaderService.readUserFile(req.body.path));
});

export default router;