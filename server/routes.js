import { Router } from 'express';

// importacion de controladores de cada ruta
import userController from './controllers/user.controller.js';
import googleController from './controllers/google.controller.js';

const router = Router(); // el enrutador general

// asignar controlador a cada ruta
router.use('/user', userController);
router.use('/google', googleController);

export { router };