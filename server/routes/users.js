import { Router } from 'express'
import { router as controllers } from '../controllers/user.controller.js';

const router = Router();

router.use('/user', controllers);

export { router };